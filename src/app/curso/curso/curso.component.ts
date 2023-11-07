import { Component, OnInit } from '@angular/core';
import{ Icursos } from '../service/icursos'
import { CursosService } from '../service/cursos.service';
import { ActivatedRoute, Router} from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit{
  cursos: Icursos[]=[];
  
  form = new FormGroup({
    id: new FormControl(),
    nome: new FormControl(''),
})

  constructor(
    private service: CursosService, 
    private router: Router, 
    private route: ActivatedRoute){ }

  ngOnInit(): void {
     this.Listar();
  }

  Listar(){
     // a minha variavel do tipo cursos está recebendo o json da API
     this.service.listar().subscribe(dados => this.cursos = dados);
  }

  Editar(id:number){
    this.router.navigate(['editar', id], {relativeTo: this.route});
  }

  Excluir(id:number){
    this.service.excluir(id).subscribe(
      success => {
        alert("Curso excluido com sucesso!")
        this.service.listar().subscribe(dados => this.cursos = dados);
      },
      Error => alert("Erro ao excluir o curso ")
    );
  }
}
