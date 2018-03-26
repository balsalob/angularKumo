import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// servicios

import { IlustracionesService } from './services/ilustraciones.service';

// componentes
import { MaterializeModule } from 'angular2-materialize';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/search/navbar/navbar.component';
import { FooterComponent } from './components/search/footer/footer.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutComponent } from './components/about/about.component';
import { EventComponent } from './components/event/event.component';
import { YoutubeComponent } from './components/youtube/youtube.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    PortfolioComponent,
    AboutComponent,
    EventComponent,
    YoutubeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule
  ],
  providers: [
    IlustracionesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
