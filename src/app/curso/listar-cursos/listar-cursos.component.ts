import { Component, OnInit } from '@angular/core';
import { Icursos } from '../service/icursos';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { CursosService } from '../service/cursos.service';

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.scss']
})
export class ListarCursosComponent implements OnInit{
  cursos: Icursos[]=[];

  form = new FormGroup({
    id: new FormControl(),
    nome: new FormControl(''),
  })

  constructor(
    private service: CursosService,
    private router: Router,
    private route: ActivatedRoute){}

  ngOnInit(): void {
      this.Listar();
  }

  Listar(){
    this.service.listar().subscribe(dados => this.cursos = dados);
  }

  Editar(id:number){
    this.router.navigate(['editar', id], [relativeTo: this.route]);
  }

  Excluir(id: number){
    this.service.excluir(id).subscribe(
      sucess => {
        alert("Curso excluído com sucesso")
        this.service.listar().subscribe(dados => this.cursos = dados);
      },
      Error => alert ("Erro ao excluir curso")
    );
  }


}
