import { Component } from '@angular/core';

@Component ({
  // tslint:disable-next-line:component-selector
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']

})
export class ServerComponent {
  // tslint:disable-next-line:no-inferrable-types
  serverId: number = 10 ;
  // tslint:disable-next-line:no-inferrable-types
  ServerStatus: string = 'offline';

  getServerStatus() {
    return this.ServerStatus;
  }

}
