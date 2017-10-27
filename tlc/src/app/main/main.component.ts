import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent implements OnInit {
    properties
    tenants

    constructor (private http: HttpClient){
    }

  ngOnInit(): void{
    this.http.get('https://tenantlandlordcommunications.herokuapp.com/property')
    .subscribe(data => {
      console.log(data)
      this.properties = data;
    });

    this.http.get('https://tenantlandlordcommunications.herokuapp.com/tenants')
    .subscribe(data => {
      console.log(data)
      this.tenants = data
    })

    this.http.get('https://tenantlandlordcommunications.herokuapp.com/tenant-address')
    .subscribe(data =>{
      console.log(data)
      this.tenants = data
    })





  }


}
