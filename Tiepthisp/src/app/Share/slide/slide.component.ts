import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from 'src/app/lib/base_component';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent extends BaseComponent implements OnInit {

  public EventList:any;
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.refserEventList()
  }
  refserEventList(){
    this.EventList=[];
    this._service.get("/api/event/event-get-new").subscribe(data=>{
      this.EventList = data;
    })
  }

}
