import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VotingModule } from './voting/voting.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VotingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
