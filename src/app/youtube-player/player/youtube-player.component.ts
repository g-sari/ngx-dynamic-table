import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../../services/youtube/video.model';
import { Comment } from '../../services/youtube/comment.model';
import { YoutubeAPIService } from '../../services/youtube';
import { YoutubeDataConverter } from '../../services/youtube/youtube-data-converter';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.scss']
})
export class YoutubePlayerComponent implements OnInit {

  @Input() public videoId: string;
  public video: Video;
  public comments: Comment[];

  constructor(private youtubeAPIService: YoutubeAPIService) { }

  ngOnInit() {
    this.youtubeAPIService.getVideoById(this.videoId)
      .subscribe(data => {
        this.video = YoutubeDataConverter.convertVideo(data)[0];
        this.youtubeAPIService.getCommentsByVideoId(this.video.videoId)
          .subscribe(results => {
            this.comments = YoutubeDataConverter.convertComments(results);
          });
      });
  }

}
