import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbdomenComponent } from './componentes/abdomen/abdomen.component';
import { AboutMeComponent } from './componentes/about-me/about-me.component';
import { BrazosComponent } from './componentes/brazos/brazos.component';
import { EspaldaComponent } from './componentes/espalda/espalda.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { GuiasComponent } from './componentes/guias/guias.component';
import { HombrosComponent } from './componentes/hombros/hombros.component';
import { HomeComponent } from './componentes/home/home.component';
import { PechoComponent } from './componentes/pecho/pecho.component';
import { PiernasComponent } from './componentes/piernas/piernas.component';
import { TricepsComponent } from './componentes/triceps/triceps.component';

const routes: Routes = [
  {path: '',redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'aboutMe', component:AboutMeComponent},
  {path:'guias', component:GuiasComponent},
  {path:'abdomen', component:AbdomenComponent},
  {path:'pecho', component:PechoComponent},
  {path:'espalda', component:EspaldaComponent},
  {path:'brazos', component:BrazosComponent},
  {path:'triceps', component:TricepsComponent},
  {path:'piernas', component:PiernasComponent},
  {path:'hombros', component:HombrosComponent},
  {path:'form', component:FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
