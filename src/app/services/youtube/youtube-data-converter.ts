import { Video } from './video.model';
import { Comment } from './comment.model';
/**
 * Created by gokhansari on 03.09.17.
 */

export class YoutubeDataConverter {


  public static convertVideo(data): Video {
    return data.items.map(item => {
      return new Video(
        item.id,
        item.snippet.title,
        item.snippet.thumbnails.medium.url,
        item.snippet.thumbnails.high.url,
        item.snippet.channelTitle,
        item.snippet.channelId,
        item.snippet.publishedAt,
        item.snippet.description,
        item.statistics.viewCount,
        item.contentDetails.duration
      );
    });
  }

  private static convertReplies(item): Comment[] {
    if (!item.replies) { return []; }
    return item.replies.comments.map(reply => {
      return new Comment(
        reply.id,
        reply.snippet.videoId,
        reply.snippet.authorDisplayName,
        reply.snippet.authorProfileImageUrl,
        reply.snippet.authorChannelId.value,
        reply.snippet.textDisplay,
        reply.snippet.textOriginal,
        reply.snippet.publishedAt,
        reply.snippet.likeCount,
        null
      );
    });
  }

  public static convertComments(data): Comment[] {
    return data.items.map(item => {
      return new Comment(
        item.id,
        item.snippet.videoId,
        item.snippet.topLevelComment.snippet.authorDisplayName,
        item.snippet.topLevelComment.snippet.authorProfileImageUrl,
        item.snippet.topLevelComment.snippet.authorChannelId.value,
        item.snippet.topLevelComment.snippet.textDisplay,
        item.snippet.topLevelComment.snippet.textOriginal,
        item.snippet.topLevelComment.snippet.publishedAt,
        item.snippet.topLevelComment.snippet.likeCount,
        this.convertReplies(item)
      );
    });
  }

}
