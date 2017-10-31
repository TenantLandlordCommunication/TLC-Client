import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  RequestOptions, Headers, Http } from '@angular/http'
// import { Headers, Http } from '@angular/http'



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

    this.http.get('http://localhost:3000/tenant-address')
    .subscribe(data =>{
      console.log(data)
      this.tenants = data
    })

  }


  deleteProperty(body) {
    return this.http.delete('http://localhost:3000/property'+ body.id)
    .subscribe(data => {
      this.properties = this.properties.filter(function(property){
        return property.id !== body.id
      })
    })
  }

}
