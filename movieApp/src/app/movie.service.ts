import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Movie} from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Movie[]>
  {
    return this.http.get<Movie[]>("http://localhost:3000/movies");
}

}