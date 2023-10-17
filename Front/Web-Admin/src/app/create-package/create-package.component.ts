import { Component, OnInit } from "@angular/core";
import { Package } from "../shared/models/package.model";
import { PackageService } from "../shared/services/package/package.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: "app-create-package",
  templateUrl: "./create-package.component.html",
  styleUrls: ["./create-package.component.css"],
})
export class CreatePackageComponent implements OnInit{
  title = "Web Admin - Create Package";

  packageForm: FormGroup

  submitted = false;

  constructor(
    private _formBuilder: FormBuilder,
    private packageService: PackageService,
    private router: Router) {}

    ngOnInit() {
      this.packageForm = this._formBuilder.group({
        description: ['', Validators.required],
        weight: ['', Validators.required],
        width: ['', Validators.required],
        height: ['', Validators.required],
        depth: ['', Validators.required],
        from_name: ['', Validators.required],
        from_address: ['', Validators.required],
        from_lat: ['', Validators.required],
        from_lng: ['', Validators.required],
        to_name: ['', Validators.required],
        to_address: ['', Validators.required],
        to_lat: ['', Validators.required],
        to_lng: ['', Validators.required],
      });

    }
  

  newPackage(){
    if (this.packageForm.invalid){
      return;
    }

    let data: Package = {
      //active_delivery_id: this.package.active_delivery_id,
      description: this.packageForm.controls['description'].value,
      weight: this.packageForm.controls['weight'].value,
      width: this.packageForm.controls['width'].value,
      height: this.packageForm.controls['height'].value,
      depth: this.packageForm.controls['depth'].value,
      from_name: this.packageForm.controls['from_name'].value,
      from_address: this.packageForm.controls['from_address'].value,
      from_location: {
        type: "Point",
        coordinates: [this.packageForm.controls['from_lat'].value, this.packageForm.controls['from_lng'].value]
      },
      to_name: this.packageForm.controls['to_name'].value,
      to_address: this.packageForm.controls['to_address'].value,
      to_location: {
        type: "Point",
        coordinates: [this.packageForm.controls['to_lat'].value, this.packageForm.controls['to_lng'].value]
      },
    };

  this.packageService.createPackage(data).subscribe(
  (res) => {
    console.log(res);
    alert("Package Created Successfully");
    this.submitted = true;
    this.router.navigate(['/']);
  },
  (error) => {
    console.log(error);
  }
);
}

  savePackage(): void {
    this.submitted = false;
    this.newPackage();
  }
  
}
