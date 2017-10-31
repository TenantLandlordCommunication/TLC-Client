import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  RequestOptions, Headers, Http } from '@angular/http'
// import { Headers, Http } from '@angular/http'

const url = 'https://tenantlandlordcommunications.herokuapp.com/'
// const url = 'http://localhost:3000/property'


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent implements OnInit {
    properties
    tenants



    constructor (private http: HttpClient){}




  ngOnInit(): void{
    this.http.get(url)
    .subscribe(data => {
      console.log(data)
      this.properties = data;
    });

    this.http.get(url + 'tenants')
    .subscribe(data => {
      console.log(data)
      this.tenants = data
    })

    this.http.get(url + 'tenant-address')
    .subscribe(data =>{
      console.log(data)
      this.tenants = data
    })

  }


  deleteProperty(body) {
    return this.http.delete(url +'property'+ body.id)
    .subscribe(data => {
      this.properties = this.properties.filter(function(property){
        return property.id !== body.id
      })
    })
  }

}
