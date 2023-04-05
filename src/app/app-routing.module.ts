import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbdomenComponent } from './componentes/abdomen/abdomen.component';
import { AboutMeComponent } from './componentes/about-me/about-me.component';
import { BrazosComponent } from './componentes/brazos/brazos.component';
import { EspaldaComponent } from './componentes/espalda/espalda.component';
import { GuiasComponent } from './componentes/guias/guias.component';
import { HombrosComponent } from './componentes/hombros/hombros.component';
import { HomeComponent } from './componentes/home/home.component';
import { PechoComponent } from './componentes/pecho/pecho.component';
import { PiernasComponent } from './componentes/piernas/piernas.component';
import { TricepsComponent } from './componentes/triceps/triceps.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
