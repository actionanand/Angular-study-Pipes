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
      name: 'Production Server',
      status: 'critical',
      started: new Date('Oct 19, 2019, 11:57:32 GMT+05.30')
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(2018,3,21,17,59,10)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(2018,7,17)
    },
    {
      instanceType: 'small',
      name: 'Old Server',
      status: 'critical',
      started: new Date(92,0,16)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(1551531600000)
    }
  ];

  filteredString ='';
  testServerCount:number = 1;

  asyncStaus = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('stable');
    },2000);
  });

  onAddNewServer(){
    this.servers.push({
      instanceType: 'small',
      name: 'Test Server '+ this.testServerCount,
      status: 'offline',
      started: new Date()
    });
    this.testServerCount++;
  }

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
