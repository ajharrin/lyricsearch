import { Component } from '@angular/core';
import {HttpService} from './http.service';
import { JsonpClientBackend } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  SongInfo : any = {}
  lyric = "";


  constructor(private _httpService: HttpService){}

getLyrics() {
  console.log("getLyrics method running")
  let singer : Observable<any> = this._httpService.getLyric(this.SongInfo.artist, this.SongInfo.title);
    singer.subscribe(data => {
      this.lyric = data["lyrics"];
    });
  return this.lyric;
  }
}

