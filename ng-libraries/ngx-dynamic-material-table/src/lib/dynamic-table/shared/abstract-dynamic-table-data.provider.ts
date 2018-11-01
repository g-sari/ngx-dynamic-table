/*******************************************************************
 * NGX-DYNAMIC-MATERIAL-TABLE                                      *
 * @description Create fancy and complex tables dynamically        *
 * @file abstract-dynamic-table-data.provider.ts                   *
 * @author Gökhan Sari - <goekhan.sari@arpage.ch>                  *
 * @copyright Arpage AG, Zurich Switzerland, 2018                  *
 *******************************************************************/
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { DynamicTableDataInterface } from '../interfaces/dynamic-table-data.interface';
import { DynamicTableEventDataInterface } from '../interfaces/dynamic-table-event-data.interface';
import { DynamicTableOptionInterface } from '../interfaces/dynamic-table-option.interface';
import { DynamicTableColumnInterace } from '../interfaces/dynamic-table-column.interface';
import { DynamicTableGroupExpressionInterface } from '../interfaces/dynamic-table-group-expression.interface';
import { DynamicTableGroupInterface } from '../interfaces/dynamic-table-group.interface';

/**
 * Abstract class that defines the data communication between the host component and dynamic table component.
 */
export abstract class AbstractDynamicTableDataProvider<T> implements DynamicTableDataInterface<T>  {

    private palTableEventPublisher = new Subject<DynamicTableEventDataInterface>();

    protected createTableOption(
        groupName: string,
        groupExpressions: DynamicTableGroupExpressionInterface[],
        groupItemRowColor = '',
        hideColumns = true,
        columnOptions: DynamicTableColumnInterace[]
    ): DynamicTableOptionInterface {
        const tableOptions: DynamicTableOptionInterface = {
            groupName: groupName,
            groupExpressions: groupExpressions,
            groupItemRowColor: groupItemRowColor,
            hideColumns: hideColumns,
            columnOptions: columnOptions
        };
        return tableOptions;
    }

    protected createGroupExpression(groupByField: string, rules: Object[], fieldType = 'string') {
        const groupBy: DynamicTableGroupInterface = {
            groupByField: groupByField,
            fieldType: fieldType,
            rules: rules
        };
        return groupBy;
    }

    public refreshList(): void {
        this.palTableEventPublisher.next({ event: 'refreshList', item: null });
    }

    public updateItem(item: object): void {
        this.palTableEventPublisher.next({ event: 'updateItem', item: item });
    }

    public removeItem(item: object): void {
        this.palTableEventPublisher.next({ event: 'removeItem', item: item });
    }

    public getEventPublisher(): Observable<any> {
        return this.palTableEventPublisher;
    }

    public nextElement(): void {
        this.palTableEventPublisher.next({ event: 'nextItem', item: null });
    }

    public previousElement(): void {
        this.palTableEventPublisher.next({ event: 'previousItem', item: null });
    }

    public getColumnsStyleUrl(): string {
        return './styles/pal-table-cells-style.scss';
    }

    // Provides the list of table columns
    abstract getColumns(): DynamicTableColumnInterace[];

    // Provides the data as an observable array displayed in the table
    abstract getData(sort: string, order: string, page: number): Observable<T[]>;

    // Retrieves table options incl. grouping of data. Return null, if you don't want to group data.
    abstract getOptions(): DynamicTableOptionInterface[];

    // Predefined column IndicatorColor: Retrieves the color for each data row/item, where i.e. an enumeration can be displayed like 1. row, 2. row, 3. row etc.
    abstract getIndicatorColor(item: T, rowIndex: number, groupIndex: number, groupName: string): string;

    // Predefined column IndicatorSign: Retrieves the sign for each data row/item, where i.e. an enumeration can be displayed. This sign could be i.e. a number or a letter.
    abstract getIndicatorSign(item: T, rowIndex: number, groupIndex: number, groupName: string): string;

    // Predefined column HTMLIcon: Retrieves the icon for each data row/item.
    abstract getHTMLIcon(item: T, rowIndex: number, groupIndex: number, groupName: string): string;

    // Predefined column Title: Retrieves the title for each data row/item.
    abstract getTitle(item: T, rowIndex: number, groupIndex: number, groupName: string): string;

    // Predefined column Description: Retrieves the description for each data row/item.
    abstract getDescription(item: T, rowIndex: number, groupIndex: number, groupName: string): string;

    // Predefined column HTMLContentSummary: Retrieves the content summary for each data row/item.
    abstract getHTMLContentSummary(item: T, rowIndex: number, groupIndex: number, groupName: string): string;

    // Predefined column AdditionalInfo: Retrieves the additional info for each data row/item.
    abstract getAdditionalInfo(item: T, rowIndex: number, groupIndex: number, groupName: string): string;

    // Predefined column HTMLAction: Retrieves the actions for each data row/item.
    abstract getHTMLAction(item: T, rowIndex: number, groupIndex: number, groupName: string): string;

    // Predefined column OtherTextBased: Retrieves an other text based cell for each data row/item.
    abstract getOtherTextBased(item: T, rowIndex: number, groupIndex: number, groupName: string): string;


}
