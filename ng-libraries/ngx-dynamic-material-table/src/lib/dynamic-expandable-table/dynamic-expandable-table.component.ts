/*******************************************************************
 * NGX-DYNAMIC-MATERIAL-TABLE                                      *
 * @description Create fancy and complex tables dynamically        *
 * @file dynamic-expandable-table.component.ts                     *
 * @author Gökhan Sari - <goekhan.sari@arpage.ch>                  *
 * @copyright Arpage AG, 2018                                      *
 *******************************************************************/
import { Component, Injector } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { DynamicExpandableTableDataProvider } from './shared/dynamic-expandable-data.provider';
import { DynamicTableComponent } from '../dynamic-table/dynamic-table.component';

@Component({
    selector: 'dynamic-expandable-table',
    templateUrl: './dynamic-expandable-table.component.html',
    styleUrls: [
        './dynamic-expandable-table.component.scss',
        '../dynamic-table/table/table-instance.component.scss'
    ],
    animations: [
        trigger('detailExpand', [
            state('collapsed', style({ height: '0px', minHeight: '0px', display: 'none' })),
            state('expanded', style({ display: 'inline', height: '*' })),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ],
})
export class DynamicExpandableTableComponent extends DynamicTableComponent {

    protected iconRegistry: MatIconRegistry;
    protected sanitizer: DomSanitizer;

    constructor(injector: Injector) {
        super(injector);
        this.iconRegistry = injector.get(MatIconRegistry);
        this.sanitizer = injector.get(DomSanitizer);
        this.palTableDataProvider = injector.get(DynamicExpandableTableDataProvider);
        this.tableOptions = this.palTableDataProvider.getOptions();
        // Register SVG icons
        this.iconRegistry.addSvgIcon(
            'expand',
            this.sanitizer.bypassSecurityTrustResourceUrl('assets/ui/images/svg/expand-icon.svg')
        );
    }


}

