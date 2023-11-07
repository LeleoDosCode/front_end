import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CursosService } from '../service/cursos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Icursos } from '../service/icursos';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss']
})
export class CursoFormComponent implements  OnInit{
  form = new FormGroup({
    id: new FormControl(),
    nome: new FormControl(''),
})

constructor(
private service:CursosService,
private route:ActivatedRoute,
private router: Router
){ }

ngOnInit(){ this.ListarPorId(); }

Salvar() {
  if(this.form.value.id){
    this.service.atualizar(this.form.value).subscribe(
      success => {
        alert("Curso atualizado com sucesso!");
        this.router.navigate(['']);
      },
      Error => alert("Erro ao atualizar o curso ")
    );
  }

  else{ 
    this.service.criar(this.form.value).subscribe(
      success => {
        alert("Curso cadastrado com sucesso!");
        this.router.navigate(['']);
      },
      Error => alert("Erro ao cadastrar o curso ")
    );
  }

  this.form.reset();

}

ListarPorId(){
  // essa função captura os parametros da rota. captura o valor da rota, seja ele nulo 
  // ou não e adiciona o parametro capturado no formulário através da função atualizarForm
  // o Pipe garante que será feita uma requisição no servidor e essa requisição será finalizada.
  // O subscribe inscreve / executa a função.
  this.route.params
  .pipe(
    map((params: any) => params['id']),
    switchMap(id => this.service.listarPorId(id))

  ).subscribe(curso => this.atualizarForm(curso));
}

atualizarForm(curso: Icursos){
  // o comando abaixo refere-se esse vormulário recebera o 
  // valor do caminho = valor da URL
  this.form.patchValue({
    id: curso.id,
    nome:curso.nome,
  });

}

Cancelar() {
this.form.reset();
console.log('Cancelado');
}

}
