import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './pastas/contato/contato.component';
import { HomeComponent } from './pastas/home/home.component';
import { pcgamerComponent } from './pastas/pcgamer/pcgamer';
import { GaleriaComponent } from './pastas/galeria/galeria.component';
import { SobreComponent } from './pastas/sobre/sobre.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'pcgamer', component: pcgamerComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'sobre', component: SobreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
