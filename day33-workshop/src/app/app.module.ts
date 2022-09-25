import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GifSearchComponent } from './components/gif-search.component';
import { ResultComponent } from './components/result.component'

import { GiphyService } from './services/giphy.service';

@NgModule({
  declarations: [
    AppComponent,
    GifSearchComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ GiphyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
