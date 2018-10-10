import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import FormsModule and HttpModule
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  // Add FormsModule and HttpModule to imports array
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
