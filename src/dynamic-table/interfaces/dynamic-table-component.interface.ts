import { Observable } from 'rxjs';

export interface UsingDynamicTableComponent<T> {

    handlePalTableActions(publisher: Observable<T>): void;

}