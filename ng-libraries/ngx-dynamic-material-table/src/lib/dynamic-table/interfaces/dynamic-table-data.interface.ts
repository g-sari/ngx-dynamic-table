/*******************************************************************
 * NGX-DYNAMIC-MATERIAL-TABLE                                      *
 * @description Create fancy and complex tables dynamically        *
 * @file dynamic-table-data.interface.ts                           *
 * @author Gökhan Sari - <goekhan.sari@arpage.ch>                  *
 * @copyright Arpage AG, Zurich Switzerland, 2018                  *
 *******************************************************************/
import { Observable } from 'rxjs';
import { DynamicTableInterface } from './dynamic-table.interface';
import { DynamicTableOptionInterface } from './dynamic-table-option.interface';
import { DynamicTableColumnInterace } from './dynamic-table-column.interface';

export interface DynamicTableDataInterface<T> extends DynamicTableInterface<T> {

    getColumns(): Array<DynamicTableColumnInterace>;

    getColumnsStyleUrl(): string;

    getData(sort: string, order: string, page: number): Observable<T[]>;

    getEventPublisher(): Observable<any>;

    getOptions(): Array<DynamicTableOptionInterface>;

}
