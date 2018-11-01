/*******************************************************************
 * NGX-DYNAMIC-MATERIAL-TABLE                                      *
 * @description Create fancy and complex tables dynamically        *
 * @file dynamic-table-group-expression.interface.ts               *
 * @author Gökhan Sari - <goekhan.sari@arpage.ch>                  *
 * @copyright Arpage AG, Zurich Switzerland, 2018                  *
 *******************************************************************/
import { DynamicTableGroupInterface } from './dynamic-table-group.interface';

export interface DynamicTableGroupExpressionInterface {

    group: DynamicTableGroupInterface;
    operator: string;

}
