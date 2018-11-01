/*******************************************************************
 * NGX-DYNAMIC-MATERIAL-TABLE                                      *
 * @description Create fancy and complex tables dynamically        *
 * @file dynamic-table.interface.ts                                *
 * @author Gökhan Sari - <goekhan.sari@arpage.ch>                  *
 * @copyright Arpage AG, Zurich Switzerland, 2018                  *
 *******************************************************************/
export interface DynamicTableInterface<T> {

    getIndicatorColor(item: T, rowIndex: number, groupIndex: number, groupName: string): string;

    getIndicatorSign(item: T, rowIndex: number, groupIndex: number, groupName: string): string;

    getHTMLIcon(item: T, rowIndex: number, groupIndex: number, groupName: string): string;

    getTitle(item: T, rowIndex: number, groupIndex: number, groupName: string): string;

    getDescription(item: T, rowIndex: number, groupIndex: number, groupName: string): string;

    getHTMLContentSummary(item: T, rowIndex: number, groupIndex: number, groupName: string): string;

    getAdditionalInfo(item: T, rowIndex: number, groupIndex: number, groupName: string): string;

    getHTMLAction(item: T, rowIndex: number, groupIndex: number, groupName: string): string;

    getOtherTextBased(item: T, rowIndex: number, groupIndex: number, groupName: string): string;


}
