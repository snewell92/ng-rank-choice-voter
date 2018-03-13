import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VotingComponent } from './voting.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [VotingComponent],
  declarations: [VotingComponent],
  entryComponents: [VotingComponent]
})
export class VotingModule { }
