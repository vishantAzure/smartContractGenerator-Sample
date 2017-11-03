import { Component, OnInit } from '@angular/core';
import { Router}  from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Modal } from '../../modal';
import { ToasterService} from 'angular2-toaster';
import * as config from '../../../../../config/config';

declare var $;
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
})
export class ForgotComponent implements OnInit {
  private toasterService: ToasterService;
  model;
  message;
  User = ['Select User','Customer','Service_Provider','Company'];
      constructor(public http: Http,public router: Router ,toasterService: ToasterService) { 
        this.toasterService = toasterService;
        this.model = new Modal();
      }
    
      ngOnInit() {}
    
      Submit() {
        let obj ={email:this.model.email}

        this.http.post('//'+config.global_ip+'/auth/forgot',obj).subscribe((res:any)=>{
          var result = JSON.parse(res._body);
          if(result.status==200) {
            this.message=result.res;
            $('#message').modal('toggle');
            setTimeout(function(){ 
              $('#message').modal('toggle');
            }, 2000);
          }else if(result.status==300){
            this.message=result.res;
            $('#message').modal('toggle');
            setTimeout(function(){ 
              $('#message').modal('toggle');
            }, 2000);
          }
        },(err)=>{
          this.message=err;
          $('#message').modal('toggle');
          setTimeout(function(){ 
            $('#message').modal('toggle');
          }, 2000);
       });
      }
}
