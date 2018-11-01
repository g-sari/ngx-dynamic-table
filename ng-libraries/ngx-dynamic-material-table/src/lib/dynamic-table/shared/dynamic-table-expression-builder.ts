/*******************************************************************
 * NGX-DYNAMIC-MATERIAL-TABLE                                      *
 * @description Create fancy and complex tables dynamically        *
 * @file dynamic-table-expression-builder.ts                       *
 * @author Gökhan Sari - <goekhan.sari@arpage.ch>                  *
 * @copyright Arpage AG, Zurich Switzerland, 2018                  *
 *******************************************************************/
import { DynamicTableGroupExpressionInterface } from '../interfaces/dynamic-table-group-expression.interface';
import { DynamicTableGroupInterface } from '../interfaces/dynamic-table-group.interface';

export class DynamicTableExpressionBuilder {

    /**
     * @description Builds the group expression as a string by the defined given expressions.
     *
     * @param groupExpression
     * @returns the build expression as a string
     */
    public static buildGroupExpression(groupExpression: DynamicTableGroupExpressionInterface): string {
        let queryString = '';
        const group: DynamicTableGroupInterface = groupExpression.group;
        const rules = group.rules;
        const fieldType: string = group.fieldType;
        queryString += '(';
        for (const rule of rules) {
            const operator: string = (<any>rule)['operator'];
            const value: string = (<any>rule)['value'];
            switch (operator) {
                case '&&':
                    queryString += ' && ';
                    break;
                case '||':
                    queryString += ' || ';
                    break;
                case '!=':
                    queryString += 'item["' + group.groupByField + '"]' + ' != ' + value;
                    break;
                case '<':
                    if (fieldType === 'Date') {
                        queryString += 'item["' + group.groupByField + '"].getTime()';
                    } else {
                        queryString += 'item["' + group.groupByField + '"]';
                    }
                    queryString += ' < ' + value;
                    break;
                case '<=':
                    queryString += 'item["' + group.groupByField + '"]';
                    if (fieldType === 'Date') {
                        queryString += '.getTime()';
                    }
                    queryString += ' <= ' + value;
                    break;
                case '>':
                    queryString += 'item["' + group.groupByField + '"]';
                    if (fieldType === 'Date') {
                        queryString += '.getTime()';
                    }
                    queryString += ' > ' + value;
                    break;
                case '>=':
                    queryString += 'item["' + group.groupByField + '"]';
                    if (fieldType === 'Date') {
                        queryString += '.getTime()';
                    }
                    queryString += ' >= ' + value;
                    break;
                case '==':
                    queryString += 'item["' + group.groupByField + '"]' + ' == ' + value;
                    break;
            }
        }
        queryString += ')';
        return queryString;
    }

    /**
     * @description Builds the group expression as a function by the defined given expressions.
     *
     * @param groupExpressions
     * @returns Function
     */
    public static buildGroupExpressions(groupExpressions: DynamicTableGroupExpressionInterface[]): Function {
        let queryString = 'return ';
        for (let i = 0; i < groupExpressions.length; i++) {
            const groupExpression = groupExpressions[i];
            queryString += this.buildGroupExpression(groupExpression);
            if (groupExpressions.length > 0 && ((i + 1) !== groupExpressions.length)) {
                queryString += ' ' + groupExpression.operator + ' '; // combine group expressions
            }
        }
        // The first argument is the variable name which is passed to the function
        return new Function('item', queryString);
    }

}
