import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { LoadingController } from 'ionic-angular';

import 'rxjs/add/operator/map';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  fullname:string = "";
  username:string = "";
  email:string = "";
  password:string = "";
  repassword:string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public loading: LoadingController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  goLogin(){
    this.navCtrl.push(LoginPage)
  }

  register(){
    console.log(123);
    var url = "http://127.0.0.1:8182/api/test";
    // console.log(this.username);
    // console.log(this.email);
    // console.log(this.password);

    var headers = new Headers();

       headers.append('Accept', 'application/json');

       headers.append('Content-Type', 'application/json' );

      //  let options = new RequestOptions({ headers: headers });

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          Authorization: 'my-auth-token'
        })
      };

  

     let data = {
           "fullname": this.fullname,
           "username": this.username,
           "email": this.email,
           "password": this.password 

         };
    
      console.log(data);

    let loader = this.loading.create({

       content: "Processing please wait…",

     });

    //  this.http.post(url, data, httpOptions)

    //  this.http.post(url,data).subscribe(data => {alert(data.data)}).catch(error=>{ alert (error.status)});

  //     loader.present().then(() => {

  // console.log(this.http.post(url,data));
  console.log("Nyahaha");

  let myresponse;

  myresponse = this.http.post(url,data,httpOptions);
  console.log("---")
  console.log(myresponse);
  console.log("---")
   this.http.post(url,data,httpOptions).map((res: Response) => res.json()).subscribe(res => {

  
    console.log(res);
    console.log(Response);
    loader.dismiss()

  //  if(res=="Post successfull"){

  //    let alert = this.alertCtrl.create({

  //      title:"CONGRATS",

  //      subTitle:(res),

  //      buttons: ["OK"]

  //      });

  //      alert.present();
  //     }
  //     else

  //     {
   
  //      let alert = this.alertCtrl.create({
   
  //       title:"ERROR",

  //       subTitle:(res),
 
  //       buttons: ["OK"]
   
  //      });
   
  //        alert.present();
   
  //       }
   
      });
   
   }

}