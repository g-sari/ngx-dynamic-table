/*******************************************************************
 * NGX-DYNAMIC-MATERIAL-TABLE                                      *
 * @description Create fancy and complex tables dynamically        *
 * @file abstract-web-library.component.ts                         *
 * @author Gökhan Sari - <goekhan.sari@arpage.ch>                  *
 * @copyright Arpage AG, 2018                                      *
 *******************************************************************/
import { OnDestroy, OnInit, NgZone, ChangeDetectorRef, Injector, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Abstract base library component for all other library components.
 */
export abstract class AbstractWebLibraryComponent implements OnInit, OnDestroy, AfterViewInit {

    // Variables
    protected zone: NgZone;
    protected changeDetectorRef: ChangeDetectorRef;
    protected sanitizer: DomSanitizer;

    /**
     * @param injector
     */
    constructor(injector: Injector) {
        this.zone = injector.get(NgZone);
        this.changeDetectorRef = injector.get(ChangeDetectorRef);
        this.sanitizer = injector.get(DomSanitizer);
    }

    /**
     * A lifecycle hook that is called after Angular has initialized all data-bound properties.
     * Handles any additional initialization tasks.
     *
     * @returns void
     */
    ngOnInit(): void { }

    /**
     * A lifecycle hook that is called after Angular has fully initialized a component's view.
     * Handles any additional initialization tasks.
     *
     * @returns void
     */
    ngAfterViewInit(): void {
        console.log('AbstractWebLibraryComponent:ngAfterViewInit() called properly!');
    }

    /**
     * A lifecycle hook that is called when the component is destroyed.
     * Used for any custom cleanup that needs to occur when the instance is destroyed.
     *
     * @returns void
     */
    ngOnDestroy(): void {
        console.log('Component destroyed properly!');
    }

}
