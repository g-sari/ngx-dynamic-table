/*******************************************************************
 * NGX-DYNAMIC-MATERIAL-TABLE                                      *
 * @description Create fancy and complex tables dynamically        *
 * @file dynamic-expandable-table-column-definition.constants.ts   *
 * @author Gökhan Sari - <goekhan.sari@arpage.ch>                  *
 * @copyright Arpage AG, 2018                                      *
 *******************************************************************/
import { DynamicTableColumnDefinitionConstants } from '../../dynamic-table/shared/dynamic-table-column-definition.constants';

export class DynamicExpandableTableColumnDefinitionConstants extends DynamicTableColumnDefinitionConstants {

    public static readonly EXPANDABLE_COLUMN = 'expandableColumn';

    get EXPANDABLE_COLUMN() {
        return DynamicExpandableTableColumnDefinitionConstants.EXPANDABLE_COLUMN;
    }

}
