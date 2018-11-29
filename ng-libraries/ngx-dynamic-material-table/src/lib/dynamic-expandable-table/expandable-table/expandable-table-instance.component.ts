/*******************************************************************
 * NGX-DYNAMIC-MATERIAL-TABLE                                      *
 * @description Create fancy and complex tables dynamically        *
 * @file expandable-table-instance.component.ts                    *
 * @author Gökhan Sari - <goekhan.sari@arpage.ch>                  *
 * @copyright Arpage AG, 2018                                      *
 *******************************************************************/
import { Component, Injector, Input } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { SafeStyle } from '@angular/platform-browser';
import { MatTableDataSource } from '@angular/material';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DynamicExpandableTableDataProvider } from '../shared/dynamic-expandable-data.provider';
import { DynamicExpandableTableExpandedItemColumnInterace } from '../interfaces/dynamic-expandable-table-expanded-item-column.interface';
import { DynamicExpandableTableUtils } from '../shared/dynamic-expandable-table.utils';
import { TableInstanceComponent } from '../../dynamic-table/table/table-instance.component';
import { DynamicTableUtils } from '../../dynamic-table/shared/dynamic-table.utils';
import { DynamicTableColumnInterace } from '../../dynamic-table/interfaces/dynamic-table-column.interface';



@Component({
    selector: 'expandable-table-instance',
    templateUrl: './expandable-table-instance.component.html',
    styleUrls: [
        './expandable-table-instance.component.scss',
        '../../dynamic-table/table/table-instance.component.scss'
    ],
    animations: [
        trigger('detailExpand', [
            state('collapsed', style({ height: '0px', minHeight: '0px', display: 'none' })),
            state('expanded', style({ display: 'inline', height: '*' })),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ],
})
export class ExpandableTableInstanceComponent extends TableInstanceComponent {

    public static readonly EXPANDED_ITEM_EXPANDABLE_COLUMN_ID = 'expandedItemExpandableColumn';
    public expandedElement: any;
    public expandedElement2: any;
    public isThirdLevelExpanded: boolean;
    private palExpandableDataProvider: DynamicExpandableTableDataProvider;
    public expandedItemColumns: string[];
    public expandedItemDetailsDataSource: MatTableDataSource<any> = new MatTableDataSource();
    public isLoadingExpandedItemResults = true;
    public noExpandedItemDataFound = false;
    @Input() public hideColumnsOfExpandedItems: boolean;
    @Input() public hideColumnsOfExpandedItemDetails: boolean;

    constructor(private injector: Injector) {
        super(injector);
        this.palExpandableDataProvider = injector.get(DynamicExpandableTableDataProvider);
    }

    /**
     * @override
     */
    public addStandardColumns() {
        //this.columns.unshift({ column: 'expandableColumn', name: 'expandableColumn' });
        //super.addStandardColumns();
    }

    /**
    * @override
    */
    public selectItem(index: number) {
        super.selectItem(index);
        // Find out if it should expand or collapse. If expandedElement is null, it should be collapsed
        const currentSelectedItem = this.getCurrentSelectedItem();
        this.expandedElement = (this.expandedElement !== currentSelectedItem) ? currentSelectedItem : null;
        // Collapse 2.Level
        this.expandedElement2 = null;
        this.isThirdLevelExpanded = false;
        this.expandedItemDetailsDataSource.data = [];
    }

    /**
    * @override
    */
    public getColumnColor(columnId: string): SafeStyle {
        switch (columnId) {
            case 'expandableColumn':
                // if expanded
                if (this.expandedElement != null) {
                    const columnOption: DynamicTableColumnInterace = DynamicTableUtils.getColumnById(columnId, this.columnOptions);
                    if (columnOption != null) {
                        const columnColor = (<any>columnOption)['hoverBackgroundColor'];
                        return this.sanitizer.bypassSecurityTrustStyle(columnColor);
                    }
                }
                return super.getColumnColor(columnId);
            default:
                return super.getColumnColor(columnId);
        }
    }

    public selectItem2(expandedItemDetails: object, expandedItem: object) {
        this.isThirdLevelExpanded = !this.isThirdLevelExpanded;
        this.expandedItemDetailsDataSource.data = [];
        if (this.isThirdLevelExpanded) {
            this.expandedElement2 = expandedItemDetails;
            this.loadExpandedItemDetailsTableData(expandedItemDetails, expandedItem);
        } else {
            this.expandedElement2 = null;
        }
    }

    getExpandedItemTableColumns(expandedItem: object): DynamicExpandableTableExpandedItemColumnInterace[] {
        return this.palExpandableDataProvider.getExpandedItemTableColumns(expandedItem);
    }

    getExpandedItemTableColumnIds(expandedItem: object): string[] {
        return DynamicExpandableTableUtils.convertToColumnIds(this.getExpandedItemTableColumns(expandedItem));
    }

    getExpandedItemTableData(expandedItem: object): Observable<object[]> {
        return this.palExpandableDataProvider.getExpandedItemTableData(expandedItem);
    }

    getExpandedItemDetailsTableColumns(expandedItemDetails: object, expandedItem: object): DynamicExpandableTableExpandedItemColumnInterace[] {
        return this.palExpandableDataProvider.getExpandedItemDetailsTableColumns(expandedItemDetails, expandedItem);
    }

    getExpandedItemDetailsTableColumnIds(expandedItemDetails: object, expandedItem: object): string[] {
        return DynamicExpandableTableUtils.convertToColumnIds(this.getExpandedItemDetailsTableColumns(expandedItemDetails, expandedItem));
    }

    private loadExpandedItemDetailsTableData(expandedItemDetails: object, expandedItem: object): void {
        this.isLoadingExpandedItemResults = true;
        this.palExpandableDataProvider.getExpandedItemDetailsTableData(expandedItemDetails, expandedItem)
            .subscribe(
                (items: Object[]) => {
                    this.expandedItemDetailsDataSource.data = items;
                    this.isLoadingExpandedItemResults = false;
                    if (items.length === 0) {
                        this.noDataFound = true;
                    } else {
                        this.noDataFound = false;
                    }
                },
                catchError((error) => {
                    console.error('Error in loading pal table data', error);
                    this.expandedItemDetailsDataSource.data = [];
                    this.isLoadingExpandedItemResults = false;
                    return of([]);
                })
            );
    }

}
