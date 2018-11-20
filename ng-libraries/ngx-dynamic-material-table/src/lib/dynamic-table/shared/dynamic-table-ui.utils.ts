/*******************************************************************
 * NGX-DYNAMIC-MATERIAL-TABLE                                      *
 * @description Create fancy and complex tables dynamically        *
 * @file dynamic-table-ui.utils.ts                                 *
 * @author Gökhan Sari - <goekhan.sari@arpage.ch>                  *
 * @copyright Arpage AG, Zurich Switzerland, 2018                  *
 *******************************************************************/

/**
 * @description Contains useful functions for easily creation of dynamic table conform UI components.
 */
export class DynamicTableUIUtils {

    /**
     * @description Creates a dynamic table conform action.
     *
     * @param action
     * @param item
     * @returns string
     */
    public static createHTMLAction(action: string, item: object): string {
        return 'publishAction(\'' + action + '\', item)';
    }

    /**
     * @description Creates an angular and dynamic table conform action.
     *
     * @param action
     * @param item
     * @returns string
     */
    public static createAngularAction(action: string, item: object): string {
        return '(click)="' + this.createHTMLAction(action, item) + '"';
    }

    /**
     * @description Creates a dynamic table conform mouse over event.
     *
     * @param  mouseOverEvent
     * @param  item
     * @returns string
     */
    public static createMouseOverEvent(mouseOverEvent: string, item: object): string {
        return 'onMouseOver(\'' + mouseOverEvent + '\', item)';
    }

    /**
     * @description Creates an angular and dynamic table conform mouse over event.
     *
     * @param  mouseOverEvent
     * @param  item
     * @returns string
     */
    public static createAngularMouseOverEvent(mouseOverEvent: string, item: object): string {
        return '(mouseover)="' + this.createMouseOverEvent(mouseOverEvent, item) + '"';
    }

    /**
     * @description Creates a dynamic table conform mouse out event.
     *
     * @param mouseOutEvent
     * @param item
     * @returns string
     */
    public static createMouseOutEvent(mouseOutEvent: string, item: object): string {
        return 'onMouseOut(\'' + mouseOutEvent + '\', item)';
    }

    /**
     * @description Creates an angular and dynamic table conform mouse out event.
     *
     * @param mouseOutEvent
     * @param item
     * @returns string
     */
    public static createAngularMouseOutEvent(mouseOutEvent: string, item: object): string {
        return '(mouseout)="' + this.createMouseOutEvent(mouseOutEvent, item) + '"';
    }

    /**
     * @description Creates a dynamic table conform mini fab button.
     *
     * @param matColor
     * @param value
     * @param backgroundColor
     * @returns string
     */
    public static createMiniFabButton(matColor: string, value: string, backgroundColor: string = null): string {
        let miniFabButton: string;
        miniFabButton = '<button mat-mini-fab color="' + matColor + '"';
        miniFabButton += (backgroundColor != null) ? ' style="background-color:' + backgroundColor + ';"' : '';
        miniFabButton += '>' + value + '</button> ';
        return miniFabButton;
    }

    /**
     * Conserve aspect ratio of the original region. Useful when shrinking/enlarging
     * images to fit into a certain area.
     */
    public static calculateAspectRatioFit(srcWidth: number, srcHeight: number, maxWidth: number, maxHeight: number): Object {
        const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
        return { width: srcWidth * ratio, height: srcHeight * ratio };
    }

}
