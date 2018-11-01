import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class YoutubeInteractionService {

  // Observable string sources
  private searchVideosSource = new Subject<string>();

  // Observable string streams
  searchVideosPublished$ = this.searchVideosSource.asObservable();

  searchVideos(query: string) {
    this.searchVideosSource.next(query);
  }
}
