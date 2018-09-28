'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">ngx-dynamic-table documentation</a>
        </li>
        <li class="divider"></li>
        ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
</div>
` : '' }
        <li class="chapter">
            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
            <ul class="links">
                    <li class="link">
                        <a href="overview.html" data-type="chapter-link">
                            <span class="icon ion-ios-keypad"></span>Overview
                        </a>
                    </li>
                    <li class="link">
                        <a href="index.html" data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>README
                        </a>
                    </li>
                    <li class="link">
                            <a href="changelog.html"
                        data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>CHANGELOG
                        </a>
                    </li>
                    <li class="link">
                            <a href="contributing.html"
                        data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>CONTRIBUTING
                        </a>
                    </li>
                    <li class="link">
                            <a href="license.html"
                        data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>LICENSE
                        </a>
                    </li>
                    <li class="link">
                            <a href="todo.html"
                        data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>TODO
                        </a>
                    </li>
                    <li class="link">
                        <a href="dependencies.html"
                            data-type="chapter-link">
                            <span class="icon ion-ios-list"></span>Dependencies
                        </a>
                    </li>
            </ul>
        </li>
        <li class="chapter modules">
            <a data-type="chapter-link" href="modules.html">
                <div class="menu-toggler linked" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                    <span class="icon ion-ios-archive"></span>
                    <span class="link-name">Modules</span>
                    <span class="icon ion-ios-arrow-down"></span>
                </div>
            </a>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                    <li class="link">
                        <a href="modules/DynamicExpandableTableModule.html" data-type="entity-link">DynamicExpandableTableModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DynamicExpandableTableModule-adaee29999042a8b0ecc9f0837cd6dee"' : 'data-target="#xs-components-links-module-DynamicExpandableTableModule-adaee29999042a8b0ecc9f0837cd6dee"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DynamicExpandableTableModule-adaee29999042a8b0ecc9f0837cd6dee"' : 'id="xs-components-links-module-DynamicExpandableTableModule-adaee29999042a8b0ecc9f0837cd6dee"' }>
                                        <li class="link">
                                            <a href="components/DynamicExpandableTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DynamicExpandableTableComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ExpandableTableInstanceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ExpandableTableInstanceComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-DynamicExpandableTableModule-adaee29999042a8b0ecc9f0837cd6dee"' : 'data-target="#xs-injectables-links-module-DynamicExpandableTableModule-adaee29999042a8b0ecc9f0837cd6dee"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-DynamicExpandableTableModule-adaee29999042a8b0ecc9f0837cd6dee"' : 'id="xs-injectables-links-module-DynamicExpandableTableModule-adaee29999042a8b0ecc9f0837cd6dee"' }>
                                        <li class="link">
                                            <a href="injectables/DynamicExpandableTableDataProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>DynamicExpandableTableDataProvider</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DynamicTableModule.html" data-type="entity-link">DynamicTableModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DynamicTableModule-a747f7523d151d9434b0d0fa103c1258"' : 'data-target="#xs-components-links-module-DynamicTableModule-a747f7523d151d9434b0d0fa103c1258"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DynamicTableModule-a747f7523d151d9434b0d0fa103c1258"' : 'id="xs-components-links-module-DynamicTableModule-a747f7523d151d9434b0d0fa103c1258"' }>
                                        <li class="link">
                                            <a href="components/DynamicTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DynamicTableComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TableInstanceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableInstanceComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-DynamicTableModule-a747f7523d151d9434b0d0fa103c1258"' : 'data-target="#xs-directives-links-module-DynamicTableModule-a747f7523d151d9434b0d0fa103c1258"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-DynamicTableModule-a747f7523d151d9434b0d0fa103c1258"' : 'id="xs-directives-links-module-DynamicTableModule-a747f7523d151d9434b0d0fa103c1258"' }>
                                        <li class="link">
                                            <a href="directives/DynamicTableActionsContainerDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DynamicTableActionsContainerDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/DynamicTableColumnsContainerDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DynamicTableColumnsContainerDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/DynamicTableContainerDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DynamicTableContainerDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/DynamicTableContentSummaryContainerDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DynamicTableContentSummaryContainerDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/DynamicTableDescriptionContainerDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DynamicTableDescriptionContainerDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/DynamicTableIconContainerDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DynamicTableIconContainerDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/DynamicTableTitleContainerDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DynamicTableTitleContainerDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/PalTableAdditionalInfoContainerDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PalTableAdditionalInfoContainerDirective</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-DynamicTableModule-a747f7523d151d9434b0d0fa103c1258"' : 'data-target="#xs-injectables-links-module-DynamicTableModule-a747f7523d151d9434b0d0fa103c1258"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-DynamicTableModule-a747f7523d151d9434b0d0fa103c1258"' : 'id="xs-injectables-links-module-DynamicTableModule-a747f7523d151d9434b0d0fa103c1258"' }>
                                        <li class="link">
                                            <a href="injectables/DynamicTableDataProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>DynamicTableDataProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DynamicTableDynamicCellBuilder.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>DynamicTableDynamicCellBuilder</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"' }>
                <span class="icon ion-ios-paper"></span>
                <span>Classes</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                    <li class="link">
                        <a href="classes/AbstractDynamicBaseService.html" data-type="entity-link">AbstractDynamicBaseService</a>
                    </li>
                    <li class="link">
                        <a href="classes/AbstractDynamicExpandableTableDataProvider.html" data-type="entity-link">AbstractDynamicExpandableTableDataProvider</a>
                    </li>
                    <li class="link">
                        <a href="classes/AbstractDynamicTableDataProvider.html" data-type="entity-link">AbstractDynamicTableDataProvider</a>
                    </li>
                    <li class="link">
                        <a href="classes/AbstractWebWidgetComponent.html" data-type="entity-link">AbstractWebWidgetComponent</a>
                    </li>
                    <li class="link">
                        <a href="classes/DynamicExpandableTableColumnDefinitionConstants.html" data-type="entity-link">DynamicExpandableTableColumnDefinitionConstants</a>
                    </li>
                    <li class="link">
                        <a href="classes/DynamicExpandableTableUtils.html" data-type="entity-link">DynamicExpandableTableUtils</a>
                    </li>
                    <li class="link">
                        <a href="classes/DynamicTableColumnDefinitionConstants.html" data-type="entity-link">DynamicTableColumnDefinitionConstants</a>
                    </li>
                    <li class="link">
                        <a href="classes/DynamicTableUtils.html" data-type="entity-link">DynamicTableUtils</a>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                        ${ isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"' }>
                        <span class="icon ion-md-arrow-round-down"></span>
                        <span>Injectables</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                            <li class="link">
                                <a href="injectables/DynamicTableActionMessageService.html" data-type="entity-link">DynamicTableActionMessageService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/DynamicTableMouseEventMessageService.html" data-type="entity-link">DynamicTableMouseEventMessageService</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                ${ isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"' }>
                <span class="icon ion-md-information-circle-outline"></span>
                <span>Interfaces</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                    <li class="link">
                        <a href="interfaces/DynamicExpandableTableDataInterface.html" data-type="entity-link">DynamicExpandableTableDataInterface</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/DynamicExpandableTableExpandedItemColumnInterace.html" data-type="entity-link">DynamicExpandableTableExpandedItemColumnInterace</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/DynamicExpandableTableOptionInterface.html" data-type="entity-link">DynamicExpandableTableOptionInterface</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/DynamicTableColumnInterace.html" data-type="entity-link">DynamicTableColumnInterace</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/DynamicTableDataInterface.html" data-type="entity-link">DynamicTableDataInterface</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/DynamicTableEventDataInterface.html" data-type="entity-link">DynamicTableEventDataInterface</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/DynamicTableGroupExpressionInterface.html" data-type="entity-link">DynamicTableGroupExpressionInterface</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/DynamicTableGroupInterface.html" data-type="entity-link">DynamicTableGroupInterface</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/DynamicTableInterface.html" data-type="entity-link">DynamicTableInterface</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/DynamicTableOptionInterface.html" data-type="entity-link">DynamicTableOptionInterface</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/PalTableOptionInterface.html" data-type="entity-link">PalTableOptionInterface</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/UsingDynamicTableComponent.html" data-type="entity-link">UsingDynamicTableComponent</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
        </li>
    </ul>
</nav>`);
        this.innerHTML = tp.strings;
    }
});
