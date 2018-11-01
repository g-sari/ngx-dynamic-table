export class Comment {

  constructor(public commentId: string,
              public videoId: string,
              public authorDisplayName: string,
              public authorProfileImageUrl: string,
              public authorChannelId: string,
              public textDisplay: string,
              public textOriginal: string,
              public publishedAt: string,
              public likeCount: string,
              public replies: Comment[]) {
    this.videoId = videoId;
    this.commentId = commentId;
    this.authorDisplayName = authorDisplayName;
    this.authorProfileImageUrl = authorProfileImageUrl;
    this.authorChannelId = authorChannelId;
    this.textDisplay = textDisplay;
    this.textOriginal = textOriginal;
    this.publishedAt = publishedAt;
    this.likeCount = likeCount;
    this.replies = replies;
  }
}
