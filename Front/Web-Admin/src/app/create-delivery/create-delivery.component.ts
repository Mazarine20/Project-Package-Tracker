import { Component, OnInit } from '@angular/core';
import {Delivery} from "../shared/models/delivery.model";
import {DeliveryService} from "../shared/services/delivery/delivery.service";
import { PackageService } from "../shared/services/package/package.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-delivery',
  templateUrl: './create-delivery.component.html',
  styleUrls: ['./create-delivery.component.css']
})
export class CreateDeliveryComponent implements OnInit {
  title = 'Web Admin - Create Delivery';

  packageIds: string[] = [];

  deliveryForm: FormGroup

  submitted = false;

  constructor(
    private _formBuilder: FormBuilder,
    private deliveryService: DeliveryService,
    private router: Router,
    private packageService: PackageService
    ) {}

    ngOnInit() {

      // this.packageService.getAll().subscribe((response:Package[]) => {
      //   this.packageIds = response.map((item) => item._id);
      //   console.log(this.packageIds);
      // });

      this.deliveryForm = this._formBuilder.group({
        package_id: ['', Validators.required],
        lat: ['', Validators.required],
        lng: ['', Validators.required],
      });
        
    }

newDelivery(){
  if (this.deliveryForm.invalid){
    return;
  }

  let data : Delivery = {
    package_id: this.deliveryForm.controls['package_id'].value,
    location: {
      type: "Point",
      coordinates: [this.deliveryForm.controls['lat'].value, this.deliveryForm.controls['lng'].value]
    },
  };

  this.deliveryService.createDelivery(data).subscribe(
    (res) => {
      console.log(res);
      alert("Delivery Created Successfully");
      this.submitted = true;
      this.router.navigate(['/']);
    },
    (error) => {
      console.log(error);
    }
  );
}

saveDelivery(): void {
  this.submitted = false;
  this.newDelivery();
}

}
