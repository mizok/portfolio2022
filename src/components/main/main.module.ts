import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { LayoutModule } from '../layout';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { PorfolioComponent } from './porfolio/porfolio.component';
import { PersonalityComponent } from './personality/personality.component';
import { ContactComponent } from './contact/contact.component';
import { ContributeComponent } from './contribute/contribute.component';


@NgModule({
  declarations: [
    MainComponent,
    BannerComponent,
    AboutComponent,
    ResumeComponent,
    PorfolioComponent,
    PersonalityComponent,
    ContactComponent,
    ContributeComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
