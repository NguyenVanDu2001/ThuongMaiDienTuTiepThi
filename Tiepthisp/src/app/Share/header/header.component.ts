import { AuthenticationService } from './../../lib/authentication.service';
import { BaseComponent } from 'src/app/lib/base_component';
import { Component, OnInit, Injector } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BaseComponent implements OnInit {
  CategoryList: any;

  profile:any;

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private fb: FormBuilder, injector: Injector) {
    super(injector);
    // if (this.authenticationService.userValue) {
    //   this.router.navigate(['/']);
    // }
  }
  ngOnInit(): void {
    this.profile= (JSON.parse(localStorage.getItem('user')));
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: [''],
    });
    // get return url from route parameters or default to '/'
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    this.refserCatogory();
    this.dataSearch();
    // this.dataPrice()
    this.search();
  }
  refserCatogory(){
    this.CategoryList = [];
    this._service.get("/api/category/get-all").subscribe(data=>{
      this.CategoryList = data;
    })
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService
      .login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
      );
      alert('Đăng nhập thành công');
      this.closeModal();
    window.location.reload();
  }
  logout() {
    this.authenticationService.logout();
    window.location.reload();
  }
  closeModal() {
    $('#LoginForm').closest('.modal').modal('hide');
  }
}
