import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoComponent } from './curso/curso.component';
import { CursoFormComponent } from './curso-form/curso-form.component';

const routes: Routes = [
  {path:"", component: CursoComponent},
  {path:"novo", component: CursoFormComponent},
  {path:"editar/:id", component: CursoFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
