import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Criteria } from '../models';
import { GiphyService } from '../services/giphy.service';

@Component({
  selector: 'app-gif-search',
  templateUrl: './gif-search.component.html',
  styleUrls: ['./gif-search.component.css'],
})
export class GifSearchComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder, private searchSvc: GiphyService) {}

  ngOnInit(): void {
    this.form = this.makeForm();
  }

  private makeForm(): FormGroup {
    return this.fb.group({
      apiKey: this.fb.control<string>('', [Validators.required]),
      search: this.fb.control<string>('', [Validators.required]),
      results: this.fb.control<number>(5),
      rating: this.fb.control<string>('g'),
    });
  }

  processForm() {
    console.log('>>> form: ', this.form.value);
    this.searchSvc
      .search(this.form.value as Criteria)
      .then((result) => {
        console.log('>>> result: ', result);
        this.saveApiKey(this.form.value.apiKey);
        this.searchSvc.onNewResult.next(result);
        this.form = this.makeForm();
      })
      .catch((error) => {
        console.error('>>> error: ', error);
      });
  }

  private getApiKey(): string {
    let key = localStorage.getItem('apiKey');
    if (!key) {
      return '';
    }
    return key;
  }

  private saveApiKey(key: string) : void {
    localStorage.setItem("apiKey", key);
  }
}
