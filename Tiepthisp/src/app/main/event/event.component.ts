import { BaseComponent } from './../../lib/base_component';
import { Component, OnInit, Injector } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent extends BaseComponent implements OnInit {
  EventList : any;
  profile:any;
  constructor(injector: Injector) {
    super(injector)
  }

  ngOnInit(): void {
    this.profile= (JSON.parse(localStorage.getItem('user')));
    this.eventlist();
    console.log(this.profile)
  }
  eventlist()
  {
    this._service.get("/api/event/event-get-new").subscribe(data =>{
      this.EventList = data;
      window.scrollTo(0 , 590);
    })
  }
  Getcode(ID_User:any, ID_Event:any) {
    this._service.get("/api/code/create-code/"+ID_User+'/'+ID_Event).subscribe(data =>{
    });
    alert('Lấy mã thành công');
  }
}
