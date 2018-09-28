import { DynamicTableGroupInterface } from './dynamic-table-group.interface';
import { DynamicTableGroupExpressionInterface } from './dynamic-table-group-expression.interface';
import { DynamicTableColumnInterace } from './dynamic-table-column.interface';

export interface DynamicTableOptionInterface {

    groupName: string;
    groupExpressions: DynamicTableGroupExpressionInterface[];
    groupItemRowColor: string;
    hideColumns: boolean;
    columnOptions: DynamicTableColumnInterace[];

}
