import { Injectable } from '@angular/core';

import { FeathersService, Service } from './common';

export interface Vote {
  voterID: number,
  topicIDs: number[]
}

@Injectable()
export class CastVoteService {

  private voteService: Service<Vote>

  constructor(private feathersClient: FeathersService) {
    this.voteService = this.feathersClient.getService('vote');
  }

  public async castVote(email: string, topicIDs: number[]) {
    this.validateInput(email, topicIDs);
    const voterID = await this.getOrCreateVoterID(email);
    this.castOrUpdateVote(voterID, topicIDs);
  }

  private validateInput = (email: string, topicIDs) => {
    if(!email || !topicIDs || topicIDs.length <= 0) {
      throw new Error('Invalid castVote call.');
    }

    return true;
  }

  private getOrCreateVoterID = async (email: string) =>
    await 5;

  private castOrUpdateVote = async (voterID: number, topicIDs: number[]) =>
    (await this.hasVotesCast(voterID))
      ? this.updateVotes(voterID, topicIDs)
      : this.createNewVote(voterID, topicIDs);

  private async hasVotesCast(voterID: number) {
    let resp = await this.voteService.get(voterID);
  }

  private updateVotes = (voterID: number, topicIDs: number[]) =>
    this.voteService.update();

  private createNewVote = (voterID: number, topicIDs: number[]) =>
    this.voteService.create({ voterID, topicIDs });

}
