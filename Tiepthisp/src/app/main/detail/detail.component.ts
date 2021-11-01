import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from 'src/app/lib/base_component';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent  extends BaseComponent implements OnInit {

  ProductById: any;
  ProductViews: any;
  ProductByCategory: any;
  NameCategory: any;
  public pageSize = 4;
  public page = 1;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.refserProById();
    this.refserProViews();
  }
  refserProById()
  {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._service.get('/api/product/get-pro-by-id/'+id).pipe(takeUntil(this.unsubscribe)).subscribe((data: any) => {
        this.ProductById = data;
      });
      let idcat = params['idcat'];
      this._service.get('/api/product/get-pro-by-cate/'+idcat).pipe(takeUntil(this.unsubscribe)).subscribe((data: any) => {
        this.ProductByCategory = data;
      });
    });
    window.scrollTo(0 , 540);
  }

  refserProViews(){
    let top = 4;
    this._service.get("/api/product/get-views/"+top+'/'+this.page+'/'+this.pageSize).takeUntil(this.unsubscribe).subscribe(res=>{
      this.ProductViews = res.data;
    })
  }

}
