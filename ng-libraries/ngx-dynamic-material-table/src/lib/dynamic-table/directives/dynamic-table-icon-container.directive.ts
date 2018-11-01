/*******************************************************************
 * NGX-DYNAMIC-MATERIAL-TABLE                                      *
 * @description Create fancy and complex tables dynamically        *
 * @file dynamic-table-icon-container.directive.ts                 *
 * @author Gökhan Sari - <goekhan.sari@arpage.ch>                  *
 * @copyright Arpage AG, Zurich Switzerland, 2018                  *
 *******************************************************************/
import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

/**
 * Indicates the container name where the generated HTML will be injected.
 */
@Directive({ selector: '[palTableIconContainer]' })
export class DynamicTableIconContainerDirective {

    @Input('palTableIconContainer') palTableIconContainer: string;

    constructor(public viewContainerRef: ViewContainerRef) { }

}
