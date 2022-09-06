import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card.component';
import { SelectorComponent } from './components/selector.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SelectorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
