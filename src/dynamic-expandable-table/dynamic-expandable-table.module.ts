import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicExpandableTableComponent } from './dynamic-expandable-table.component';
import { ExpandableTableInstanceComponent } from './expandable-table/expandable-table-instance.component';
import { DynamicExpandableTableDataProvider } from './shared/dynamic-expandable-data.provider';
import { DynamicTableModule } from '../dynamic-table/dynamic-table.module';

@NgModule(
    {
        imports: [
            CommonModule,
            DynamicTableModule,
            DynamicTableModule.forRoot()
        ],
        exports: [
            ExpandableTableInstanceComponent,
            DynamicExpandableTableComponent
        ],
        declarations: [
            ExpandableTableInstanceComponent,
            DynamicExpandableTableComponent
        ],
        providers: [
            DynamicExpandableTableDataProvider
        ]
    }
)
export class DynamicExpandableTableModule {

    static forRoot(): ModuleWithProviders {
        //const palTableModuleWithProviders: ModuleWithProviders = DynamicTableModule.forRoot();
        //.concat(palTableModuleWithProviders.providers)
        return {
            ngModule: DynamicExpandableTableModule,
            providers: [

            ]
        };
    }
}
