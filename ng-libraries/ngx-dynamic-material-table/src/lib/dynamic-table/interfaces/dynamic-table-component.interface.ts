/*******************************************************************
 * NGX-DYNAMIC-MATERIAL-TABLE                                      *
 * @description Create fancy and complex tables dynamically        *
 * @file dynamic-table-component.interface.ts                      *
 * @author Gökhan Sari - <goekhan.sari@arpage.ch>                  *
 * @copyright Arpage AG, Zurich Switzerland, 2018                  *
 *******************************************************************/
import { Observable } from 'rxjs';

export interface UsingDynamicTableComponent<T> {

    handleDynamicTableActions(publisher: Observable<T>): void;

    handleDynamicTableMouseOverEvents(publisher: Observable<object>): void;

    handleDynamicTableMouseOutEvents(publisher: Observable<object>): void;

}