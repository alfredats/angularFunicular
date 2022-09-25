import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-num-display',
  templateUrl: './num-display.component.html',
  styleUrls: ['./num-display.component.css'],
})
export class NumDisplayComponent implements OnInit {
  num!: number;
  display!: string;

  constructor(private activatedRoute: ActivatedRoute, private title: Title) {}

  ngOnInit(): void {
    this.num = this.activatedRoute.snapshot.params['num'];
    this.display = `/assets/numbers/number${this.num}.jpg`;
    this.title.setTitle(`Number: ${this.num}`);
  }
}
