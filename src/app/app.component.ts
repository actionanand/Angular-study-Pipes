import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  servers = [
    {
      instanceType: 'medium',
      name: 'Production',
      status: 'critical',
      started: new Date(13, 1, 2019)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(21, 8, 2018)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(9, 3, 2017)
    }
  ];

  getListGroupItemStatus(server: {instanceType: string, name: string, status: string, started: Date}) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }

  getBadgeStatus(server: {instanceType: string, name: string, status: string, started: Date}) {
    return {
      'badge-success': server.status === 'stable',
      'badge-warning': server.status === 'offline',
      'badge-danger': server.status === 'critical'
    };
  }

}
