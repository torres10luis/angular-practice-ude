import { Component } from '@angular/core';

@Component ({
  // tslint:disable-next-line:component-selector
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']

})
export class ServerComponent {
  serverId: 10;
  ServerStatus: 'offline';


}
