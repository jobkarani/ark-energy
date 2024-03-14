import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TeamComponent } from './team/team.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeroComponent } from './hero/hero.component';
import { CtaComponent } from './cta/cta.component';
import { LearnMoreComponent } from './learn-more/learn-more.component';
import { IRecsComponent } from './i-recs/i-recs.component';
import { HowToStartComponent } from './how-to-start/how-to-start.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TeamComponent,
    FooterComponent,
    LandingPageComponent,
    HeroComponent,
    CtaComponent,
    LearnMoreComponent,
    IRecsComponent,
    HowToStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
