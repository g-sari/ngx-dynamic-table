/*******************************************************************
 * @project Project: PalliaCare Mobile App                         *
 * @copyright Copyright (c) Arpage AG - 2017 - All rights reserved *
 * @address Address: Tobelweg 4, CH-8700 Küsnacht ZH               *
 * @web Web: www.arpage.ch                                         *
 * @file File: AbstractDynamicBaseService                          *
 * @author Gökhan Sari - <goekhan.sari@arpage.ch>                  *
 *******************************************************************/
import { Compiler, ComponentRef, Injector, ViewContainerRef, Type } from "@angular/core";

/**
 * Base class for all services that want to create components dynamically.
 */
export abstract class AbstractDynamicBaseService {

    protected compiler: Compiler;

    constructor(injector: Injector) {
        this.compiler = injector.get(Compiler);
    }

    /**
     * Creates a dynamic component on the fly by the given parameters.
     *
     * @param {ViewContainerRef} container
     * @param moduleToCreate
     * @param componentToCreate
     * @param properties
     * @returns {ComponentRef<any>}
     */
    protected createDynamicComponent(
        container: ViewContainerRef,
        moduleToCreate: Type<any>,
        componentToCreate: Type<any>,
        properties: any = {}
    ): ComponentRef<any> {
        // Compile module and components
        const mod = this.compiler.compileModuleAndAllComponentsSync(moduleToCreate);
        const factory = mod.componentFactories.find((comp) =>
            comp.componentType === componentToCreate
        );
        // Create component
        const component = container.createComponent(factory);
        Object.assign(component.instance, properties);
        // If properties are changed at a later stage, the change detection
        // may need to be triggered manually:
        component.changeDetectorRef.detectChanges();
        return component;
    }


}