/*******************************************************************
 * NGX-DYNAMIC-MATERIAL-TABLE                                      *
 * @description Create fancy and complex tables dynamically        *
 * @file dynamic-table-option.interface.ts                         *
 * @author Gökhan Sari - <goekhan.sari@arpage.ch>                  *
 * @copyright Arpage AG, Zurich Switzerland, 2018                  *
 *******************************************************************/
import { DynamicTableGroupExpressionInterface } from './dynamic-table-group-expression.interface';
import { DynamicTableColumnInterace } from './dynamic-table-column.interface';

export interface DynamicTableOptionInterface {

    groupName: string;
    groupExpressions: DynamicTableGroupExpressionInterface[];
    groupItemRowColor: string;
    hideColumns: boolean;
    columnOptions: DynamicTableColumnInterace[];

}
