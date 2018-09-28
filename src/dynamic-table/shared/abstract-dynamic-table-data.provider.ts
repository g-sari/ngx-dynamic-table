import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { DynamicTableDataInterface } from '../interfaces/dynamic-table-data.interface';
import { DynamicTableEventDataInterface } from '../interfaces/dynamic-tale-event-data.interface';
import { DynamicTableOptionInterface } from '../interfaces/dynamic-table-option.interface';
import { DynamicTableColumnInterace } from '../interfaces/dynamic-table-column.interface';


export abstract class AbstractDynamicTableDataProvider<T> implements DynamicTableDataInterface<T>  {

    private palTableEventPublisher = new Subject<DynamicTableEventDataInterface>();

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

    abstract getColumns(): DynamicTableColumnInterace[];

    abstract getData(sort: string, order: string, page: number): Observable<T[]>;

    abstract getIndicatorColor(item: T, rowIndex: number, groupIndex: number, groupName: string): string;

    abstract getIndicatorSign(item: T, rowIndex: number, groupIndex: number, groupName: string): string;

    abstract getHTMLIcon(item: T, rowIndex: number, groupIndex: number, groupName: string): string;

    abstract getTitle(item: T, rowIndex: number, groupIndex: number, groupName: string): string;

    abstract getDescription(item: T, rowIndex: number, groupIndex: number, groupName: string): string;

    abstract getHTMLContentSummary(item: T, rowIndex: number, groupIndex: number, groupName: string): string;

    abstract getAdditionalInfo(item: T, rowIndex: number, groupIndex: number, groupName: string): string;

    abstract getHTMLAction(item: T, rowIndex: number, groupIndex: number, groupName: string): string;

    abstract getOtherTextBased(item: T, rowIndex: number, groupIndex: number, groupName: string): string;

    abstract getOptions(): DynamicTableOptionInterface[];

}
