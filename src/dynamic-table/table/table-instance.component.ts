import { MatTableDataSource, MatSort, MatTable } from '@angular/material';
import {
    Component,
    ViewChild,
    ViewChildren,
    QueryList,
    DoCheck,
    NgZone,
    ChangeDetectorRef,
    Injector,
    Input,
    OnInit,
    OnDestroy,
    AfterViewInit
} from '@angular/core';
import { AbstractWebWidgetComponent } from '../../abstract-web-widget.component';
import { DynamicTableInterface } from '../interfaces/dynamic-table.interface';
import { DynamicTableUtils } from '../shared/dynamic-table.utils';
import { Observable, merge, of, Subject, Subscription } from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';
import { isEqual } from 'lodash';
import { DynamicTableEventDataInterface } from '../interfaces/dynamic-tale-event-data.interface';
import { DynamicTableColumnDefinitionConstants } from '../shared/dynamic-table-column-definition.constants';
import { DynamicTableActionsContainerDirective } from '../directives/dynamic-table-actions-container.directive';
import { DynamicTableIconContainerDirective } from '../directives/dynamic-table-icon-container.directive';
import { DynamicTableContentSummaryContainerDirective } from '../directives/dynamic-table-content-summary-container.directive';
import { PalTableAdditionalInfoContainerDirective } from '../directives/dynamic-table-additional-info-container.directive';
import { DynamicTableDescriptionContainerDirective } from '../directives/dynamic-table-description-container.directive';
import { DynamicTableActionMessageService } from '../services/dynamic-table-action-message.service';
import { DynamicTableDataProvider } from '../shared/dynamic-table-data-provider';
import { DynamicTableGroupInterface } from '../interfaces/dynamic-table-group.interface';
import { DynamicTableGroupExpressionInterface } from '../interfaces/dynamic-table-group-expression.interface';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { DynamicTableTitleContainerDirective } from '../directives/dynamic-table-title-container.directive';
import { DynamicTableDynamicCellBuilder } from '../shared/dynamic-table-dynamic-cell-builder';
import { DynamicTableColumnInterace } from '../interfaces/dynamic-table-column.interface';
import { DynamicTableMouseEventMessageService } from '../services/dynamic-table-mouse-event-message.service';

@Component({
    selector: 'table-instance-component',
    templateUrl: './table-instance.component.html',
    styleUrls: ['./table-instance.component.scss']
})
export class TableInstanceComponent extends AbstractWebWidgetComponent implements OnInit, OnDestroy, AfterViewInit, DynamicTableInterface<Object> {

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
    private palTableActionsContainerDirectives: Array<DynamicTableActionsContainerDirective>;
    private palTableIconContainerDirectives: Array<DynamicTableIconContainerDirective>;
    private palTableContentSummaryContainerDirectives: Array<DynamicTableContentSummaryContainerDirective>;
    private palTableAdditionalInfoContainerDirectives: Array<PalTableAdditionalInfoContainerDirective>;
    private palTableDescriptionContainerDirectives: Array<DynamicTableDescriptionContainerDirective>;
    private palTableTitleContainerDirectives: Array<DynamicTableTitleContainerDirective>;
    private subscription: Subscription;
    private currentSelectedRowIndex: number;
    public showSpeedDialLabels: boolean = true;
    public palTableDataProvider: DynamicTableDataProvider;
    private palTableDynamicCellBuilder: DynamicTableDynamicCellBuilder;
    private actionMessage: DynamicTableActionMessageService<object>;
    private mouseEventMessage: DynamicTableMouseEventMessageService<object>;
    private zone: NgZone;
    private changeDetectorRef: ChangeDetectorRef;
    protected sanitizer: DomSanitizer;
    @ViewChildren(DynamicTableIconContainerDirective) palTableIconContainerQueryList: QueryList<DynamicTableIconContainerDirective>;
    @ViewChildren(DynamicTableActionsContainerDirective) palTableActionsContainerQueryList: QueryList<DynamicTableActionsContainerDirective>;
    @ViewChildren(DynamicTableContentSummaryContainerDirective) palTableContentSummaryContainerQueryList: QueryList<DynamicTableContentSummaryContainerDirective>;
    @ViewChildren(PalTableAdditionalInfoContainerDirective) palTableAdditionalInfoContainerQueryList: QueryList<PalTableAdditionalInfoContainerDirective>;
    @ViewChildren(DynamicTableDescriptionContainerDirective) palTableDescriptionContainerQueryList: QueryList<DynamicTableDescriptionContainerDirective>;
    @ViewChildren(DynamicTableTitleContainerDirective) palTableTitleContainerQueryList: QueryList<DynamicTableTitleContainerDirective>;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatTable) table: MatTable<any>;
    @Input() public groupName: string;
    @Input() public itemRowColor: string;
    @Input() public hideColumns = true;
    @Input() public groupExpressions: DynamicTableGroupExpressionInterface[];
    @Input() public columnOptions: DynamicTableColumnInterace[];
    @Input() public actionsSubject: Subject<DynamicTableActionMessageService<object>>;
    @Input() public mouseEventsSubject: Subject<DynamicTableMouseEventMessageService<object>>;

    constructor(injector: Injector) {
        super();
        this.palTableDataProvider = injector.get(DynamicTableDataProvider);
        this.palTableDynamicCellBuilder = injector.get(DynamicTableDynamicCellBuilder);
        this.actionMessage = injector.get(DynamicTableActionMessageService);
        this.mouseEventMessage = injector.get(DynamicTableMouseEventMessageService);
        this.zone = injector.get(NgZone);
        this.changeDetectorRef = injector.get(ChangeDetectorRef);
        this.sanitizer = injector.get(DomSanitizer);
        this.columns = this.palTableDataProvider.getColumns();
        this.addStandardColumns();
    }

    ngOnInit(): void {
        // Columns
        this.displayedColumns = DynamicTableUtils.convertToColumnIds(this.columns);
        // Subscribe to pal table events
        const eventPublisher: Observable<any> = this.palTableDataProvider.getEventPublisher();
        if (eventPublisher != null) {
            this.subscription = eventPublisher.subscribe(data => this.handleDataProviderEvents(data), error => console.error(error));
        }
        //  Trigger data loading
        this.load();
        //
        this.actionMessage.setPublisher(this.actionsSubject.asObservable());
        this.mouseEventMessage.setPublisher(this.mouseEventsSubject.asObservable());
    }

    ngAfterViewInit(): void {
        // this.dataSource.sort = this.sort;
        this.load(); //  Trigger data loading
    }

    ngOnDestroy(): void {
        this.changeDetectorRef.detach();
        if (this.subscription != null) {
            this.subscription.unsubscribe();
        }
    }

    private load(): void {
        setTimeout(() => {
            this.zone.run(() => this.loadData());
        }, 300);
    }

    public addStandardColumns(): void {
        this.columns.unshift({ columns: ['selectedRowColumn'], names: ['selectedRowColumn'], backgroundColor: null });
    }

    private loadData(): void {
        // If the user changes the sort order, reset back to the first page.
        // this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

        merge(/*this.sort.sortChange, this.paginator.page*/)
            .pipe(
                startWith({}),
                switchMap(() => {
                    this.isLoadingResults = true;
                    return this.palTableDataProvider.getData(
                        this.sort.active, this.sort.direction, /*this.paginator.pageIndex*/ null);
                }),
                map((items: Object[]) => {
                    // Flip flag to show that loading has finished.
                    this.isLoadingResults = false;
                    if (items.length === 0) {
                        this.noDataFound = true;
                    } else {
                        this.noDataFound = false;
                    }
                    this.resultsLength = items['length'];
                    return items;
                }),
                catchError((error) => {
                    console.error('Error in loading pal table data', error);
                    this.isLoadingResults = false;
                    return of([]);
                })
            ).subscribe((items: Object[]) => {
                if (this.hasGroups()) {
                    this.dataSource.data = items.filter(
                        (item: Object) => {
                            const expression = this.buildGroupExpressions();
                            return expression(item);
                        }
                    );
                    this.isLoadingResults = false;
                } else {
                    this.dataSource.data = items;
                    this.isLoadingResults = false;
                }
                this.changeDetectorRef.detectChanges();
            });
    }

    private buildGroupExpressions(): Function {
        let queryString = 'return ';
        for (let i = 0; i < this.groupExpressions.length; i++) {
            const groupExpression = this.groupExpressions[i];
            queryString += this.buildGroupExpression(groupExpression);
            if (this.groupExpressions.length > 0 && ((i + 1) !== this.groupExpressions.length)) {
                queryString += ' ' + groupExpression.operator + ' '; // combine group expressions
            }
        }
        return new Function('item', queryString);
    }

    private buildGroupExpression(groupExpression: DynamicTableGroupExpressionInterface): string {
        let queryString = '';
        const group: DynamicTableGroupInterface = groupExpression.group;
        const rules = group.rules;
        queryString += '(';
        for (const rule of rules) {
            const operator: string = (<any>rule)['operator'];
            const value: string = (<any>rule)['value'];
            switch (operator) {
                case '&&':
                    queryString += ' && ';
                    break;
                case '||':
                    queryString += ' || ';
                    break;
                case '!=':
                    queryString += 'item["' + group.groupByField + '"]' + ' != ' + value;
                    break;
                case '<':
                    queryString += 'item["' + group.groupByField + '"]' + ' < ' + value;
                    break;
                case '<=':
                    queryString += 'item["' + group.groupByField + '"]' + ' <= ' + value;
                    break;
                case '>':
                    queryString += 'item["' + group.groupByField + '"]' + ' > ' + value;
                    break;
                case '>=':
                    queryString += 'item["' + group.groupByField + '"]' + ' >= ' + value;
                    break;
                case '==':
                    queryString += 'item["' + group.groupByField + '"]' + ' == ' + value;
                    break;
            }
        }
        queryString += ')';
        return queryString;
    }

    public getItemRowColor(): SafeStyle {
        return this.sanitizer.bypassSecurityTrustStyle(this.itemRowColor);
    }

    public getColumnColor(columnId: string): SafeStyle {
        const column: DynamicTableColumnInterace = DynamicTableUtils.getColumnById(columnId, this.columns);
        const columnOption: DynamicTableColumnInterace = DynamicTableUtils.getColumnById(columnId, this.columnOptions);
        let columnColor = column['backgroundColor'];
        if (columnOption != null) {
            columnColor = columnOption['backgroundColor'];
        }
        return this.sanitizer.bypassSecurityTrustStyle(columnColor);
    }

    private hasGroups(): boolean {
        return (this.groupExpressions != null && this.groupExpressions.length > 0);
    }

    /**
     * Swaps the given item after an ID comparison on the same index.
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
     * Removes the given item from the array list.
     */
    private removeItem(item: object): void {
        if (item !== null) {
            const index = this.dataSource.data.indexOf(item);
            this.dataSource.data.splice(index, 1);
        }
    }


    /**
     * Handles events triggered from the data provider.
     * 
     * @param data
     */
    public handleDataProviderEvents(data: DynamicTableEventDataInterface): void {
        switch (data['event']) {
            case 'refreshList':
                this.load();
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

    public isColumnDefined(column: string) {
        return this.displayedColumns.indexOf(column) > -1;
    }

    public getColumnsStyleUrl(): string {
        return this.palTableDataProvider.getColumnsStyleUrl();
    }

    public getIndicatorColor(item: object, rowIndex: number, groupIndex: number): string {
        return this.palTableDataProvider.getIndicatorColor(item, rowIndex, groupIndex, this.groupName);
    }

    public getIndicatorSign(item: object, rowIndex: number, groupIndex: number): string {
        return this.palTableDataProvider.getIndicatorSign(item, rowIndex, groupIndex, this.groupName);
    }

    public getHTMLContentSummary(item: object, rowIndex: number, groupIndex: number): string {
        this.palTableContentSummaryContainerDirectives = this.palTableContentSummaryContainerQueryList.toArray();
        const htmlContentSummary = this.palTableDataProvider.getHTMLContentSummary(item, rowIndex, groupIndex, this.groupName);
        const palTableContentSummaryContainerDirective = this.palTableContentSummaryContainerDirectives[rowIndex];
        if (palTableContentSummaryContainerDirective != null) {
            this.zone.run(() => this.palTableDynamicCellBuilder.createColumn(
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

    public getAdditionalInfo(item: object, rowIndex: number, groupIndex: number): string {
        this.palTableAdditionalInfoContainerDirectives = this.palTableAdditionalInfoContainerQueryList.toArray();
        const htmlAdditionalInfo = this.palTableDataProvider.getAdditionalInfo(item, rowIndex, groupIndex, this.groupName);
        const palTableAdditionalInfoContainerDirective = this.palTableAdditionalInfoContainerDirectives[rowIndex];
        if (palTableAdditionalInfoContainerDirective != null) {
            this.zone.run(() => this.palTableDynamicCellBuilder.createColumn(
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

    public getHTMLIcon(item: object, rowIndex: number, groupIndex: number): string {
        this.palTableIconContainerDirectives = this.palTableIconContainerQueryList.toArray();
        const iconHtml = this.palTableDataProvider.getHTMLIcon(item, rowIndex, groupIndex, this.groupName);
        const palTableIconContainerDirective = this.palTableIconContainerDirectives[rowIndex];
        if (palTableIconContainerDirective != null) {
            this.zone.run(() => this.palTableDynamicCellBuilder.createColumn(
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

    public getTitle(item: object, rowIndex: number, groupIndex: number): string {
        this.palTableTitleContainerDirectives = this.palTableTitleContainerQueryList.toArray();
        const htmlTitle = this.palTableDataProvider.getTitle(item, rowIndex, groupIndex, this.groupName);
        const palTableTitleContainerDirective = this.palTableTitleContainerDirectives[rowIndex];
        if (palTableTitleContainerDirective != null) {
            this.zone.run(() => this.palTableDynamicCellBuilder.createColumn(
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

    public getOtherTextBased(item: object, rowIndex: number, groupIndex: number): string {
        return this.palTableDataProvider.getOtherTextBased(item, rowIndex, groupIndex, this.groupName);
    }

    public getDescription(item: object, rowIndex: number, groupIndex: number): string {
        this.palTableDescriptionContainerDirectives = this.palTableDescriptionContainerQueryList.toArray();
        const htmlDescription = this.palTableDataProvider.getDescription(item, rowIndex, groupIndex, this.groupName);
        const palTableDescriptionContainerDirective = this.palTableDescriptionContainerDirectives[rowIndex];
        if (palTableDescriptionContainerDirective != null) {
            this.zone.run(() => this.palTableDynamicCellBuilder.createColumn(
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

    public getHTMLAction(item: object, rowIndex: number, groupIndex: number): string {
        this.palTableActionsContainerDirectives = this.palTableActionsContainerQueryList.toArray();
        const actionsHtml = this.palTableDataProvider.getHTMLAction(item, rowIndex, groupIndex, this.groupName);
        const palTableActionsContainerDirective = this.palTableActionsContainerDirectives[rowIndex];
        if (palTableActionsContainerDirective != null) {
            this.zone.run(() => this.palTableDynamicCellBuilder.createColumn(
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
            ));
        }
        return '';
    }

    public getColumnName(columnId: string): string {
        return DynamicTableUtils.getColumnNameById(columnId, this.columns);
    }

    public applyFilter(filterValue: string): void {
        if (filterValue.length >= TableInstanceComponent.FILTER_MIN_VALUE && filterValue !== this.filterHint) {
            filterValue = filterValue.trim(); // Remove whitespace
            filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        } else {
            filterValue = '';
        }
        this.dataSource.filter = filterValue;
    }

    public selectItem(index: number): void {
        this.currentSelectedRowIndex = index;
        this.changeDetectorRef.detectChanges();
    }

    public getCurrentSelectedItem(): object {
        return this.dataSource.data[this.currentSelectedRowIndex];
    }

    public getPreviousItem(): object {
        const previousItemPosition = (this.currentSelectedRowIndex > 0) ? this.currentSelectedRowIndex - 1 : 0;
        this.selectItem(previousItemPosition);
        return this.dataSource.data[previousItemPosition];
    }

    public getNextItem(): object {
        const nextElementPosition = (this.currentSelectedRowIndex < (this.dataSource.data.length - 1)) ? this.currentSelectedRowIndex + 1 : this.currentSelectedRowIndex;
        this.selectItem(nextElementPosition);
        return this.dataSource.data[nextElementPosition];
    }

    public onFilterEnter(): void {
        this.filterHint = '';
    }

    public onFilterLeave(): void {
        this.filterHint = 'Filter';
    }




}
