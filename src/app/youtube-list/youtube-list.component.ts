import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UsingDynamicTableComponent, DynamicTableActionMessageService } from 'ngx-dynamic-material-table';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { YoutubePlayerDialogComponent } from '../youtube-player/modal/youtube-player-dialog/youtube-player-dialog.component';

@Component({
  selector: 'app-youtube-list',
  templateUrl: './youtube-list.component.html',
  styleUrls: ['./youtube-list.component.scss']
})
export class YoutubeListComponent implements AfterViewInit, UsingDynamicTableComponent<Object> {

  constructor(private palTableActionMessage: DynamicTableActionMessageService<object>, public dialog: MatDialog) { }

  ngAfterViewInit(): void {
    this.handleDynamicTableActions(this.palTableActionMessage.getPubisher());
  }

  playVideoInDialog(videoId: string): void {
    const dialogRef = this.dialog.open(YoutubePlayerDialogComponent, {
      width: '60%',
      height: '60%',
      data: { videoId: videoId }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

handleDynamicTableActions(publisher: Observable<Object>): void {
  if(publisher != null) {
  publisher.subscribe(
    (actionMessage: DynamicTableActionMessageService<object>) => {
      switch (actionMessage.getAction()) {
        case 'do something':
          const item = actionMessage.getItem();
          this.playVideoInDialog(item['id']['videoId']);
          break;
      }
    }
  );
}
  }

handleDynamicTableMouseOverEvents(publisher: Observable<object>): void {
  throw new Error('Method not implemented.');
}

  handleDynamicTableMouseOutEvents(publisher: Observable<object>): void {
    throw new Error('Method not implemented.');
  }


}
