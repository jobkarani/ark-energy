import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ARK|Africa Renewables Katalyst';
  isloading$=new BehaviorSubject<boolean>(false);

  constructor(private meta: Meta){}

  ngOnInit(){

    this.isloading$.next(true);
    setTimeout(() => {
      this.isloading$.next(false);
    }, 2000);

    this.meta.addTags([ 
      { name: 'description', content: 'ARK|Africa Renewables Katalyst' }, 
      { name: 'keywords', content: 'ARK, Africa Renewables Katalyst, i-recs, RECs, International Renewable Energy Certificates, Renewable Energy Certificates, Kenyan Renewable Energy Certificates, African Renewable Energy Certificates' } 
    ]);
  }
}