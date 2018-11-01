import { Video } from './video.model';
/**
 * Created by gokhansari on 02.09.17.
 */

export class VideoCategory {

  public videos: Video[];

  constructor(public id: string,
    public channelId: string,
    public title: string) {
    this.id = id;
    this.channelId = channelId;
    this.title = title;
  }

  setVideos(videos: Video[]) {
    this.videos = videos;
  }
}
