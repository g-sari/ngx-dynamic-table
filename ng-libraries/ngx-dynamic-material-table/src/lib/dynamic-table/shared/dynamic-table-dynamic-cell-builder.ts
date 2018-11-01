/*******************************************************************
 * NGX-DYNAMIC-MATERIAL-TABLE                                      *
 * @description Create fancy and complex tables dynamically        *
 * @file dynamic-table-dynamic-cell-builder.ts                     *
 * @author Gökhan Sari - <goekhan.sari@arpage.ch>                  *
 * @copyright Arpage AG, Zurich Switzerland, 2018                  *
 *******************************************************************/
import { Injectable, Injector, ViewContainerRef, Component, ComponentRef, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatDividerModule, MatTooltipModule, MatSlideToggleModule } from '@angular/material';
import { AbstractDynamicBaseService } from '../../abstract-dynamic-base.service';


@Injectable()
export class DynamicTableDynamicCellBuilder extends AbstractDynamicBaseService {

    constructor(private injector: Injector) {
        super(injector);
    }

    /**
     * @description Creates a column cell dynamically by the given parameters.
     *
     * @param container
     * @param htmlTemplate
     * @param columnsStyleUrl
     * @param properties
     * @returns Promise
     */
    public createColumn(container: ViewContainerRef, htmlTemplate: string, columnsStyleUrl: string, properties: any = {}): Promise<ComponentRef<any>> {

        const componentOptions = {
            selector: 'column',
            template: htmlTemplate,
            styles: [
                '.icon-medium{width:32px;height:32px;font-size:32px}.icon-large{width:48px;height:48px;font-size:48px}.icon-big{width:64px;height:64px;font-size:64px}.icon-color-grey{color:#929292}.icon-color-white{color:#fff} ',
                '// BUTTONS .button-big{height:70px}.badge-green[data-badge]:after,.badge-red[data-badge]:after,.badge-yellow[data-badge]:after{content:attr(data-badge);font-size:20px;color:#fff;width:38px;height:38px;text-align:center;line-height:38px;border-radius:30%;box-shadow:0 0 10px #333}// BADGES .badge-green{position:relative}.badge-green[data-badge]:after{position:absolute;background:green}.badge-red{position:relative}.badge-red[data-badge]:after{position:absolute;background:red}.badge-yellow{position:relative}.badge-yellow[data-badge]:after{position:absolute;background:#ff0}'
            ]
        };

        /**
         * @description Represents a compiled cell as a component.
         *
         * @param componentOptions
         */
        @Component(componentOptions)
        class PalTableColumnComponent implements OnInit {

            constructor() { }

            ngOnInit() { }

            /**
             * @description Publishes an action to the caller component.
             *
             * @param action
             * @param item
             */
            publishAction(action: string, item: object) {
                properties.actionMessage.setAction(action);
                properties.actionMessage.setItem(item);
                properties.actionsSubject.next(properties.actionMessage);
            }

            /**
             * @description Publishes a mouse over event to the caller component.
             *
             * @param mouseEvent
             * @param  item
             * @returns void
             */
            onMouseOver(mouseEvent: string, item: object): void {
                properties.mouseEventMessage.setMouseEvent(mouseEvent);
                properties.mouseEventMessage.setItem(item);
                properties.mouseEventsSubject.next(properties.mouseEventMessage);
            }

            /**
             * @description Publishes a mouse out event to the caller component.
             *
             * @param mouseEvent
             * @param item
             * @returns void
             */
            onMouseOut(mouseEvent: string, item: object): void {
                properties.mouseEventMessage.setMouseEvent(mouseEvent);
                properties.mouseEventMessage.setItem(item);
                properties.mouseEventsSubject.next(properties.mouseEventMessage);
            }
        }
        /**
         * Module for the compiled cell.
         */
        @NgModule({
            imports: [
                CommonModule,
                MatButtonModule,
                MatIconModule,
                MatDividerModule,
                MatTooltipModule,
                MatSlideToggleModule,
            ],
            declarations: [
                PalTableColumnComponent
            ],
            providers: []
        })
        class PalTableColumnModule { }

        // Create the component when the container is empty
        if (container.length === 0) {
            // Wait until the observable is finished
            return this.createDynamicComponent(container, PalTableColumnModule, PalTableColumnComponent, properties);
        }
        return null;
    }



}
