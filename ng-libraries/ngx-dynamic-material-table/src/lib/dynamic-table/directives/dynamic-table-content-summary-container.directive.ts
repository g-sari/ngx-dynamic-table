/*******************************************************************
 * NGX-DYNAMIC-MATERIAL-TABLE                                      *
 * @description Create fancy and complex tables dynamically        *
 * @file dynamic-table-content-summary-container.directive.ts      *
 * @author Gökhan Sari - <goekhan.sari@arpage.ch>                  *
 * @copyright Arpage AG, Zurich Switzerland, 2018                  *
 *******************************************************************/
import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

/**
 * Indicates the container name where the generated HTML will be injected.
 */
@Directive({ selector: '[palTableContentSummaryContainer]' })
export class DynamicTableContentSummaryContainerDirective {

    @Input('palTableContentSummaryContainer') palTableContentSummaryContainer: string;

    constructor(public viewContainerRef: ViewContainerRef) { }

}
