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
