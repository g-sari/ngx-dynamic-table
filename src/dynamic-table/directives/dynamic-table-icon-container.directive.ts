/*******************************************************************
 * @project Project: PalliaCare Mobile App                         *
 * @copyright Copyright (c) Arpage AG - 2017 - All rights reserved *
 * @address Address: Tobelweg 4, CH-8700 Küsnacht ZH               *
 * @web Web: www.arpage.ch                                         *
 * @file File: GenericFormContainerDirective                       *
 * @author Gökhan Sari - <goekhan.sari@arpage.ch>                  *
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
