import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoModule } from './Curso/curso.module';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'cursos'},
  {path:'cursos', loadChildren:()=> CursoModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
