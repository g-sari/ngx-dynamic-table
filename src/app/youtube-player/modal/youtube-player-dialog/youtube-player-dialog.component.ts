import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-youtube-player-dialog',
  templateUrl: './youtube-player-dialog.component.html',
  styleUrls: ['./youtube-player-dialog.component.css']
})
export class YoutubePlayerDialogComponent implements OnInit {

  public videoId: string;

  constructor(public dialogRef: MatDialogRef<YoutubePlayerDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Object) {
    this.videoId = data['videoId'];
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void { }

}
