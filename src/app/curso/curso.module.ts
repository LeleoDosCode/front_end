import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoComponent } from './curso/curso.component';
import { CursosRoutingModule } from './cursos-routing.module';



@NgModule({
  declarations: [
    CursoComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
  ]
})
export class CursoModule { }
