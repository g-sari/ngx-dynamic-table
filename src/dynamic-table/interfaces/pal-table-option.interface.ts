import { DynamicTableGroupExpressionInterface } from './dynamic-table-group-expression.interface';
import { DynamicTableColumnInterace } from './dynamic-table-column.interface';

export interface PalTableOptionInterface {

    groupName: string;
    groupExpressions: DynamicTableGroupExpressionInterface[];
    groupItemRowColor: string;
    hideColumns: boolean;
    columnOptions: DynamicTableColumnInterace[];

}
