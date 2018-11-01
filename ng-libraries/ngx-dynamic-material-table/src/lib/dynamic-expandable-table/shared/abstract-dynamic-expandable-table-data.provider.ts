/*******************************************************************
 * NGX-DYNAMIC-MATERIAL-TABLE                                      *
 * @description Create fancy and complex tables dynamically        *
 * @file abstract-dynamic-expandable-table-data.provider.ts        *
 * @author Gökhan Sari - <goekhan.sari@arpage.ch>                  *
 * @copyright Arpage AG, 2018                                      *
 *******************************************************************/
import { Observable } from 'rxjs';
import { DynamicExpandableTableDataInterface } from '../interfaces/dynamic-expandable-table-data.interface';
import { DynamicExpandableTableOptionInterface } from '../interfaces/dynamic-expandable-table-option.interface';
import { DynamicExpandableTableExpandedItemColumnInterace } from '../interfaces/dynamic-expandable-table-expanded-item-column.interface';
import { AbstractDynamicTableDataProvider } from '../../dynamic-table/shared/abstract-dynamic-table-data.provider';
import { DynamicExpandableTableColumnDefinitionConstants } from './dynamic-expandable-table-column-definition.constants';
import { DynamicTableGroupExpressionInterface } from '../../dynamic-table/interfaces/dynamic-table-group-expression.interface';
import { DynamicTableColumnInterace } from '../../dynamic-table/interfaces/dynamic-table-column.interface';

export abstract class AbstractDynamicExpandableTableDataProvider<T>
    extends AbstractDynamicTableDataProvider<T> implements DynamicExpandableTableDataInterface<T> {

    protected expandableColumn: any = {
        columns: [DynamicExpandableTableColumnDefinitionConstants.EXPANDABLE_COLUMN], names: ['Expand/Collapse'], backgroundColor: '#40C4FF'
    };

    protected createExpandedItemColumn(columnId: string, column: string, backgroundColor = '', color = '', icon = null): DynamicExpandableTableExpandedItemColumnInterace {
        const expandedItemColumn = {} as DynamicExpandableTableExpandedItemColumnInterace;
        expandedItemColumn['columnId'] = columnId;
        expandedItemColumn['column'] = column;
        expandedItemColumn['backgroundColor'] = backgroundColor;
        expandedItemColumn['color'] = color;
        expandedItemColumn['icon'] = icon;
        return expandedItemColumn;
    }

    protected createExpandableTableOption(
        groupName: string,
        groupExpressions: DynamicTableGroupExpressionInterface[],
        columnOptions: DynamicTableColumnInterace[],
        groupItemRowColor = '',
        hideColumns = true,
        hideColumnsOfExpandedItems = false,
        hideColumnsOfExpandedItemDetails = true
    ): DynamicExpandableTableOptionInterface {
        const tableOptions: DynamicExpandableTableOptionInterface = {
            groupName: groupName,
            groupExpressions: groupExpressions,
            groupItemRowColor: groupItemRowColor,
            hideColumns: hideColumns,
            hideColumnsOfExpandedItems: hideColumnsOfExpandedItems,
            hideColumnsOfExpandedItemDetails: hideColumnsOfExpandedItemDetails,
            columnOptions: columnOptions
        };
        return tableOptions;
    }

    abstract getOptions(): Array<DynamicExpandableTableOptionInterface>;

    abstract getExpandedItemTableColumns(expandedItem: T): DynamicExpandableTableExpandedItemColumnInterace[];

    abstract getExpandedItemTableData(expandedItem: T): Observable<T[]>;

    abstract getExpandedItemDetailsTableColumns(expandedItemDetails: T, expandedItem: T): DynamicExpandableTableExpandedItemColumnInterace[];

    abstract getExpandedItemDetailsTableData(expandedItemDetails: T, expandedItem: T): Observable<T[]>;

}

