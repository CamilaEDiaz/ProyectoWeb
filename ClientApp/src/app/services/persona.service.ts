import { Injectable, Inject } from '@angular/core';
import{ HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of, observable} from 'rxjs';
import{catchError, map,tap}from 'rxjs/operators';
import {Persona} from '../models/persona';
const httpOptions={
  headers:new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private personaUrl='api/personas';
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl:string) { }
  addPersona(persona:Persona ): Observable<Persona> {
    return this.http.post<Persona>(this.baseUrl +'api/Persona', persona, httpOptions).pipe(
      tap((newPersona: Persona) => this.log(`added Newpersona w/ id=${newPersona.id}`)),
      catchError(this.handleError<Persona>('addPersona'))
    );
  }

  getAll():Observable<Persona[]>{
    return this.http.get<Persona[]>(this.baseUrl+'api/Persona').pipe(
    tap(_ => this.log('Se Consulta la información')),
    catchError(this.handleError<Persona[]>('getAll',[]))
  );
  }

  get(id: number): Observable<Persona> {
    const url = `${this.baseUrl + 'api/Persona'}/${id}`;
    return this.http.get<Persona>(url).pipe(
    tap(_=> this.log(`fetched persona id=${id}`)),
    catchError(this.handleError<Persona>(`getPersona id=${id}`))
  );
  }

  update(persona: Persona): Observable<any>{
  const  url=`${this.baseUrl + 'api/Persona'}/${persona.id}`;
    return this.http.put(url, persona, httpOptions).pipe(
      tap(_=>this.log(`update persona id=${persona.id}`)),
      catchError(this.handleError<any>('persona'))
    );
  }
  delete(persona:Persona|number): Observable<Persona>{
    const id=typeof persona==='number' ? persona:persona.id;
    const url=`${this.baseUrl + 'api/Persona'}/${id}`;
    return this.http.delete<Persona>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted persona id=${id}`)),
      catchError(this.handleError<Persona>('deletePersona'))
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  private log(message: string) {
    alert(`PersonaService: ${message}`);
  }
}
