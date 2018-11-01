import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Video } from './video.model';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class YoutubeAPIService {

  constructor(private http: HttpClient) {
  }

  private extractData(response: Response) {
    return response.json();
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
  }

  public searchVideos(query: string): Observable<Video[]> {
    return this.http.get<Video[]>(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}` +
      '&maxResults=50' +
      '&type=video' +
      '&key=AIzaSyAW5x6wXJMsd6dXt_tBrWZHWDI7oK9Qhl8')
      .pipe(
        map(resultobject => {
          const results = [];
          for (const item of resultobject['items']) {
            results.push(item);
          }
          return results;
        })
      );
  }

  public getCommentsByVideoId(videoId: string) {
    return this.http.get(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${videoId}` +
      '&maxResults=50' +
      '&order=relevance' +
      '&key=AIzaSyAW5x6wXJMsd6dXt_tBrWZHWDI7oK9Qhl8');
  }

  public getVideoById(videoId: string) {
    return this.http.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}` +
      '&key=AIzaSyAW5x6wXJMsd6dXt_tBrWZHWDI7oK9Qhl8');
  }

  public getVideoCategories(regionCode: string) {
    return this.http.get(`https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=${regionCode}` +
      '&key=AIzaSyAW5x6wXJMsd6dXt_tBrWZHWDI7oK9Qhl8')
      .pipe(
        map(this.extractData)
      );
  }

  public getVideosByCategory(regionCode: string, videoCategoryId: string) {
    return this.http.get(
      `https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&part=snippet,contentDetails,statistics&regionCode=${regionCode}` +
      `&videoCategoryId=${videoCategoryId}` +
      '&maxResults=6' +
      '&key=AIzaSyAW5x6wXJMsd6dXt_tBrWZHWDI7oK9Qhl8')
      .pipe(
        map(this.extractData)
      );
  }

  public searchLiveVideos(query: string) {
    return this.http.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}` +
      '&maxResults=25' +
      '&type=video' +
      '&eventType=live' +
      '&key=AIzaSyAW5x6wXJMsd6dXt_tBrWZHWDI7oK9Qhl8')
  }

  public getI18nLanguages(lang: string) {
    lang = (lang != null) ? lang : 'en_US';
    return this.http.get(`https://www.googleapis.com/youtube/v3/i18nLanguages?part=snippet&hl=${lang}`);
  }


}
