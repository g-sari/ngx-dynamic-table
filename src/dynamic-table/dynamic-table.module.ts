import { NgModule, NO_ERRORS_SCHEMA, ModuleWithProviders, } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSortModule, MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatCardModule,
    MatToolbarModule,
    MatSlideToggleModule,
} from '@angular/material';
import { DynamicTableDataProvider } from './shared/dynamic-table-data-provider';
import { DynamicTableActionsContainerDirective } from './directives/dynamic-table-actions-container.directive';
import { DynamicTableIconContainerDirective } from './directives/dynamic-table-icon-container.directive';
import { DynamicTableContentSummaryContainerDirective } from './directives/dynamic-table-content-summary-container.directive';
import { DynamicTableActionMessageService } from './services/dynamic-table-action-message.service';
import { PalTableAdditionalInfoContainerDirective } from './directives/dynamic-table-additional-info-container.directive';
import { DynamicTableDescriptionContainerDirective } from './directives/dynamic-table-description-container.directive';
import { DynamicTableColumnsContainerDirective } from './directives/dynamic-table-columns.directive';
import { DynamicTableContainerDirective } from './directives/dynamic-table.directive';
import { DynamicTableTitleContainerDirective } from './directives/dynamic-table-title-container.directive';
import { DynamicTableDynamicCellBuilder } from './shared/dynamic-table-dynamic-cell-builder';
import { TableInstanceComponent } from './table/table-instance.component';
import { DynamicTableComponent } from './dynamic-table.component';
import { DynamicTableMouseEventMessageService } from './services/dynamic-table-mouse-event-message.service';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatToolbarModule,
        MatSlideToggleModule
    ],
    schemas: [NO_ERRORS_SCHEMA],
    declarations: [
        TableInstanceComponent,
        DynamicTableComponent,
        DynamicTableColumnsContainerDirective,
        DynamicTableIconContainerDirective,
        DynamicTableContainerDirective,
        DynamicTableActionsContainerDirective,
        DynamicTableContentSummaryContainerDirective,
        PalTableAdditionalInfoContainerDirective,
        DynamicTableDescriptionContainerDirective,
        DynamicTableTitleContainerDirective
    ],
    exports: [
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatToolbarModule,
        MatSlideToggleModule,
        TableInstanceComponent,
        DynamicTableComponent,
        DynamicTableContainerDirective,
        DynamicTableIconContainerDirective,
        DynamicTableActionsContainerDirective,
        DynamicTableContentSummaryContainerDirective,
        PalTableAdditionalInfoContainerDirective,
        DynamicTableDescriptionContainerDirective,
        DynamicTableTitleContainerDirective,
    ],
    entryComponents: [],
    providers: [
        DynamicTableDataProvider,
        DynamicTableDynamicCellBuilder,
    ],

})
export class DynamicTableModule {

    /**
     * Singleton services
     */
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: DynamicTableModule,
            providers: [
                DynamicTableActionMessageService,
                DynamicTableMouseEventMessageService
            ]
        };
    }
}
