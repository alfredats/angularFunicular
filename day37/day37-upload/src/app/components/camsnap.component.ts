import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { WebcamImage } from 'ngx-webcam';
import { Subject } from 'rxjs';
import { WebcamService } from '../services/webcam.service';

@Component({
  selector: 'app-camsnap',
  templateUrl: './camsnap.component.html',
  styleUrls: ['./camsnap.component.css'],
})
export class CamsnapComponent implements OnInit {
  webcamImage: WebcamImage | null = null;
  trigger: Subject<void> = new Subject<void>();

  width!: number;

  constructor(private wbcmSvc: WebcamService) {}

  ngOnInit(): void {
    this.width = Math.floor(window.innerWidth / 3);
  }

  triggerSnapshot() {
    this.trigger.next();
  }

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
    this.wbcmSvc.imageSnap.next(webcamImage);
  }

  triggerObservable() {
    return this.trigger.asObservable();
  }
}
