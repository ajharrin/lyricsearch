import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _httpClient: HttpClient) { }

  getLyric(artist: string, title:string): Observable<any>{
    return this._httpClient.get(`https://api.lyrics.ovh/v1/${artist}/${title}`);
  }

  // findLyric(artist: string, title: string) : Observable<any>{
  //   return this._httpClient.post(`https://api.lyrics.ovh/v1/${artist}/${title}`, title);
  // }
}
