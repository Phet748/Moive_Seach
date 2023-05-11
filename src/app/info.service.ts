import { Injectable } from '@angular/core';
import { Movie } from './Moive';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InfoService {
  Movie_List: any[]=[]
constructor(private http:HttpClient){ }
Data_Web():Observable<Movie[]>{
  return this.http.get<Movie[]>('https://638492184ce192ac605bc39a.mockapi.io/Movie/')}

Up_info():Movie[]{
  return this.Movie_List
  }
}
