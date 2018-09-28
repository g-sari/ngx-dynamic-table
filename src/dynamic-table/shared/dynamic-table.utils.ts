import { DynamicTableColumnInterace } from '../interfaces/dynamic-table-column.interface';


export class DynamicTableUtils {

    public static createHTMLAction(action: string, item: object): string {
        return 'publishAction(\'' + action + '\', item)';
    }

    public static createMouseOverEvent(mouseOverEvent: string, item: object): string {
        return 'onMouseOver(\'' + mouseOverEvent + '\', item)';
    }

    public static createMouseOutEvent(mouseOutEvent: string, item: object): string {
        return 'onMouseOut(\'' + mouseOutEvent + '\', item)';
    }

    public static createMiniFabButton(matColor: string, value: string, backgroundColor: string = null): string {
        let miniFabButton: string;
        miniFabButton = '<button mat-mini-fab color="' + matColor + '"';
        miniFabButton += (backgroundColor != null) ? ' style="background-color:' + backgroundColor + ';"' : '';
        miniFabButton += '>' + value + '</button> ';
        return miniFabButton;
    }

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
