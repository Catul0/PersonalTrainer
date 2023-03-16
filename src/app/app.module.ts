import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortadaInicialComponent } from './componentes/portada-inicial/portada-inicial.component';
import { TarjetasComponent } from './componentes/tarjetas/tarjetas.component';
import { AboutMeComponent } from './componentes/about-me/about-me.component';
import { HomeComponent } from './componentes/home/home.component';
import { GuiasComponent } from './componentes/guias/guias.component';
import { AbdomenComponent } from './componentes/abdomen/abdomen.component';
import { PechoComponent } from './componentes/pecho/pecho.component';
import { EspaldaComponent } from './componentes/espalda/espalda.component';
import { BrazosComponent } from './componentes/brazos/brazos.component';
import { TricepsComponent } from './componentes/triceps/triceps.component';
import { PiernasComponent } from './componentes/piernas/piernas.component';
import { HombrosComponent } from './componentes/hombros/hombros.component';

@NgModule({
  declarations: [
    AppComponent,
    PortadaInicialComponent,
    TarjetasComponent,
    AboutMeComponent,
    HomeComponent,
    GuiasComponent,
    AbdomenComponent,
    PechoComponent,
    EspaldaComponent,
    BrazosComponent,
    TricepsComponent,
    PiernasComponent,
    HombrosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
