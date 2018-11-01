/*******************************************************************
 * NGX-DYNAMIC-MATERIAL-TABLE                                      *
 * @description Create fancy and complex tables dynamically        *
 * @file abstract-dynamic-base.service.ts                          *
 * @author Gökhan Sari - <goekhan.sari@arpage.ch>                  *
 * @copyright Arpage AG, 2018                                      *
 *******************************************************************/
import { Compiler, ComponentRef, Injector, ViewContainerRef, Type } from '@angular/core';

/**
 * Abstract base class for all services that want to create components dynamically.
 */
export abstract class AbstractDynamicBaseService {

    protected compiler: Compiler;

    /**
     * @param injector
     */
    constructor(injector: Injector) {
        this.compiler = injector.get(Compiler);
    }

    /**
     * Creates an angular component dynamically by the given parameters.
     *
     * @param container
     * @param moduleToCreate
     * @param componentToCreate
     * @param properties
     * @returns Promise
     */
    protected createDynamicComponent(
        container: ViewContainerRef,
        moduleToCreate: Type<any>,
        componentToCreate: Type<any>,
        properties: any = {}
    ): Promise<ComponentRef<any>> {
        // Compile module and components async
        const compiledModule = this.compiler.compileModuleAndAllComponentsSync(moduleToCreate);
        return new Promise<ComponentRef<any>>((resolve, reject) => {
            if (compiledModule != null) {
                // Get the factory
                const factory = compiledModule.componentFactories.find((comp) => comp.componentType === componentToCreate);
                // Create the component
                const component = container.createComponent(factory);
                // Assign properties
                Object.assign(component.instance, properties);
                // If properties are changed at a later stage, the change detection
                // may need to be triggered manually:
                component.changeDetectorRef.detectChanges();
                // Return promise
                resolve(component);
            } else {
                reject(new Error('Something went wrond during the compilation of the dynamic module'));
            }
        });

    }


}
