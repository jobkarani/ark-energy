import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ARK|Africa Renewables Katalyst';
  isloading$=new BehaviorSubject<boolean>(false);
  showMobileMenu: boolean = false;

  constructor(private meta: Meta, private activatedRoute: ActivatedRoute){}

  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }

  ngOnInit(){

    initFlowbite(); 
    
    this.isloading$.next(true);
    setTimeout(() => {
      this.isloading$.next(false);
    }, 2000);

    this.meta.addTags([ 
      { name: 'description', content: 'ARK|Africa Renewables Katalyst' }, 
      { name: 'keywords', content: 'ARK, Africa Renewables Katalyst, i-recs, RECs, International Renewable Energy Certificates, Renewable Energy Certificates, Kenyan Renewable Energy Certificates, African Renewable Energy Certificates' } 
    ]);

    this.activatedRoute.fragment.subscribe((route) => {
      console.log(route);
      this.jumpTo(route);
    })
  }

  jumpTo(section: any){
    document.getElementById(section)?.scrollIntoView({behavior: 'smooth'});
  }
}