/*******************************************************************
 * NGX-DYNAMIC-MATERIAL-TABLE                                      *
 * @description Create fancy and complex tables dynamically        *
 * @file dynamic-table.component.ts                                *
 * @author Gökhan Sari - <goekhan.sari@arpage.ch>                  *
 * @copyright Arpage AG, 2018                                      *
 *******************************************************************/
import { Component, Injector, Input, ViewChildren, QueryList } from '@angular/core';
import { Subject } from 'rxjs';
import { AbstractWebLibraryComponent } from '../abstract-web-library.component';
import { DynamicTableDataProvider } from './shared/dynamic-table-data-provider';
import { DynamicTableContainerDirective } from './directives/dynamic-table.directive';
import { DynamicTableOptionInterface } from './interfaces/dynamic-table-option.interface';
import { DynamicTableActionMessageService } from './services/dynamic-table-action-message.service';
import { DynamicTableMouseEventMessageService } from './services/dynamic-table-mouse-event-message.service';


/**
 * Container component which can contain and control multiple table instances.
 *
 * @param selector
 * @param templateUrl
 * @param styleUrls
 * @param animations
 */
@Component({
    selector: 'dynamic-table',
    templateUrl: './dynamic-table.component.html',
    styleUrls: [
        './dynamic-table.component.scss',
        './table/table-instance.component.scss'
    ],
    animations: []
})
export class DynamicTableComponent extends AbstractWebLibraryComponent {

    public static readonly FILTER_MIN_VALUE = 3; // minimum value to be entered to trigger the filter.
    public filterHint = 'Filter'; // Placeholder for the filter input field.
    public tableOptions: Array<DynamicTableOptionInterface>;
    public palTableDataProvider: DynamicTableDataProvider;
    public actionsSubject = new Subject<DynamicTableActionMessageService<object>>();
    public mouseEventsSubject = new Subject<DynamicTableMouseEventMessageService<object>>();
    @ViewChildren(DynamicTableContainerDirective) tablesQueryList: QueryList<DynamicTableContainerDirective>;
    @Input() public showFilter = true;

    /**
     * @inheritdoc
     */
    constructor(injector: Injector) {
        super(injector);
        this.palTableDataProvider = injector.get(DynamicTableDataProvider); // inject defined dynamic table data provider
        this.tableOptions = this.palTableDataProvider.getOptions(); // get defined table options by the table data provider
    }

    /**
     * Triggered when on the filter input field is clicked.
     * @returns void
     */
    public onFilterEnter(): void {
        this.filterHint = '';
    }

    /**
     * Triggered when the user defocusses the filter input field.
     * @returns void
     */
    public onFilterLeave(): void {
        this.filterHint = 'Filter';
    }




}
