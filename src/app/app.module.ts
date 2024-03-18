import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeroComponent } from './hero/hero.component';
import { CtaComponent } from './cta/cta.component';
import { LearnMoreComponent } from './learn-more/learn-more.component';
import { IRecsComponent } from './i-recs/i-recs.component';
import { HowToStartComponent } from './how-to-start/how-to-start.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    FooterComponent,
    LandingPageComponent,
    HeroComponent,
    CtaComponent,
    LearnMoreComponent,
    IRecsComponent,
    HowToStartComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
