import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Http, Response, Headers } from '@angular/http';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent implements OnInit {
    properties
    tenants

    constructor (private http: HttpClient){
      // id:number;
      // private headers = new Headers ({ 'Content-type': 'application/json'})
    }

  ngOnInit(): void{
    // this.http.get('https://tenantlandlordcommunications.herokuapp.com/property')
    this.http.get('http://localhost:3000/property')
    .subscribe(data => {
      console.log(data)
      this.properties = data;
    });

    this.http.get('http://localhost:3000/tenants')
    .subscribe(data => {
      console.log(data)
      this.tenants = data
    })

    this.http.get('https://tenantlandlordcommunications.herokuapp.com/tenant-address')
    .subscribe(data =>{
      console.log(data)
      this.tenants = data
    })

    // this.http.get('http://localhost:3000/property')
    // .subscribe(data => {
    //   console.log(data)
    //   this.properties = data;
    // });



  }


}
