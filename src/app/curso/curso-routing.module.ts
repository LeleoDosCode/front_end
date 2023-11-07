import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarCursosComponent } from './listar-cursos/listar-cursos.component';
import { FormCursosComponent } from './form-cursos/form-cursos.component';

const routes: Routes = [
  {path:"", component: ListarCursosComponent},
  {path:"novo", component: FormCursosComponent},
  {path:"editar/:id", component: ListarCursosComponent}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoRoutingModule { }
