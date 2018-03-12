import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatGridListModule, MatListModule } from '@angular/material';


import { AppComponent } from './app.component';
import { VotingModule } from './voting/voting.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatToolbarModule,
    MatGridListModule,
    VotingModule,
    MatListModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
