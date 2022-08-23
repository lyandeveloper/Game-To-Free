import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Game } from './game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private url: string = 'https://free-to-play-games-database.p.rapidapi.com/api/games'

  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({
      'X-RapidAPI-Key': '732a89c62dmshef64b9cd2e224c0p1ee551jsnfe22f2b3d73f',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    })
  }

  // Obtem todos os carros
  getGames(): Observable<Game[]> {
    return this.httpClient.get<Game[]>(this.url, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  paginate(array: Game[], pageNumber: number, pageSize: number) {
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `mensagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => errorMessage);
  };
}
