import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Atributs } from '../components/interfaces/interfaces';
import { delay } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers( ){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  /*getMenuOpts(){
    return this.http.get<Atributs[]>('/assets/data/menu.json');
  }*/

  getMenuOpts(): Observable<Atributs[]>{
    return this.http.get<Atributs[]>('/assets/data/menu.json');
  }

  getAlbumes(){
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getHeroes(){
    return this.http.get('/assets/data/superheroes.json')
        .pipe(
          delay(2000)
        );
  }
}
