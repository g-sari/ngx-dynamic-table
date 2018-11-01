import { Injectable } from '@angular/core';
import {
    DynamicTableColumnInterace,
    DynamicExpandableTableColumnDefinitionConstants,
    DynamicExpandableTableOptionInterface,
    AbstractDynamicExpandableTableDataProvider,
    DynamicExpandableTableExpandedItemColumnInterace,
    DynamicTableUIUtils
} from 'ngx-dynamic-material-table';
import { Observable, of } from 'rxjs';
import { YoutubeAPIService } from '../services/youtube';

@Injectable()
export class YoutubeExpandableTableDataProvider extends AbstractDynamicExpandableTableDataProvider<Object> {

    private expandedItemTableData: Object[] = this.createExpandedItemData();
    protected expandableColumn: any = {
        columns: [DynamicExpandableTableColumnDefinitionConstants.EXPANDABLE_COLUMN], names: ['Expand/Collapse'], backgroundColor: '#FC0012'
    };

    constructor(private youtubeAPIService: YoutubeAPIService) {
        super();
    }

    getColumns(): DynamicTableColumnInterace[] {
        return [
            this.expandableColumn,
            {
                columns: [DynamicExpandableTableColumnDefinitionConstants.ADDITIONAL_INFO],
                names: ['Video Pic'],
                backgroundColor: '#f7f7f7'
            },
            {
                columns: [DynamicExpandableTableColumnDefinitionConstants.TITLE],
                names: ['Video Title'],
                backgroundColor: '#f7f7f7'
            },
            {
                columns: [DynamicExpandableTableColumnDefinitionConstants.DESCRIPTION],
                names: ['Channel Title'],
                backgroundColor: '#f7f7f7'
            },
            {
                columns: [DynamicExpandableTableColumnDefinitionConstants.HTML_ACTIONS],
                names: ['Actions'],
                backgroundColor: '#f7f7f7'
            },
        ];
    }

    getData(sort: string, order: string, page: number): Observable<Object[]> {
        return this.youtubeAPIService.searchVideos('google');
    }

    getTitle(item: Object, rowIndex: number, groupIndex: number, groupName: string): string {
        return item['snippet']['title'];
    }

    getAdditionalInfo(item: Object, rowIndex: number, groupIndex: number, groupName: string): string {
        return '<img src="' + item['snippet']['thumbnails']['default']['url'] + '" />';
    }

    getHTMLAction(item: Object, rowIndex: number, groupIndex: number, groupName: string): string {
        return '<button mat-raised-button color="warn" '
            + '(click)="' + DynamicTableUIUtils.createHTMLAction('do something', item) + '">'
            + '<mat-icon>play_arrow</mat-icon> Play</button>';
    }

    getDescription(item: Object, rowIndex: number, groupIndex: number, groupName: string): string {
        return item['snippet']['channelTitle'];
    }

    getOtherTextBased(item: Object, rowIndex: number, groupIndex: number, groupName: string): string {
        throw new Error('Method not implemented.');
    }

    getExpandedItemTableColumns(expandedItem: Object): DynamicExpandableTableExpandedItemColumnInterace[] {
        return [
            this.createExpandedItemColumn('videodesc', 'Video Description', '#8F010A', '#ffffff', ''),
            this.createExpandedItemColumn('published', 'Published Date', '#8F010A', '#ffffff', ''),
        ];
    }

    private createExpandedItemData(): Object[] {
        return [
            {
                'videodesc': '',
                'published': '',
            }
        ];
    }

    getExpandedItemTableData(expandedItem: Object): Observable<Object[]> {
        const itemDetails: Object = this.expandedItemTableData[0];
        itemDetails['videodesc'] = expandedItem['snippet']['description'];
        itemDetails['published'] = expandedItem['snippet']['publishedAt'];
        return of(this.expandedItemTableData);
    }

    getOptions(): DynamicExpandableTableOptionInterface[] {
        const options = [];
        const expandableColumnOption = Object.assign({}, this.expandableColumn);
        expandableColumnOption['hoverBackgroundColor'] = '#494949';
        expandableColumnOption['backgroundColor'] = '#FC0012';
        const table1Options: DynamicExpandableTableOptionInterface = {
            groupName: 'NGX-DYNAMIC-MATERIAL-TABLE',
            groupExpressions: [],
            groupItemRowColor: '',
            hideColumns: false,
            hideColumnsOfExpandedItems: false,
            hideColumnsOfExpandedItemDetails: true,
            columnOptions: []
        };
        options.push(table1Options);
        return options;
    }

    //////////////////////////////////////////// UNSUED FUNCTIONS ////////////////////////////////////////////
    getExpandedItemDetailsTableColumns(expandedItemDetails: Object, expandedItem: Object)
        : DynamicExpandableTableExpandedItemColumnInterace[] {
        return null;
    }
    getExpandedItemDetailsTableData(expandedItemDetails: Object, expandedItem: Object): Observable<Object[]> {
        return of([]);
    }

    getIndicatorColor(item: Object, rowIndex: number, groupIndex: number, groupName: string): string {
        throw new Error('Method not implemented.');
    }

    getIndicatorSign(item: Object, rowIndex: number, groupIndex: number, groupName: string): string {
        throw new Error('Method not implemented.');
    }

    getHTMLIcon(item: Object, rowIndex: number, groupIndex: number, groupName: string): string {
        throw new Error('Method not implemented.');
    }

    getHTMLContentSummary(item: Object, rowIndex: number, groupIndex: number, groupName: string): string {
        throw new Error('Method not implemented.');
    }



}
