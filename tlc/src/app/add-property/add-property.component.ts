import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  constructor(private http: Http) { }
  propertyObj: object = {};

  addNewProperty = function(property) {
    this.propertyObj = {
      "address": property.address,
      "unit": property.unit,
      "zipcode": property.zipcide,
      "rent": property.rent
    }
    this.http.post('http://localhost:4200/property/', this.propertyObj).subscribe((res:Response) => {
      console.log(res)
    })
  }

  ngOnInit() {
  }

}
