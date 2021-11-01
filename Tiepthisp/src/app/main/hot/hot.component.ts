import { BaseComponent } from './../../lib/base_component';
import { Component, OnInit, Injector } from '@angular/core';

@Component({
  selector: 'app-hot',
  templateUrl: './hot.component.html',
  styleUrls: ['./hot.component.css']
})
export class HotComponent extends BaseComponent implements OnInit {
  public ProductNew:any;
  public ProductViews:any;
  public totalRecords:any;
  public a = [];
  public range = [];
  public page = 1;
  public pageSize = 16;
  public data:any;
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.refserProViews();
    this.refserProNew()
  }
  refserProViews(){
    let top = 0;
    this._service.get("/api/product/get-views/"+top+'/'+this.page+'/'+this.pageSize).takeUntil(this.unsubscribe).subscribe(res=>{
      this.ProductViews = res.data;
      this.totalRecords = res.totalItems;
      for(var i=1;i<= this.totalRecords;i++) {
        if(i===1)
        {
          this.a[0] = "";
          this.a[i] = "active";
        }else{
          this.a[i] = "";
        }
        this.range.push(i);
      }
    })
    window.scrollTo(0 , 690);
  }
  loadPage(pages:any) {
    let top = 0;
    this._service.get("/api/product/get-views/"+top+'/'+pages+'/'+this.pageSize).takeUntil(this.unsubscribe).subscribe(res => {
      this.ProductViews = res.data;
      this.totalRecords = res.totalItems;
      for(var i=1;i<= this.totalRecords;i++) {
        if(i===pages)
        {
          this.a[0] = "";
          this.a[i] = "active";
        }else{
          this.a[i] = "";
        }
      }
    })
    window.scrollTo(0 , 870);
  }
  refserProNew(){
    let top = 4;
    this._service.get("/api/product/get-new/"+top+'/'+this.page+'/'+this.pageSize).takeUntil(this.unsubscribe).subscribe(res=>{
      this.ProductNew = res.data;
      //this.totalRecords = res.totalItems;
    })
  }

}
