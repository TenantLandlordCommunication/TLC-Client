import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  propertyObj = {}
  prop = {}


  constructor(private http: Http) { }
  // propertyObj: object = {};

  addNewProperty = function(property) {
    // console.log(this.prop)
    this.propertyObj = {
      "address": property.address,
      "unit": property.unit,
      "zipcode": property.zipcode,
      "rent": property.rent
    }
    this.http.post('https://tenantlandlordcommunications.herokuapp.com/property/', this.propertyObj).subscribe((res:Response) => {
      return res
    })

  }

  ngOnInit() {
  }

}
