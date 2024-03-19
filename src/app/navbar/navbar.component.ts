import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  showMobileMenu: boolean = false;
  
  constructor(private activatedRoute: ActivatedRoute){}

  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }

  ngOnInit(){
    initFlowbite();
    
    this.activatedRoute.fragment.subscribe((route) => {
      console.log(route);
      this.jumpTo(route);
    })
  }
  jumpTo(section: any){
    document.getElementById(section)?.scrollIntoView({behavior: 'smooth'});
  }
}
