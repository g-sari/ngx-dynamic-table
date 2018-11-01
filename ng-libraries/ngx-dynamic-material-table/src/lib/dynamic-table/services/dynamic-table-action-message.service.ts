/*******************************************************************
 * NGX-DYNAMIC-MATERIAL-TABLE                                      *
 * @description Create fancy and complex tables dynamically        *
 * @file dynamic-table-action-message.service.ts                   *
 * @author Gökhan Sari - <goekhan.sari@arpage.ch>                  *
 * @copyright Arpage AG, Zurich Switzerland, 2018                  *
 *******************************************************************/
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DynamicTableActionMessageService<T> {

    private action: string;
    private item: T;
    private publisher: Observable<T>;

    public setAction(action: string): void {
        this.action = action;
    }

    public getAction(): string {
        return this.action;
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
