import { takeUntil } from 'rxjs/operators';
import { Component, Injector, OnInit, ViewChild } from '@angular/core';

import { FormBuilder, Validators} from '@angular/forms';
import { BaseComponent } from 'src/app/lib/base_component';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BaseComponent implements OnInit {

  public ProductList: any;
  public ProductNew: any;
  public ProductViews: any;
  public Producpage:any;

  // public uploadedFiles: any[] = [];
  // public doneSetupForm: any;
  // public showUpdateModal:any;
  // public isCreate:any;
  //@ViewChild(FileUpload, { static: false }) file_image: FileUpload;
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    //this.refserProList();
    this.refserProNew();
    this.refserProViews();
    // this.dataSearch(this.value);
    this.dataSearch();
    // this.dataPrice();
    this.search();
  }
  // refserProList(){
  //   this.ProductList=[];
  //   this._service.get("/api/product/get-all/").subscribe(data=>{
  //     this.ProductList = data;
  //   })
  // }
  refserProNew(){
    let top = 4;
    this._service.get("/api/product/get-new/"+top+'/'+this.page+'/'+this.pageSize).takeUntil(this.unsubscribe).subscribe(res=>{
      this.ProductNew = res.data;
      //this.totalRecords = res.totalItems;
    })
  }
  refserProViews(){
    let top = 4;
    this._service.get("/api/product/get-views/"+top+'/'+this.page+'/'+this.pageSize).takeUntil(this.unsubscribe).subscribe(res=>{
      this.ProductViews = res.data;
      //this.totalRecords = res.totalItems;
    })
  }
  // loadPage(page:any) {
  //   this._service.get("/api/product/get-new/"+top+'/'+this.page+'/'+this.pageSize).takeUntil(this.unsubscribe).subscribe(res => {
  //     this.Producpage = res.data;
  //     this.totalRecords =  res.totalItems;
  //     this.pageSize = res.pageSize;
  //   });
  // }
  // dataSearch(value)
  // {
  //   this.formsearch = this.fb.group({
  //     'pro_name': ['',value],
  //   });
  // }
  // search() {
  //   this._service.get("/api/product/search/"+this.page+'/'+this.pageSize+'/'+this.formsearch.get('pro_name').value).takeUntil(this.unsubscribe).subscribe(res => {
  //     this.products = res.data;
  //     this.totalRecords =  res.totalItems;
  //     this.pageSize = res.pageSize;
  //     });
  // }
  // loadPage(page:any) {
  //   this._service.post('/api/product/search',{page: page, pageSize: this.pageSize}).takeUntil(this.unsubscribe).subscribe(res => {
  //     this.Producpage = res.data;
  //     this.totalRecords =  res.totalItems;
  //     this.pageSize = res.pageSize;
  //   });
  // }
  // search() {
  //   this._service.post('/api/product/search',{page: this.page, pageSize: this.pageSize, pro_name: this.formsearch.get('pro_name').value}).takeUntil(this.unsubscribe).subscribe(res => {
  //     this.products = res.data;
  //     this.totalRecords =  res.totalItems;
  //     this.pageSize = res.pageSize;
  //     });
  // }
}
