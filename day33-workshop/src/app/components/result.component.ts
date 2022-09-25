import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GiphyService } from '../services/giphy.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit, OnDestroy {

  sub$!: Subscription  
  images: string[] = [];

  constructor(private searchSvc: GiphyService) { }
  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  ngOnInit(): void {
    this.sub$ = this.searchSvc.onNewResult.subscribe(
      urls => {
        this.images = urls;
      }
    )
  }

}
