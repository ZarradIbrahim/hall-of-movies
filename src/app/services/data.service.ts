import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Movie } from '../models/movie.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public movies: Movie[] = [];
  public allGenres = new Set();

  constructor(private http: HttpClient) { }

  private loadDataSub = new Subject<any>();
  loadDataObservable$ = this.loadDataSub.asObservable();

  emitLoadDataSuccess() {
    this.loadDataSub.next();
  }

  Init(): Promise<any> {
    return new Promise<void>(resolve => {
      this.http.get('assets/movies.csv', { responseType: 'text' }).subscribe(response => {
        let data = response.split("\n");
        for (let index=1; index <= 5000; index++) {
          let row = data[index].split(";");
          let genres = row[8].split(",").map(genre => genre.trim());
          genres.forEach(genre => {
            this.allGenres.add(genre);
          });
          let isAdult = row[4]=='0'?false:true;
          this.movies.push(new Movie(row[0], row[1], row[2], row[3], isAdult, row[5], row[6], row[7], genres));
        }
        this.emitLoadDataSuccess();        
      });
      resolve();
    });
  }


}
