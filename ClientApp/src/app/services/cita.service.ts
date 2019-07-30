import { Injectable, Inject } from '@angular/core';
import{ HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of, observable} from 'rxjs';
import{catchError, map,tap}from 'rxjs/operators';
import {Cita} from '../models/cita';
const httpOptions={
  headers:new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class CitaService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl:string) { }
  addCita(cita:Cita ): Observable<Cita> {
    return this.http.post<Cita>(this.baseUrl +'api/Cita', cita, httpOptions).pipe(
      tap((newCita: Cita) => this.log(`added Newcita w/ id=${newCita.id}`)),
      catchError(this.handleError<Cita>('addCita'))
    );
  }

  getAll():Observable<Cita[]>{
    return this.http.get<Cita[]>(this.baseUrl+'api/Cita').pipe(
    tap(_ => this.log('Se Consulta la información')),
    catchError(this.handleError<Cita[]>('getAll',[]))
  );
  }

  get(id: number): Observable<Cita> {
    const url = `${this.baseUrl + 'api/Cita'}/${id}`;
    return this.http.get<Cita>(url).pipe(
    tap(_=> this.log(`fetched cita id=${id}`)),
    catchError(this.handleError<Cita>(`getCita id=${id}`))
  );
  }

  update(cita: Cita): Observable<any>{
  const  url=`${this.baseUrl + 'api/Cita'}/${cita.id}`;
    return this.http.put(url, cita, httpOptions).pipe(
      tap(_=>this.log(`update cita id=${cita.id}`)),
      catchError(this.handleError<any>('cita'))
    );
  }
  delete(cita:Cita|number): Observable<Cita>{
    const id=typeof cita==='number' ? cita:cita.id;
    const url=`${this.baseUrl + 'api/Cita'}/${id}`;
    return this.http.delete<Cita>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted cita id=${id}`)),
      catchError(this.handleError<Cita>('deleteCita'))
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
    alert(`CitaService: ${message}`);
  } 
}
