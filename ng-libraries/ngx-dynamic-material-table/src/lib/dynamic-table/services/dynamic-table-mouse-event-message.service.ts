/*******************************************************************
 * NGX-DYNAMIC-MATERIAL-TABLE                                      *
 * @description Create fancy and complex tables dynamically        *
 * @file dynamic-table-mouse-event-message.service.ts              *
 * @author Gökhan Sari - <goekhan.sari@arpage.ch>                  *
 * @copyright Arpage AG, Zurich Switzerland, 2018                  *
 *******************************************************************/
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DynamicTableMouseEventMessageService<T> {

    private mouseEvent: string;
    private item: T;
    private publisher: Observable<T>;

    public setMouseEvent(mouseEvent: string): void {
        this.mouseEvent = mouseEvent;
    }

    public getMouseEvent(): string {
        return this.mouseEvent;
    }

    public setItem(item: T): void {
        this.item = item;
    }

    public getItem(): T {
        return this.item;
    }

    public setPublisher(publisher: Observable<T>) {
        this.publisher = publisher;
    }

    public getPubisher() {
        return this.publisher;
    }

}
