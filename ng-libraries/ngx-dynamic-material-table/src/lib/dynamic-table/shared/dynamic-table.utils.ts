/*******************************************************************
 * NGX-DYNAMIC-MATERIAL-TABLE                                      *
 * @description Create fancy and complex tables dynamically        *
 * @file dynamic-table.utils.ts                                    *
 * @author Gökhan Sari - <goekhan.sari@arpage.ch>                  *
 * @copyright Arpage AG, Zurich Switzerland, 2018                  *
 *******************************************************************/
import { DynamicTableColumnInterace } from '../interfaces/dynamic-table-column.interface';

/**
 * @description Contains common functions related to the dynamic table.
 */
export class DynamicTableUtils {

    /**
     * @description Converts columns to a list of column ids.
     *
     * @param columns
     * @returns string
     */
    public static convertToColumnIds(columns: Array<DynamicTableColumnInterace>): string[] {
        const columnIds: string[] = [];
        if (columns != null) {
            for (const palTableColumn of columns) {
                for (const column of palTableColumn.columns) {
                    columnIds.push(column);
                }
            }
        }
        return columnIds;
    }

    /**
     * @description Converts columns to a list of column names.
     *
     * @param columns
     * @returns string
     */
    public static convertToColumnNames(columns: Array<DynamicTableColumnInterace>): string[] {
        const columnNames: string[] = [];
        if (columns != null) {
            for (const palTableColumn of columns) {
                for (const name of palTableColumn.names) {
                    columnNames.push(name);
                }
            }
        }
        return columnNames;
    }

    /**
     * @description Retrieves the column name by the given columnId.
     *
     * @param  columnId
     * @param  columns
     * @returns string
     */
    public static getColumnNameById(columnId: string, columns: Array<DynamicTableColumnInterace>): string {
        if (columns != null) {
            for (const palTableColumn of columns) {
                for (let i = 0; i < palTableColumn.columns.length; i++) {
                    const column = palTableColumn.columns[i];
                    if (column === columnId) {
                        return palTableColumn.names[i];
                    }
                }
            }
        }
        return '';
    }

    /**
     * @description Retrieves the column by the given columnId.
     *
     * @param columnId
     * @param columns
     * @returns DynamicTableColumnInterace
     */
    public static getColumnById(columnId: string, columns: Array<DynamicTableColumnInterace>): DynamicTableColumnInterace {
        if (columns != null) {
            for (const palTableColumn of columns) {
                for (let i = 0; i < palTableColumn.columns.length; i++) {
                    const column = palTableColumn.columns[i];
                    if (column === columnId) {
                        return palTableColumn;
                    }
                }
            }
        }
        return null;
    }
}
