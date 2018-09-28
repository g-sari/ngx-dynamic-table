import { DynamicTableOptionInterface } from '../../dynamic-table/interfaces/dynamic-table-option.interface';

export interface DynamicExpandableTableOptionInterface extends DynamicTableOptionInterface {

    hideColumnsOfExpandedItems: boolean;

    hideColumnsOfExpandedItemDetails: boolean;

}
