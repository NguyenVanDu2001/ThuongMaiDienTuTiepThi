import { HomeComponent } from './../main/home/home.component';
import { Subject } from 'rxjs';
import { SharedService } from '../lib/shared.service';
import { ActivatedRoute } from '@angular/router';
import { Injector, Renderer2 } from '@angular/core';
import { FormBuilder } from '@angular/forms';
export class SearchComponent {
  public unsubscribe = new Subject();
  public _service: SharedService;
  public _route: ActivatedRoute;

  public products:any;
  public formsearch: any;
  public pageSize = 12;
  public totalRecords:any;
  public page = 1;
  public value:any;
  constructor(injector: Injector) {
    this._service = injector.get(SharedService);
    this._route = injector.get(ActivatedRoute);
  }

  search() {
    this._service.get("/api/product/search/"+this.page+'/'+this.pageSize+'/'+this.formsearch.get('pro_name').value).takeUntil(this.unsubscribe).subscribe(res => {
      this.products = res.data;
      this.totalRecords =  res.totalItems;
      this.pageSize = res.pageSize;
      });
  }
}
