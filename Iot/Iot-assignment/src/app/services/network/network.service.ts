import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;

interface NetworkOptions {
  headers?: {[key: string]: any} | null;
  params?: HttpParams | null;
  responseType?: any;
  role?: string;
}

@Injectable({
  providedIn: 'root',
 })
export class NetworkService {
  // profilePictureCache: Map<UUID, string>;
  constructor(
    private http: HttpClient
  ) {}

  static handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else if (error.status >= 400) {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: `);
      console.error(error.error);
      return throwError(error);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
