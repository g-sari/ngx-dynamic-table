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
