/**
 * Created by gokhansari on 02.09.17.
 */

export class Video {

  constructor(public videoId: string,
              public title: string,
              public thumbnailUrlMedium: string,
              public thumbnailUrlHigh: string,
              public channelTitle: string,
              public channelId: string,
              public publishedAt: string,
              public description: string,
              public statisticViewCount: string,
              public duration: string) {
    this.videoId = videoId;
    this.title = title;
    this.thumbnailUrlMedium = thumbnailUrlMedium;
    this.thumbnailUrlHigh = thumbnailUrlHigh;
    this.channelTitle = channelTitle;
    this.channelId = channelId;
    this.publishedAt = publishedAt;
    this.description = description;
    this.statisticViewCount = statisticViewCount;
    this.duration = duration;
  }
}
