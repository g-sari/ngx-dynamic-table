import { Injectable, Injector, ViewContainerRef, Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule, MatDividerModule, MatTooltipModule, MatSlideToggleModule } from '@angular/material';
import { AbstractDynamicBaseService } from '../../abstract-dynamic-base.service';



@Injectable()
export class DynamicTableDynamicCellBuilder extends AbstractDynamicBaseService {

    constructor(private injector: Injector) {
        super(injector);
    }

    public createColumn(container: ViewContainerRef, htmlTemplate: string, columnsStyleUrl: string, properties: any = {}): void {

        const componentOptions = {
            selector: 'column',
            template: htmlTemplate,
            styleUrls: ['../styles/pal-table-cells-style.scss'] // columnsStyleUrl
        };

        @Component(componentOptions)
        class PalTableColumnComponent implements OnInit {

            constructor() { }

            ngOnInit() { }

            publishAction(action: string, item: object) {
                properties.actionMessage.setAction(action);
                properties.actionMessage.setItem(item);
                properties.actionsSubject.next(properties.actionMessage);
            }

            onMouseOver(mouseEvent: string, item: object): void {
                properties.mouseEventMessage.setMouseEvent(mouseEvent);
                properties.mouseEventMessage.setItem(item);
                properties.mouseEventsSubject.next(properties.mouseEventMessage);
            }

            onMouseOut(mouseEvent: string, item: object): void {
                properties.mouseEventMessage.setMouseEvent(mouseEvent);
                properties.mouseEventMessage.setItem(item);
                properties.mouseEventsSubject.next(properties.mouseEventMessage);
            }
        }

        @NgModule({
            imports: [
                CommonModule,
                FlexLayoutModule,
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

        // Create the component if the container is empty
        if (container.length === 0) {
            this.createDynamicComponent(container, PalTableColumnModule, PalTableColumnComponent, properties);
        }


    }

}
