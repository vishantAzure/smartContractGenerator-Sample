import { Component, OnInit } from '@angular/core';
import { Router}  from '@angular/router';
import { Customer} from './modal';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

declare var Web3;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
public myForm: FormGroup; 
model;
    constructor(private router: Router, private _fb: FormBuilder,public http: Http) {
    let currUser = JSON.parse(localStorage.getItem("User"));
    if(currUser){
      switch(currUser.type){
      case "admin":
          this.router.navigate(['/admin']);
          break;
    }
    }
  }

  ngOnInit() {
    this.myForm = this._fb.group({
            name: ['', [Validators.required, Validators.minLength(5)]],
            addresses: this._fb.array([
                this.initAddress(),
            ])
        });
    }

    initAddress() {
      return this._fb.group({
          street: ['', Validators.required],
          postcode: ['']
      });
  }

  addAddress() {
    const control = <FormArray>this.myForm.controls['addresses'];
    control.push(this.initAddress());
}

removeAddress(i: number) {
    const control = <FormArray>this.myForm.controls['addresses'];
    control.removeAt(i);
}

getEmbark() {
  window.open('http://localhost:3000/embark');
}

save(model: any) {
  console.log(model.value);
}

}
