/*******************************************************************
 * NGX-DYNAMIC-MATERIAL-TABLE                                      *
 * @description Create fancy and complex tables dynamically        *
 * @file table-instance.component.ts                               *
 * @author Gökhan Sari - <goekhan.sari@arpage.ch>                  *
 * @copyright Arpage AG, Zurich Switzerland, 2018                  *
 *******************************************************************/
import { MatTableDataSource, MatSort, MatTable } from '@angular/material';
import {
    Component,
    ViewChild,
    ViewChildren,
    QueryList,
    Injector,
    Input,
    OnInit,
    OnDestroy,
    AfterViewInit
} from '@angular/core';
import { AbstractWebLibraryComponent } from '../../abstract-web-library.component';
import { DynamicTableInterface } from '../interfaces/dynamic-table.interface';
import { DynamicTableUtils } from '../shared/dynamic-table.utils';
import { Observable, merge, of, Subject, Subscription } from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';
import { isEqual } from 'lodash';
import { DynamicTableEventDataInterface } from '../interfaces/dynamic-table-event-data.interface';
import { DynamicTableColumnDefinitionConstants } from '../shared/dynamic-table-column-definition.constants';
import { DynamicTableActionsContainerDirective } from '../directives/dynamic-table-actions-container.directive';
import { DynamicTableIconContainerDirective } from '../directives/dynamic-table-icon-container.directive';
import { DynamicTableContentSummaryContainerDirective } from '../directives/dynamic-table-content-summary-container.directive';
import { PalTableAdditionalInfoContainerDirective } from '../directives/dynamic-table-additional-info-container.directive';
import { DynamicTableDescriptionContainerDirective } from '../directives/dynamic-table-description-container.directive';
import { DynamicTableActionMessageService } from '../services/dynamic-table-action-message.service';
import { DynamicTableDataProvider } from '../shared/dynamic-table-data-provider';
import { DynamicTableGroupExpressionInterface } from '../interfaces/dynamic-table-group-expression.interface';
import { SafeStyle } from '@angular/platform-browser';
import { DynamicTableTitleContainerDirective } from '../directives/dynamic-table-title-container.directive';
import { DynamicTableDynamicCellBuilder } from '../shared/dynamic-table-dynamic-cell-builder';
import { DynamicTableColumnInterace } from '../interfaces/dynamic-table-column.interface';
import { DynamicTableMouseEventMessageService } from '../services/dynamic-table-mouse-event-message.service';
import { DynamicTableExpressionBuilder } from '../shared/dynamic-table-expression-builder';

/**
 * TableInstanceComponent
 * @description Contains the logic of a dynamic table instance.
 *
 * @param  selector
 * @param  templateUrl
 * @param  styleUrls
 */
@Component({
    selector: 'table-instance-component',
    templateUrl: './table-instance.component.html',
    styleUrls: ['./table-instance.component.scss']
})
export class TableInstanceComponent extends AbstractWebLibraryComponent
    implements OnInit, AfterViewInit, OnDestroy, DynamicTableInterface<Object> {

    // Public variables
    public static readonly FILTER_MIN_VALUE = 3;
    public filterHint = 'Filter';
    public displayedColumns: string[];
    public columns: Array<DynamicTableColumnInterace>;
    public isLoadingResults = true;
    public noDataFound = false;
    public showFilter = true;
    public resultsLength = 0;
    public dataSource: MatTableDataSource<any> = new MatTableDataSource();
    public COLUMN_DEFINITIONS = new DynamicTableColumnDefinitionConstants();
    public currentSelectedRowIndex: number;
    public palTableDataProvider: DynamicTableDataProvider;
    // Private variables
    private palTableActionsContainerDirectives: Array<DynamicTableActionsContainerDirective>;
    private palTableIconContainerDirectives: Array<DynamicTableIconContainerDirective>;
    private palTableContentSummaryContainerDirectives: Array<DynamicTableContentSummaryContainerDirective>;
    private palTableAdditionalInfoContainerDirectives: Array<PalTableAdditionalInfoContainerDirective>;
    private palTableDescriptionContainerDirectives: Array<DynamicTableDescriptionContainerDirective>;
    private palTableTitleContainerDirectives: Array<DynamicTableTitleContainerDirective>;
    private subscription: Subscription;
    private palTableDynamicCellBuilder: DynamicTableDynamicCellBuilder;
    private actionMessage: DynamicTableActionMessageService<object>;
    private mouseEventMessage: DynamicTableMouseEventMessageService<object>;
    // @ViewChild selections
    @ViewChildren(DynamicTableIconContainerDirective)
    public palTableIconContainerQueryList: QueryList<DynamicTableIconContainerDirective>;
    @ViewChildren(DynamicTableActionsContainerDirective)
    public palTableActionsContainerQueryList: QueryList<DynamicTableActionsContainerDirective>;
    @ViewChildren(DynamicTableContentSummaryContainerDirective)
    public palTableContentSummaryContainerQueryList: QueryList<DynamicTableContentSummaryContainerDirective>;
    @ViewChildren(PalTableAdditionalInfoContainerDirective)
    public palTableAdditionalInfoContainerQueryList: QueryList<PalTableAdditionalInfoContainerDirective>;
    @ViewChildren(DynamicTableDescriptionContainerDirective)
    public palTableDescriptionContainerQueryList: QueryList<DynamicTableDescriptionContainerDirective>;
    @ViewChildren(DynamicTableTitleContainerDirective)
    public palTableTitleContainerQueryList: QueryList<DynamicTableTitleContainerDirective>;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatTable) table: MatTable<any>;
    @ViewChild('#iconCell') iconCell: any;
    // Inputs
    @Input() public groupIndex: number;
    @Input() public groupName: string;
    @Input() public itemRowColor: string;
    @Input() public hideColumns = true;
    @Input() public groupExpressions: DynamicTableGroupExpressionInterface[];
    @Input() public columnOptions: DynamicTableColumnInterace[];
    @Input() public actionsSubject: Subject<DynamicTableActionMessageService<object>>;
    @Input() public mouseEventsSubject: Subject<DynamicTableMouseEventMessageService<object>>;

    /**
     * @inheritdoc
     */
    constructor(injector: Injector) {
        super(injector);
        this.palTableDataProvider = injector.get(DynamicTableDataProvider);
        this.palTableDynamicCellBuilder = injector.get(DynamicTableDynamicCellBuilder);
        this.actionMessage = injector.get(DynamicTableActionMessageService);
        this.mouseEventMessage = injector.get(DynamicTableMouseEventMessageService);
        this.columns = this.palTableDataProvider.getColumns();
        this.addStandardColumns();
    }

    /**
     * @inheritdoc
     */
    ngOnInit(): void {
        // Columns
        this.displayedColumns = DynamicTableUtils.convertToColumnIds(this.columns);
        // Subscribe to pal table events
        const eventPublisher: Observable<any> = this.palTableDataProvider.getEventPublisher();
        if (eventPublisher != null) {
            this.subscription = eventPublisher.subscribe(data => this.handleDataProviderEvents(data), error => console.error(error));
        }
        //
        this.actionMessage.setPublisher(this.actionsSubject.asObservable());
        this.mouseEventMessage.setPublisher(this.mouseEventsSubject.asObservable());
    }

    /**
     * @inheritdoc
     */
    ngAfterViewInit(): void {
        this.dataSource.sort = this.sort;
        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(() => {
            // this.paginator.pageIndex = 0;
        });
        //  Trigger data loading
        this.loadData();
    }

    /**
     * @inheritdoc
     */
    ngOnDestroy(): void {
        this.changeDetectorRef.detach();
        if (this.subscription != null) {
            this.subscription.unsubscribe();
        }
    }

    /**
     * @description Adds standard columns to the table.
     *
     * @returns void
     */
    public addStandardColumns(): void {
        this.columns.unshift({ columns: ['selectedRowColumn'], names: ['selectedRowColumn'], backgroundColor: null });
    }

    /**
     * @description Loads the data provided by the table data provider.
     *
     * @returns void
     */
    private loadData(): void {
        merge(this.sort.sortChange)
            .pipe(
                startWith({}),
                switchMap(() => {
                    this.isLoadingResults = true;
                    return this.palTableDataProvider!.getData(this.sort.active, this.sort.direction, /*this.paginator.pageIndex*/ null);
                }),
                map((items: Object[]) => {
                    if (this.hasGroups()) {
                        // Group items by the given expressions
                        items = items.filter((item: Object) => {
                            const expression = DynamicTableExpressionBuilder.buildGroupExpressions(this.groupExpressions);
                            return expression(item);
                        });
                    }
                    this.noDataFound = (items.length === 0);
                    this.resultsLength = items.length;
                    return items;
                }),
                catchError((error) => {
                    console.error('Error in loading pal table data', error);
                    this.isLoadingResults = false;
                    return of([]);
                })
            ).subscribe((items: Object[]) => {
                this.dataSource.data = items;
                this.isLoadingResults = false; // Flip flag to show that loading has finished.
                this.changeDetectorRef.detectChanges();
            });
    }

    /**
     * @description Converts the provided item row color as trusted style.
     *
     * @returns SafeStyle
     */
    public getItemRowColor(): SafeStyle {
        return this.sanitizer.bypassSecurityTrustStyle(this.itemRowColor);
    }

    /**
     * @description Retrieves the defined cell color by the given columnId.
     *
     * @param  columnId
     * @returns SafeStyle
     */
    public getColumnColor(columnId: string): SafeStyle {
        const column: DynamicTableColumnInterace = DynamicTableUtils.getColumnById(columnId, this.columns);
        const columnOption: DynamicTableColumnInterace = DynamicTableUtils.getColumnById(columnId, this.columnOptions);
        let columnColor = column['backgroundColor'];
        if (columnOption != null) {
            columnColor = columnOption['backgroundColor'];
        }
        return this.sanitizer.bypassSecurityTrustStyle(columnColor);
    }

    /**
     * @description Checks if the table has groups.
     *
     * @returns boolean
     */
    private hasGroups(): boolean {
        return (this.groupExpressions != null && this.groupExpressions.length > 0);
    }

    /**
     * @description Swaps the given item after an ID comparison on the same index.
     *
     * @param item
     */
    private replaceItem(item: object): void {
        if (item !== null) {
            let filteredItems = this.dataSource.data.filter(itemFromList => isEqual((<any>itemFromList)['id'], (<any>item)['id']));
            filteredItems = (filteredItems.length > 0) ? filteredItems : this.dataSource.data.filter(itemFromList => isEqual(itemFromList['id'].elementId, (<any>item)['id'].elementId));
            if (filteredItems != null && filteredItems.length > 0) {
                // replace item in the list on the same index
                const index = this.dataSource.data.indexOf(this.dataSource.data[0]);
                this.dataSource.data[index] = item;
            }
        }
    }


    /**
     * @description Removes the given item from the array list.
     *
     * @param item
     * @returns void
     */
    private removeItem(item: object): void {
        if (item !== null) {
            const index = this.dataSource.data.indexOf(item);
            this.dataSource.data.splice(index, 1);
        }
    }


    /**
     * @description Handles events triggered from the data provider.
     *
     * @param data
     * @returns void
     */
    public handleDataProviderEvents(data: DynamicTableEventDataInterface): void {
        switch (data['event']) {
            case 'refreshList':
                this.loadData();
                break;
            case 'updateItem':
                this.replaceItem(data['item']);
                break;
            case 'removeItem':
                this.removeItem(data['item']);
                break;
            case 'nextItem':
                this.actionMessage.setItem(this.getNextItem());
                this.actionMessage.setAction('nextItem');
                this.actionsSubject.next(this.actionMessage);
                break;
            case 'previousItem':
                this.actionMessage.setItem(this.getPreviousItem());
                this.actionMessage.setAction('previousItem');
                this.actionsSubject.next(this.actionMessage);
                break;
        }
    }

    /**
     * @description Checks if the given column is defined and should be displayed.
     *
     * @param column
     */
    public isColumnDefined(column: string) {
        return this.displayedColumns.indexOf(column) > -1;
    }

    /**
     * @description Retrieves the style url.
     *
     * @returns string
     */
    public getColumnsStyleUrl(): string {
        return this.palTableDataProvider.getColumnsStyleUrl();
    }


    /**
     * @description Retrieves the indicator cell color provided by the table data provider.
     *
     * @param item
     * @param rowIndex
     * @returns string
     */
    public getIndicatorColor(item: object, rowIndex: number): string {
        return this.palTableDataProvider.getIndicatorColor(item, rowIndex, this.groupIndex, this.groupName);
    }

    /**
     * @description Retrieves the indicator cell sign provided by the table data provider.
     *
     * @param item
     * @param rowIndex
     * @returns string
     */
    public getIndicatorSign(item: object, rowIndex: number): string {
        return this.palTableDataProvider.getIndicatorSign(item, rowIndex, this.groupIndex, this.groupName);
    }

    /**
     * @description Retrieves the html content summary cell provided by the table data provider.
     * The html content summary can be defined as html string which will be compiled and rendered dynamically in this cell.
     *
     * @param item
     * @param rowIndex
     * @returns string
     */
    public getHTMLContentSummary(item: object, rowIndex: number): string {
        this.palTableContentSummaryContainerDirectives = this.palTableContentSummaryContainerQueryList.toArray();
        const htmlContentSummary = this.palTableDataProvider.getHTMLContentSummary(item, rowIndex, this.groupIndex, this.groupName);
        const palTableContentSummaryContainerDirective = this.palTableContentSummaryContainerDirectives[rowIndex];
        if (palTableContentSummaryContainerDirective != null) {
            this.zone.run(() =>
                this.palTableDynamicCellBuilder.createColumn(
                    palTableContentSummaryContainerDirective.viewContainerRef,
                    htmlContentSummary,
                    this.getColumnsStyleUrl(),
                    {
                        item: item,
                        actionsSubject: this.actionsSubject,
                        actionMessage: this.actionMessage,
                        mouseEventsSubject: this.mouseEventsSubject,
                        mouseEventMessage: this.mouseEventMessage
                    }
                ));
        }
        return '';
    }

    /**
     * @description Retrieves the additional info cell provided by the table data provider.
     * The additional info can be defined as html string which will be compiled and rendered dynamically in this cell.
     *
     * @param item
     * @param rowIndex
     * @returns string
     */
    public getAdditionalInfo(item: object, rowIndex: number): string {
        this.palTableAdditionalInfoContainerDirectives = this.palTableAdditionalInfoContainerQueryList.toArray();
        const htmlAdditionalInfo = this.palTableDataProvider.getAdditionalInfo(item, rowIndex, this.groupIndex, this.groupName);
        const palTableAdditionalInfoContainerDirective = this.palTableAdditionalInfoContainerDirectives[rowIndex];
        if (palTableAdditionalInfoContainerDirective != null) {
            this.zone.run(() =>
                this.palTableDynamicCellBuilder.createColumn(
                    palTableAdditionalInfoContainerDirective.viewContainerRef,
                    htmlAdditionalInfo,
                    this.getColumnsStyleUrl(),
                    {
                        item: item,
                        actionsSubject: this.actionsSubject,
                        actionMessage: this.actionMessage,
                        mouseEventsSubject: this.mouseEventsSubject,
                        mouseEventMessage: this.mouseEventMessage
                    }
                ));
        }
        return '';
    }

    /**
     * @description Retrieves the html icon cell provided by the table data provider.
     * The icon can be defined as html string which will be compiled and rendered dynamically in this cell.
     *
     * @param item
     * @param rowIndex
     * @returns string
     */
    public getHTMLIcon(item: object, rowIndex: number): string {
        this.palTableIconContainerDirectives = this.palTableIconContainerQueryList.toArray();
        const iconHtml = this.palTableDataProvider.getHTMLIcon(item, rowIndex, this.groupIndex, this.groupName);
        const palTableIconContainerDirective = this.palTableIconContainerDirectives[rowIndex];
        if (palTableIconContainerDirective != null) {
            this.zone.run(() =>
                this.palTableDynamicCellBuilder.createColumn(
                    palTableIconContainerDirective.viewContainerRef,
                    iconHtml,
                    this.getColumnsStyleUrl(),
                    {
                        item: item,
                        actionsSubject: this.actionsSubject,
                        actionMessage: this.actionMessage,
                        mouseEventsSubject: this.mouseEventsSubject,
                        mouseEventMessage: this.mouseEventMessage
                    }
                ));
        }
        return '';
    }

    /**
     * @description Retrieves the title cell provided by the table data provider.
     * The title can be defined as html string which will be compiled and rendered dynamically in this cell.
     *
     * @param item
     * @param rowIndex
     * @returns string
     */
    public getTitle(item: object, rowIndex: number): string {
        this.palTableTitleContainerDirectives = this.palTableTitleContainerQueryList.toArray();
        const htmlTitle = this.palTableDataProvider.getTitle(item, rowIndex, this.groupIndex, this.groupName);
        const palTableTitleContainerDirective = this.palTableTitleContainerDirectives[rowIndex];
        if (palTableTitleContainerDirective != null) {
            this.zone.run(() =>
                this.palTableDynamicCellBuilder.createColumn(
                    palTableTitleContainerDirective.viewContainerRef,
                    htmlTitle,
                    this.getColumnsStyleUrl(),
                    {
                        item: item,
                        actionsSubject: this.actionsSubject,
                        actionMessage: this.actionMessage,
                        mouseEventsSubject: this.mouseEventsSubject,
                        mouseEventMessage: this.mouseEventMessage
                    }
                ));
        }
        return '';
    }

    /**
     * @description Retrieves the other text based cell provided by the table data provider.
     *
     * @param item
     * @param rowIndex
     * @returns string
     */
    public getOtherTextBased(item: object, rowIndex: number): string {
        return this.palTableDataProvider.getOtherTextBased(item, rowIndex, this.groupIndex, this.groupName);
    }

    /**
     * @description Retrieves the description cell provided by the table data provider.
     * The description content can be defined as html string which will be compiled and rendered dynamically in this cell.
     *
     * @param item
     * @param rowIndex
     * @returns string
     */
    public getDescription(item: object, rowIndex: number): string {
        this.palTableDescriptionContainerDirectives = this.palTableDescriptionContainerQueryList.toArray();
        const htmlDescription = this.palTableDataProvider.getDescription(item, rowIndex, this.groupIndex, this.groupName);
        const palTableDescriptionContainerDirective = this.palTableDescriptionContainerDirectives[rowIndex];
        if (palTableDescriptionContainerDirective != null) {
            this.zone.run(() =>
                this.palTableDynamicCellBuilder.createColumn(
                    palTableDescriptionContainerDirective.viewContainerRef,
                    htmlDescription,
                    this.getColumnsStyleUrl(),
                    {
                        item: item,
                        actionsSubject: this.actionsSubject,
                        actionMessage: this.actionMessage,
                        mouseEventsSubject: this.mouseEventsSubject,
                        mouseEventMessage: this.mouseEventMessage
                    }
                ));
        }
        return '';
    }

    /**
     * @description Retrieves the actions cell provided by the table data provider.
     * Actions can be defined as html string which will be compiled and rendered dynamically in this cell.
     *
     * @param item
     * @param rowIndex
     * @returns string
     */
    public getHTMLAction(item: object, rowIndex: number): string {
        this.palTableActionsContainerDirectives = this.palTableActionsContainerQueryList.toArray();
        const actionsHtml = this.palTableDataProvider.getHTMLAction(item, rowIndex, this.groupIndex, this.groupName);
        const palTableActionsContainerDirective = this.palTableActionsContainerDirectives[rowIndex];
        if (palTableActionsContainerDirective != null) {
            this.zone.run(() => {
                this.palTableDynamicCellBuilder.createColumn(
                    palTableActionsContainerDirective.viewContainerRef,
                    actionsHtml,
                    this.getColumnsStyleUrl(),
                    {
                        item: item,
                        actionsSubject: this.actionsSubject,
                        actionMessage: this.actionMessage,
                        mouseEventsSubject: this.mouseEventsSubject,
                        mouseEventMessage: this.mouseEventMessage
                    }
                );
            });
        }
        return '';
    }

    /**
     * @description Retrives the column name by the given columnId.
     *
     * @param columnId
     * @returns string
     */
    public getColumnName(columnId: string): string {
        return DynamicTableUtils.getColumnNameById(columnId, this.columns);
    }

    /**
     * @description Applies the given filter value to the data source.
     *
     * @param  filterValue
     * @returns void
     */
    public applyFilter(filterValue: string): void {
        if (filterValue.length >= TableInstanceComponent.FILTER_MIN_VALUE && filterValue !== this.filterHint) {
            filterValue = filterValue.trim(); // Remove whitespace
            filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        } else {
            filterValue = '';
        }
        this.dataSource.filter = filterValue;
    }

    /**
     * @description Selects the clicked item.
     *
     * @param index
     * @returns void
     */
    public selectItem(index: number): void {
        this.currentSelectedRowIndex = index;
        this.changeDetectorRef.detectChanges();
    }

    /**
     * @description Retrieves the current selected item.
     *
     * @returns object
     */
    public getCurrentSelectedItem(): object {
        return this.dataSource.data[this.currentSelectedRowIndex];
    }

    /**
     * @description Retrieves the previous selected item.
     *
     * @returns object
     */
    public getPreviousItem(): object {
        const previousItemPosition = (this.currentSelectedRowIndex > 0) ? this.currentSelectedRowIndex - 1 : 0;
        this.selectItem(previousItemPosition);
        return this.dataSource.data[previousItemPosition];
    }

    /**
     * @description Retrieves the item to be selected next.
     *
     * @returns object
     */
    public getNextItem(): object {
        const nextElementPosition = (this.currentSelectedRowIndex < (this.dataSource.data.length - 1)) ? this.currentSelectedRowIndex + 1 : this.currentSelectedRowIndex;
        this.selectItem(nextElementPosition);
        return this.dataSource.data[nextElementPosition];
    }

    /**
     * @description Triggered when the filter input is entered.
     *
     * @returns void
     */
    public onFilterEnter(): void {
        this.filterHint = '';
    }

    /**
     * @description Triggered when the filter input is leaved.
     *
     * @returns void
     */
    public onFilterLeave(): void {
        this.filterHint = 'Filter';
    }




}
