import { Observable } from 'rxjs';
import { DynamicExpandableTableDataInterface } from '../interfaces/dynamic-expandable-table-data.interface';
import { DynamicExpandableTableOptionInterface } from '../interfaces/dynamic-expandable-table-option.interface';
import { DynamicExpandableTableExpandedItemColumnInterace } from '../interfaces/dynamic-expandable-table-expanded-item-column.interface';
import { AbstractDynamicTableDataProvider } from '../../dynamic-table/shared/abstract-dynamic-table-data.provider';

export abstract class AbstractDynamicExpandableTableDataProvider<T>
    extends AbstractDynamicTableDataProvider<T> implements DynamicExpandableTableDataInterface<T>{

    abstract getOptions(): Array<DynamicExpandableTableOptionInterface>;

    abstract getExpandedItemTableColumns(expandedItem: T): DynamicExpandableTableExpandedItemColumnInterace[];

    abstract getExpandedItemTableData(expandedItem: T): Observable<T[]>;

    abstract getExpandedItemDetailsTableColumns(expandedItemDetails: T, expandedItem: T): DynamicExpandableTableExpandedItemColumnInterace[];

    abstract getExpandedItemDetailsTableData(expandedItemDetails: T, expandedItem: T): Observable<T[]>;

}

