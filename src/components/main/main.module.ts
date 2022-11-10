import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { LayoutModule } from '../layout';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { PorfolioComponent } from './porfolio/porfolio.component';
import { PersonalityComponent } from './personality/personality.component';
import { ContactComponent } from './contact/contact.component';
import { ContributeComponent } from './contribute/contribute.component';
import { DirectivesModule } from '@directives'
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceModule } from '@services';
@NgModule({
  declarations: [
    MainComponent,
    BannerComponent,
    AboutComponent,
    ResumeComponent,
    PorfolioComponent,
    PersonalityComponent,
    ContactComponent,
    ContributeComponent
  ],
  imports: [
    LayoutModule,
    DirectivesModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
