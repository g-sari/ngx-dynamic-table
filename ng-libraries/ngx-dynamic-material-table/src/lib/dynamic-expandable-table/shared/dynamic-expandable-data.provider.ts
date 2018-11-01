/*******************************************************************
 * NGX-DYNAMIC-MATERIAL-TABLE                                      *
 * @description Create fancy and complex tables dynamically        *
 * @file dynamic-expandable-data.provider.ts                       *
 * @author Gökhan Sari - <goekhan.sari@arpage.ch>                  *
 * @copyright Arpage AG, 2018                                      *
 *******************************************************************/
import { Injectable } from '@angular/core';
import { DynamicExpandableTableDataInterface } from '../interfaces/dynamic-expandable-table-data.interface';
import { Observable, of } from 'rxjs';
import { DynamicExpandableTableOptionInterface } from '../interfaces/dynamic-expandable-table-option.interface';
import { DynamicExpandableTableExpandedItemColumnInterace } from '../interfaces/dynamic-expandable-table-expanded-item-column.interface';
import { DynamicTableDataProvider } from '../../dynamic-table/shared/dynamic-table-data-provider';
import { DynamicTableGroupInterface } from '../../dynamic-table/interfaces/dynamic-table-group.interface';

@Injectable()
export class DynamicExpandableTableDataProvider extends DynamicTableDataProvider implements DynamicExpandableTableDataInterface<object> {

    private expandedItemTableColumns: DynamicExpandableTableExpandedItemColumnInterace[] = [
        { columnId: 'expandedItemExpandableColumn', column: '', icon: 'timer', backgroundColor: '#494949', color: '#ffffff' },
        { columnId: 'icon', column: 'Icon', icon: '', backgroundColor: '', color: '' },
        { columnId: 'unit', column: 'Einheit', icon: '', backgroundColor: '', color: '' },
        { columnId: 'product', column: 'Produkt', icon: '', backgroundColor: '', color: '' },
        { columnId: 'article', column: 'Art', icon: '', backgroundColor: '', color: '' },
        { columnId: 'date-range', column: 'Wirkzeitraum', icon: '', backgroundColor: '', color: '' },
        { columnId: 'reason', column: 'Grund', icon: '', backgroundColor: '', color: '' },
        { columnId: 'physician-drug-administrator', column: 'Verordnet', icon: '', backgroundColor: '', color: '' },
        { columnId: 'comment', column: 'Bemerkung', icon: '', backgroundColor: '', color: '' },
    ];
    private expandedItemDetailsTableColumns: DynamicExpandableTableExpandedItemColumnInterace[] = [
        { columnId: 'icon', column: 'Icon', icon: '', backgroundColor: '', color: '' },
        { columnId: 'unit', column: 'Einheit', icon: '', backgroundColor: '', color: '' },
        { columnId: 'product', column: 'Produkt', icon: '', backgroundColor: '', color: '' },
        { columnId: 'article', column: 'Art', icon: '', backgroundColor: '', color: '' },
        { columnId: 'date-range', column: 'Wirkzeitraum', icon: '', backgroundColor: '', color: '' },
        { columnId: 'reason', column: 'Grund', icon: '', backgroundColor: '', color: '' },
        { columnId: 'physician-drug-administrator', column: 'Verordnet', icon: '', backgroundColor: '', color: '' },
        { columnId: 'comment', column: 'Bemerkung', icon: '', backgroundColor: '', color: '' },
    ];
    private expandedDataSource: Object[] = ['one1', 'two2', 'three3', 'four4', 'five5', 'six6', 'seven7', 'eight8'];

    getExpandedItemTableColumns(expandedItem: object): DynamicExpandableTableExpandedItemColumnInterace[] {
        return this.expandedItemTableColumns;
    }

    getExpandedItemTableData(expandedItem: object): Observable<object[]> {
        return of(this.expandedDataSource);
    }

    getExpandedItemDetailsTableColumns(expandedItemDetails: object, expandedItem: Object): DynamicExpandableTableExpandedItemColumnInterace[] {
        return this.expandedItemDetailsTableColumns;
    }

    getExpandedItemDetailsTableData(expandedItemDetails: object, expandedItem: Object): Observable<object[]> {
        return of(this.expandedDataSource);
    }

    getOptions(): DynamicExpandableTableOptionInterface[] {
        const options: DynamicExpandableTableOptionInterface[] = [];
        const groupBy: DynamicTableGroupInterface = {
            groupByField: 'approval',
            fieldType: 'string',
            rules: [
                {
                    'operator': '>',
                    'value': 1
                }
            ]
        };
        const tableOptions: DynamicExpandableTableOptionInterface = {
            groupName: 'Requested',
            groupExpressions: [
                {
                    group: groupBy,
                    operator: ''
                }
            ],
            groupItemRowColor: '',
            hideColumns: true,
            hideColumnsOfExpandedItems: true,
            hideColumnsOfExpandedItemDetails: true,
            columnOptions: []
        };
        options.push(tableOptions);
        return options;
    }



}
