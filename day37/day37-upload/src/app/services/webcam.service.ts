import { Injectable } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Subject } from 'rxjs';

@Injectable()
export class WebcamService {
  imageSnap = new Subject<WebcamImage>();
}
