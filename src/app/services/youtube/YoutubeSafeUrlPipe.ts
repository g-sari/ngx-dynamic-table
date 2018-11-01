import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'youtubeSafeUrl'
})
export class YoutubeSafeUrlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }

  transform(videoId: string): SafeResourceUrl {
    const videoUrl = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1';
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }

}
