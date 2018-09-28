import { DynamicTableDataInterface } from '../interfaces/dynamic-table-data.interface';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DynamicTableColumnDefinitionConstants } from './dynamic-table-column-definition.constants';
import { DynamicTableGroupInterface } from '../interfaces/dynamic-table-group.interface';
import { DynamicTableOptionInterface } from '../interfaces/dynamic-table-option.interface';
import { DynamicTableColumnInterace } from '../interfaces/dynamic-table-column.interface';

@Injectable()
export class DynamicTableDataProvider implements DynamicTableDataInterface<object> {

    getColumns(): Array<DynamicTableColumnInterace> {
        return [
            { columns: [DynamicTableColumnDefinitionConstants.INDICATOR_COLOR], names: ['Color'], backgroundColor: null },
            { columns: [DynamicTableColumnDefinitionConstants.DESCRIPTION], names: ['Description'], backgroundColor: null },
            { columns: [DynamicTableColumnDefinitionConstants.ADDITIONAL_INFO], names: ['Additional info'], backgroundColor: null },
            { columns: [DynamicTableColumnDefinitionConstants.HTML_CONTENT_SUMMARY], names: ['Content summary'], backgroundColor: null },
            { columns: [DynamicTableColumnDefinitionConstants.HTML_ACTIONS], names: ['Actions'], backgroundColor: null }
        ];
    }

    getColumnsStyleUrl(): string {
        return './pal-table-columns-theme.scss';
    }

    getData(sort: string, order: string, page: number): Observable<object[]> {
        const list = [];
        list.push({
            'color': '#47b733',
            'payload': 'Pal-Table payload data',
            'updateDate': new Date(),
            'contentSummary': '<b>Pal-Table content summary</>',
            'actions': '<button>Pal-Table action</button>'
        });
        return of(list);
    }

    getIndicatorColor(item: object, rowIndex: number, groupIndex: number, groupName: string): string {
        return (<any>item)['color'];
    }

    getIndicatorSign(item: object, rowIndex: number, groupIndex: number, groupName: string): string {
        return '1';
    }

    getTitle(item: object, rowIndex: number, groupIndex: number, groupName: string): string {
        return 'this is a sample title';
    }

    getDescription(item: object, rowIndex: number, groupIndex: number, groupName: string): string {
        return 'this is a description';
    }

    getAdditionalInfo(item: object, rowIndex: number, groupIndex: number, groupName: string): string {
        return 'This is an additional info';
    }

    getHTMLIcon(item: object, rowIndex: number, groupIndex: number, groupName: string): string {
        return '<mat-icon>play_arrow</mat-icon>';
    }

    getHTMLContentSummary(item: object, rowIndex: number, groupIndex: number, groupName: string): string {
        return '<b>test content summary</>';
    }

    getHTMLAction(item: object, rowIndex: number, groupIndex: number, groupName: string): string {
        return '<button mat-raised-button (click)="openSideNav(element)">Open</button>';
    }

    getOtherTextBased(item: object, rowIndex: number, groupIndex: number, groupName: string): string {
        return 'this is an other text based column';
    }

    performAction(action: string, item: object): void {
        console.log('Perform action: ' + action + ' called!');
    }

    getEventPublisher(): Observable<any> {
        return null;
    }

    getOptions(): DynamicTableOptionInterface[] {
        const options: DynamicTableOptionInterface[] = [];
        const groupBy: DynamicTableGroupInterface = {
            groupByField: 'approval',
            rules: [
                {
                    'operator': '>',
                    'value': 1
                }
            ]
        };
        const tableOptions: DynamicTableOptionInterface = {
            groupName: 'Requested',
            groupExpressions: [
                {
                    group: groupBy,
                    operator: ''
                }
            ],
            groupItemRowColor: '',
            hideColumns: true,
            columnOptions: []
        };
        options.push(tableOptions);
        return options;
    }

}
