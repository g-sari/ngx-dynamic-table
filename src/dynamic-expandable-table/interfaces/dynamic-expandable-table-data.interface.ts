import { Observable } from 'rxjs';
import { DynamicExpandableTableOptionInterface } from './dynamic-expandable-table-option.interface';
import { DynamicExpandableTableExpandedItemColumnInterace } from './dynamic-expandable-table-expanded-item-column.interface';
import { DynamicTableDataInterface } from '../../dynamic-table/interfaces/dynamic-table-data.interface';

export interface DynamicExpandableTableDataInterface<T> extends DynamicTableDataInterface<T> {

    getOptions(): Array<DynamicExpandableTableOptionInterface>;

    getExpandedItemTableColumns(expandedItem: T): DynamicExpandableTableExpandedItemColumnInterace[];

    getExpandedItemTableData(expandedItem: T): Observable<T[]>;

    getExpandedItemDetailsTableColumns(expandedItemDetails: T, expandedItem: T): DynamicExpandableTableExpandedItemColumnInterace[];

    getExpandedItemDetailsTableData(expandedItemDetails: T, expandedItem: T): Observable<T[]>;

}
