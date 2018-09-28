import { Component, Injector, Input, ViewChildren, QueryList } from '@angular/core';
import { Subject } from 'rxjs';
import { AbstractWebWidgetComponent } from '../abstract-web-widget.component';
import { DynamicTableDataProvider } from './shared/dynamic-table-data-provider';
import { DynamicTableContainerDirective } from './directives/dynamic-table.directive';
import { DynamicTableOptionInterface } from './interfaces/dynamic-table-option.interface';
import { DynamicTableActionMessageService } from './services/dynamic-table-action-message.service';
import { DynamicTableMouseEventMessageService } from './services/dynamic-table-mouse-event-message.service';




@Component({
    selector: 'dynamic-table',
    templateUrl: './dynamic-table.component.html',
    styleUrls: [
        './dynamic-table.component.scss',
        './table/table-instance.component.scss'
    ],
    animations: []
})
export class DynamicTableComponent extends AbstractWebWidgetComponent {

    public static readonly FILTER_MIN_VALUE = 3;
    public filterHint = 'Filter';
    public tableOptions: Array<DynamicTableOptionInterface>;
    public palTableDataProvider: DynamicTableDataProvider;
    public actionsSubject = new Subject<DynamicTableActionMessageService<object>>();
    public mouseEventsSubject = new Subject<DynamicTableMouseEventMessageService<object>>();
    @ViewChildren(DynamicTableContainerDirective) tablesQueryList: QueryList<DynamicTableContainerDirective>;
    @Input() public showFilter = true;

    constructor(injector: Injector) {
        super();
        this.palTableDataProvider = injector.get(DynamicTableDataProvider);
        this.tableOptions = this.palTableDataProvider.getOptions();
    }


    public onFilterEnter(): void {
        this.filterHint = '';
    }

    public onFilterLeave(): void {
        this.filterHint = 'Filter';
    }




}
