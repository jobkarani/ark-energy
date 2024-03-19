import { Component } from '@angular/core';
import { PlantOwner, ProjectType } from '../interfaces/plant-owner';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment.dev';
import { Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { MainService } from '../services/main.service';

export interface IprojectTypes{
  name: string;
  value: string;
}

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent {
  plantOwner: PlantOwner[] = [];
  plantOwnerFormGroup: FormGroup;

  projectTypes: IprojectTypes[] = [
    {
      name : 'Wind',
      value: 'wind'
    },
    {
      name : 'Solar',
      value: 'solar',
    },
    {
      name : 'Hydro',
      value: 'hydro'
    },
    {
      name : 'Biomass',
      value: 'biomass'
    }
  ]


  constructor(
    private router: Router,
    private _formBuilder: FormBuilder,
    private mainService: MainService,
    private meta: Meta,
  ) {
    this.plantOwnerFormGroup = _formBuilder.group({
      full_name: ['', Validators.required],
      company: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      project_name: ['', Validators.required],
      phone: ['', Validators.required],
      project_type: ['', Validators.required],
      country: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.meta.addTags([ 
      { name: 'description', content: 'ARK|Africa Renewables Katalyst' }, 
      { name: 'keywords', content: 'ARK, Africa Renewables Katalyst, i-recs, RECs, International Renewable Energy Certificates, Renewable Energy Certificates, Kenyan Renewable Energy Certificates, African Renewable Energy Certificates' } 
    ]);
  }

  onSubmit() {
    if (!this.plantOwnerFormGroup.valid) {
      const controls = this.plantOwnerFormGroup.controls;
      for (const name in controls) {
        if (controls[name].invalid) {
          this.mainService.showSnackBarMessage(`Missing Field ${name}`);
        }
      }
      return;
    }

    let capturedData: PlantOwner = this.plantOwnerFormGroup.value;

    this.mainService
      .makeDataPostRequest(`${environment.MAIN_URL}/plantOwners/`, capturedData)
      .subscribe(
        (data) => {
          this.router.navigate(['/success']);
        },
        (error) => {
          this.mainService.showSnackBarMessage(error)
        }
      );
  }
}
