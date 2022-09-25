import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WebcamImage } from 'ngx-webcam';
import { Subscription } from 'rxjs';
import { WebcamService } from '../services/webcam.service';

type ImageOrNull = WebcamImage | null;

@Component({
  selector: 'app-snapform',
  templateUrl: './snapform.component.html',
  styleUrls: ['./snapform.component.css'],
})
export class SnapformComponent implements OnInit, OnDestroy {
  capturedImage: ImageOrNull = null;
  imageSub$!: Subscription;

  form!: FormGroup;

  constructor(private wbcmSvc: WebcamService, private fb: FormBuilder) {}

  ngOnDestroy(): void {
    this.wbcmSvc.imageSnap.unsubscribe();
  }

  ngOnInit(): void {
    this.imageSub$ = this.wbcmSvc.imageSnap.subscribe((image) => {
      this.capturedImage = image;
    });
  }

  makeForm() {
    return this.fb.group({
      title: this.fb.control<string>('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      image: this.fb.control<ImageOrNull>(this.capturedImage, [
        Validators.required,
      ]),
    });
  }

  processForm() {
    this.capturedImage = null;
  }
}
