import { Injectable } from '@angular/core';
import * as feathersImport from '@feathersjs/client';
import { Application, Service } from '@feathersjs/feathers';
import io from 'socket.io-client';

import { environment } from '../../environments/environment';

@Injectable()
export class FeathersService {

  private feathersClient: FeathersClient;

  constructor() {
    const feathers = feathersImport;
    const socket = io(environment.apiUrl);

    this.feathersClient = feathers()
      .configure(feathers.socketio(socket))
      .configure(feathers.hooks());
  }

  public getFeathersClient = () => this.feathersClient;
  public getService: <T>(name: string) => Service<T> = name => this.feathersClient.service(name);
}

type DorianSetup = {
  authenticate: () => Promise<any>;
  logout: () => Promise<any>; // TODO what does it return?
}

export type FeathersClient = Application & DorianSetup;

export { Service };
