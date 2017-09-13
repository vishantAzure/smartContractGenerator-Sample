import { Component, OnInit } from '@angular/core';
import { Router}  from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Modal } from '../modal';

@Component({
  selector: 'main-app',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {
model;
file;
User = ['Customer','Service_Provider','Company','Admin'];
    constructor(public http: Http,public router: Router) { 
      this.model = new Modal();
    }
  
    ngOnInit() {
    }
  
    fileChange(event) {
        const files = event.target.files;
        this.file = files[0];
    }

    onChange(e){
      this.model.user_type =e;
    }

    upload() {
      let formData:FormData = new FormData();
      formData.append("file", this.file, this.file.name);
      let headers = new Headers();
      headers.append('enctype', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      let options = new RequestOptions({ headers: headers });
     this.http.post('http://localhost:3000/auth/upload',formData,options).subscribe((res)=>{
      console.log(res);
     },(err)=>{
      console.log(err);
     });
    }
  
    download() {
       window.open('http://localhost:3000/auth/download');
    }
  
    Login() {
      let obj ={
        email:this.model.email,
        password:this.model.password,
        type:this.model.user_type
      }
     this.http.post('http://localhost:3000/auth/login',obj).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['/admin']);
     },(err)=>{
      console.log(err);
     });
    }

    Register() {
      let obj ={
        name:this.model.name,
        email:this.model.email,
        password:this.model.password,
        phone:this.model.phone,
        type:this.model.user_type
      }
     this.http.post('http://localhost:3000/auth/signup',obj).subscribe((res)=>{
      console.log(res);
     },(err)=>{
      console.log(err);
     });
    }
}
