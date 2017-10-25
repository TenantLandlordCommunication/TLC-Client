import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tenant Landlord Communications';
  tenants = []

  constructor (private http: HttpClient){

  }
  ngOnInit(): void{

  }


}
