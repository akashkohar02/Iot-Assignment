import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { NetworkService } from "../network/network.service";

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root',
 })
  export class FlickerService {
    constructor(
      private http: HttpClient){}

    getData(page: number, perPage: number, search: string){
        const url = `/services/rest/?method=flickr.photos.search&api_key=6c1cf4c4d5fe283be9162eb56bae31a9&text=${search}&per_page=${perPage}&page=${page}&format=json&nojsoncallback=1`;
        return this.http
        .get<any>(apiUrl + url)
        .pipe(catchError(NetworkService.handleError));
    }
}