/*******************************************************************
 * NGX-DYNAMIC-MATERIAL-TABLE                                      *
 * @description Create fancy and complex tables dynamically        *
 * @file dynamic-expandable-table.utils.ts                         *
 * @author Gökhan Sari - <goekhan.sari@arpage.ch>                  *
 * @copyright Arpage AG, 2018                                      *
 *******************************************************************/
import { DynamicExpandableTableExpandedItemColumnInterace } from '../interfaces/dynamic-expandable-table-expanded-item-column.interface';

export class DynamicExpandableTableUtils {


    public static convertToColumnIds(columns: Array<DynamicExpandableTableExpandedItemColumnInterace>): string[] {
        const columnNames: string[] = [];
        if (columns != null) {
            for (const palExpandableTableExpandedItemColumn of columns) {
                columnNames.push(palExpandableTableExpandedItemColumn.columnId);
            }
        }
        return columnNames;
    }


}
