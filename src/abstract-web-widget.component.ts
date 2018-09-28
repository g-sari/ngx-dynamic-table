import { OnDestroy } from "@angular/core";


export abstract class AbstractWebWidgetComponent implements OnDestroy {

    ngOnDestroy(): void {
        console.log("Component destroyed properly!");
    }

}
