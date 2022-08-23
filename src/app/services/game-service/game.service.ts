import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Game } from './game';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameService {


  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({
      'X-RapidAPI-Key': environment.X_RapidAPI_Key,
      'X-RapidAPI-Host': environment.X_RapidAPI_Host
    })
  }

  // Obtem todos os carros
  getGames(): Observable<Game[]> {
    return this.httpClient.get<Game[]>(`${environment.apiUrl}/games`, this.httpOptions)
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
