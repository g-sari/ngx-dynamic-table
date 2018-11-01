/*******************************************************************
 * NGX-DYNAMIC-MATERIAL-TABLE                                      *
 * @description Create fancy and complex tables dynamically        *
 * @file dynamic-table-columns.directive.ts                        *
 * @author Gökhan Sari - <goekhan.sari@arpage.ch>                  *
 * @copyright Arpage AG, Zurich Switzerland, 2018                  *
 *******************************************************************/
import { Directive, ViewContainerRef, Input } from '@angular/core';

/**
 * Indicates the container name where the generated HTML will be injected.
 */
@Directive({ selector: '[palDynamicTableColumnsContainer]' })
export class DynamicTableColumnsContainerDirective {

    @Input('palDynamicTableColumnsContainer') palDynamicTableColumnsContainer: string;

    constructor(
        public viewContainerRef: ViewContainerRef,
    ) {
        
    }

}
