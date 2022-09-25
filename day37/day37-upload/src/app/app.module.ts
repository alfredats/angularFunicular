import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { WebcamModule } from 'ngx-webcam';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CamsnapComponent } from './components/camsnap.component';
import { SnapformComponent } from './components/snapform.component';
import { WebcamService } from './services/webcam.service';

const appRoutes: Routes = [
  {path: '', component: CamsnapComponent},
  {path: 'upload', component: SnapformComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  declarations: [AppComponent, CamsnapComponent, SnapformComponent],
  imports: [BrowserModule, WebcamModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  providers: [WebcamService],
  bootstrap: [AppComponent],
})
export class AppModule {}
