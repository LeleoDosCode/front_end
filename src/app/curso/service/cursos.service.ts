import { Injectable } from '@angular/core';
import { Icursos } from './icursos';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
   // o readonly serve para dizer que a variável não pode ser alterada
  // A variável API está fazedo a conexão com o backend
  private readonly  API ="https://backendprincipal.up.railway.app/cursos";

  constructor(private http: HttpClient) { }

  listar(){
    // O atributo <Icursos[]> serve para parametrizar o retorno da classe
    return this.http.get<Icursos[]>(this.API);
  }


  listarPorId(id:object) {
    return this.http.get<Icursos>(`${this.API}/${id}`).pipe(take(1));
  }

  criar(curso:object) {
    // o pipe take 1 serve para ir apenas umas vez no servidor e voltar.
    return this.http.post(this.API, curso).pipe(take(1));
  }

  atualizar(curso:any){
    return this.http.put(`${this.API}/${curso.id}`, curso).pipe(take(1));
  }

  excluir(id:any){
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
  
}
