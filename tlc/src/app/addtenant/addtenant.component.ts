import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';




@Component({
  selector: 'app-addtenant',
  templateUrl: './addtenant.component.html',
  styleUrls: ['./addtenant.component.css']
})
export class AddtenantComponent implements OnInit {
  tenantObj = {}
  tenant = {}
  properties

  constructor(private http: Http) { }

  addNewTenant = function(tenant) {
    // console.log(this.prop)
    this.tenantObj = {
      "name": tenant.name,
      "number": tenant.number,
      "email": tenant.email
    }
    this.http.post('https://tenantlandlordcommunications.herokuapp.com/tenants/', this.tenantObj).subscribe((res:Response) => {
      return res
    })
  }


  ngOnInit() {
  }

}
