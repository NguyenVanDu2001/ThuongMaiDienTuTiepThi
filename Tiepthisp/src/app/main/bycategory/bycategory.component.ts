import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from 'src/app/lib/base_component';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-bycategory',
  templateUrl: './bycategory.component.html',
  styleUrls: ['./bycategory.component.css']
})
export class BycategoryComponent extends BaseComponent implements OnInit {


  ProductByCategory: any;
  ProductByCateHot: any;
  NameCategory:any;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.refserProCategory();
  }
  refserProCategory()
  {
    this._route.params.subscribe(params => {
      let id = params['id'];
      let name_cate = params['name_cate'];
      this._service.get('/api/product/get-pro-by-cate/'+id).pipe(takeUntil(this.unsubscribe)).subscribe((data: any) => {
        this.ProductByCategory = data;
        this.NameCategory = name_cate;
        console.log(this.ProductByCategory);
      });
      this._service.get('/api/product/get-pro-by-cate-hot/'+id).pipe(takeUntil(this.unsubscribe)).subscribe((data: any) => {
        this.ProductByCateHot = data;
        console.log(this.ProductByCateHot);
      });
    });
  }
}
