/*******************************************************************
 * NGX-DYNAMIC-MATERIAL-TABLE                                      *
 * @description Create fancy and complex tables dynamically        *
 * @file dynamic-expandable-table-option.interface.ts              *
 * @author Gökhan Sari - <goekhan.sari@arpage.ch>                  *
 * @copyright Arpage AG, 2018                                      *
 *******************************************************************/
import { DynamicTableOptionInterface } from '../../dynamic-table/interfaces/dynamic-table-option.interface';

export interface DynamicExpandableTableOptionInterface extends DynamicTableOptionInterface {

    hideColumnsOfExpandedItems: boolean;
    hideColumnsOfExpandedItemDetails: boolean;

}
