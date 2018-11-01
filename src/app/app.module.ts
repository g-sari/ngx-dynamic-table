import { DynamicExpandableTableModule, DynamicExpandableTableDataProvider, DynamicTableDataProvider } from 'ngx-dynamic-material-table';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { YoutubeAPIService } from './services/youtube';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YoutubeListComponent } from './youtube-list/youtube-list.component';
import { YoutubeExpandableTableDataProvider } from './youtube-list/youtube-expandable-table-data.provider';
import { YoutubePlayerComponent } from './youtube-player/player/youtube-player.component';
import { YoutubePlayerDialogComponent } from './youtube-player/modal/youtube-player-dialog/youtube-player-dialog.component';
import { YoutubeSafeUrlPipe } from './services/youtube/YoutubeSafeUrlPipe';
import { MatToolbarModule, MatCardModule, MatDialogModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [
        AppComponent,
        YoutubeListComponent,
        YoutubePlayerComponent,
        YoutubePlayerDialogComponent,
        YoutubeSafeUrlPipe
    ],
    entryComponents: [YoutubePlayerDialogComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        DynamicExpandableTableModule,
        DynamicExpandableTableModule.forRoot(),
        MatToolbarModule,
        MatCardModule,
        MatDialogModule,
        FlexLayoutModule
    ],
    providers: [
        YoutubeAPIService,
        YoutubeSafeUrlPipe,
        YoutubeExpandableTableDataProvider,
        { provide: DynamicTableDataProvider, useExisting: YoutubeExpandableTableDataProvider },
        { provide: DynamicExpandableTableDataProvider, useExisting: YoutubeExpandableTableDataProvider },
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
