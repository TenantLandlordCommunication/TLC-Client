import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


const url = 'https://tenantlandlordcommunications.herokuapp.com/'
// const url = 'http://localhost:3000/'


@Component({
  selector: 'app-addtenant',
  templateUrl: './addtenant.component.html',
  styleUrls: ['./addtenant.component.css']
})
export class AddtenantComponent implements OnInit {
  tenantObj = {}
  tenant = {}
  properties

  constructor(private http: HttpClient, private router: Router) { }

  addNewTenant = function(tenant) {
    console.log(tenant)
    this.tenantObj = {
      "name": tenant.name,
      "number": tenant.number,
      "email": tenant.email,
      "rent": tenant.rentdue
    }
    this.http.post(url + 'tenants/', this.tenantObj).subscribe((res:Response) => {
      this.router.navigate(['/main'])


    })
  }


  ngOnInit() {
    this.http.get(url + 'property')
    .subscribe(data => {
      this.properties = data;
    });
  }



}
