/*******************************************************************
 * NGX-DYNAMIC-MATERIAL-TABLE                                      *
 * @description Create fancy and complex tables dynamically        *
 * @file dynamic-table-additional-info-container.directive.ts      *
 * @author Gökhan Sari - <goekhan.sari@arpage.ch>                  *
 * @copyright Arpage AG, Zurich Switzerland, 2018                  *
 *******************************************************************/
import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

/**
 * Indicates the container name where the generated HTML will be injected.
 */
@Directive({ selector: '[palTableAdditionalInfoContainer]' })
export class PalTableAdditionalInfoContainerDirective {

    @Input('palTableAdditionalInfoContainer') palTableAdditionalInfoContainer: string;

    constructor(public viewContainerRef: ViewContainerRef) { }

}
