import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';

const url = 'https://tenantlandlordcommunications.herokuapp.com/'
// const url = 'http://localhost:3000/'



@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  propertyObj = {}
  prop = {}


  constructor(private http: Http, private router: Router) { }
  // propertyObj: object = {};

  addNewProperty = function(property) {
    // console.log(this.prop)
    this.propertyObj = {
      "address": property.address,
      "unit": property.unit,
      "zipcode": property.zipcode,
      "rent": property.rent
    }
    this.http.post(url +'property/', this.propertyObj).subscribe((res:Response) => {
      this.router.navigate(['/main'])
    })

  }

  ngOnInit() {
  }

}
