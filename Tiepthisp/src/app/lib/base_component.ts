import { of as observableOf, fromEvent, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { FileUpload } from 'primeng/fileupload';
import { SharedService } from '../lib/shared.service';
import { ActivatedRoute } from '@angular/router';
import { Injector, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export class BaseComponent {

  public genders: any;
  public roles: any;
  public locale_vn:any;
  public today: any;
  public dateFormat: any;
  public unsubscribe = new Subject();
  public _service: SharedService;
  public _route: ActivatedRoute;
  public _renderer: Renderer2;
  constructor(injector: Injector) {
    this.today = new Date();
    this.dateFormat = "dd/mm/yy";
    this.genders =  [
      {label:'Nam',value:'Nam'},
      {label:'Nữ',value:'Nữ'},
      {label:'Khác',value:'Khác'}
    ];
    this.roles =  [
      {label:'Admin',value:'Admin'},
      {label:'User',value:'User'}
    ];
    this.locale_vn={
      "firstDayOfWeek": 1,
      "dayNames": [
        "Chủ nhật",
        "Thứ 2",
        "Thứ 3",
        "Thứ 4",
        "Thứ 5",
        "Thứ 6",
        "Thứ 7"
      ],
      "dayNamesShort": [
        "CN",
        "T2",
        "T3",
        "T4",
        "T5",
        "T6",
        "T7"
      ],
      "dayNamesMin": [
        "CN",
        "T2",
        "T3",
        "T4",
        "T5",
        "T6",
        "T7"
      ],
      "monthNames": [
        "Tháng 1",
        "Tháng 2",
        "Tháng 3",
        "Tháng 4",
        "Tháng 5",
        "Tháng 6",
        "Tháng 7",
        "Tháng 8",
        "Tháng 9",
        "Tháng 10",
        "Tháng 11",
        "Tháng 12"
      ],
      "monthNamesShort": [
        "Th 1",
        "Th 2",
        "Th 3",
        "Th 4",
        "Th 5",
        "Th 6",
        "Th 7",
        "Th 8",
        "Th 9",
        "Th 10",
        "Th 11",
        "Th 12"
      ],
      "today": "Hôm nay",
      "clear": "Xóa"
    };
    this._service = injector.get(SharedService);
    this._route = injector.get(ActivatedRoute);
    this._renderer =injector.get(Renderer2);
  }
  public loadDetaill() {
    this.renderExternalScript('assets/js/common.js').onload = () => {};
  }
  public renderExternalScript(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.async = true;
    script.defer = true;
    this._renderer.appendChild(document.body, script);
    return script;
  }

  public formsearch: any;
  dataSearch()
  {
    this.formsearch = new FormGroup ({
      pro_name: new FormControl(''),
      price_max: new FormControl(''),
      price_min: new FormControl(''),
    });

  }
  // public formprice: any;
  // dataPrice()
  // {
  //   this.formprice = new FormGroup ({
  //     price_max: new FormControl(''),
  //     price_min: new FormControl(''),
  //   });

  // }
  public products:any;
  public pageSize = 12;
  public totalRecords:any;
  public page = 1;
  public a = [];
  public range = [];
  search() {
    if(this.formsearch.get('price_max').value==""){
      this.formsearch.price_max = 1000000000;
      this.formsearch.price_min = 0;
      console.log(this.formsearch.price_max)
      this._service.get("/api/product/search/"+this.page+'/'+this.pageSize
      +'/'+this.formsearch.price_max
      +'/'+this.formsearch.price_min
      +'/'+this.formsearch.get('pro_name').value)
      .takeUntil(this.unsubscribe).subscribe(res => {
        this.products = res.data;
        this.totalRecords =  res.totalItems;
        this.pageSize = res.pageSize;

        if(this.range.length != 0){
          this.range = [];
        }
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
        console.log("ok ngon")
      });
    }else{
      this._service.get("/api/product/search/"+this.page+'/'+this.pageSize
      +'/'+this.formsearch.get('price_max').value
      +'/'+this.formsearch.get('price_min').value
      +'/'+this.formsearch.get('pro_name').value)
      .takeUntil(this.unsubscribe).subscribe(res => {
        this.products = res.data;
        this.totalRecords =  res.totalItems;
        this.pageSize = res.pageSize;

        if(this.range.length != 0){
          this.range = [];
        }
        for(var i=1;i<= this.totalRecords;i++) {
          if(i===1)
          {
            this.a[0] = "";
            this.a[i] = "active";
          }else{
            this.a[i] = "";
          }
          this.range.push(i);
      console.log(res)
        }
      });
    }
  }
  loadPage(pages:any) {
    this._service.get("/api/product/search/"+pages+'/'+this.pageSize+'/'+this.formsearch.get('pro_name').value).takeUntil(this.unsubscribe).subscribe(res => {
      this.products = res.data;
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
    window.scrollTo(0 , 880);
  }
}
