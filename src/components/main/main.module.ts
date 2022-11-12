import { NgModule } from '@angular/core';
import { MainTwComponent } from './main-tw/main-tw.component';
import { MainEnComponent } from './main-en/main-en.component';
import { LayoutModule } from '../layout';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PersonalityComponent } from './personality/personality.component';
import { ContactComponent } from './contact/contact.component';
import { ContributeComponent } from './contribute/contribute.component';
import { DirectivesModule } from '@directives'
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceModule } from '@services';
@NgModule({
  declarations: [
    MainTwComponent,
    MainEnComponent,
    BannerComponent,
    AboutComponent,
    ResumeComponent,
    PortfolioComponent,
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
    ServiceModule,

  ],
  exports: [
    MainTwComponent,
    MainEnComponent
  ]
})
export class MainModule { }
