import { DynamicTableExpressionBuilder } from './dynamic-table-expression-builder';
import { DynamicTableGroupExpressionInterface } from '../interfaces/dynamic-table-group-expression.interface';


describe('DynamicTableExpressionBuilder', () => {

    const aspirin = { 'name': 'Aspirin', 'approval': 1, 'date-to': undefined };
    const dafalgan = { 'name': 'Dafalgan', 'approval': 1, 'date-to': null };
    const paracetamol = { 'name': 'Paracetamol', 'approval': 2 };
    const leponex = { 'name': 'Leponex', 'approval': 1, 'date-to': new Date('9999-12-31T00:00:00+01:00') };
    const viagra = { 'name': 'Viagra', 'approval': 0, 'date-to': new Date('2018-10-16T00:00:00+01:00') };
    const neoCitran = { 'name': 'Neo Citran', 'approval': 0, 'date-to': new Date() };
    const data = [aspirin, dafalgan, paracetamol, leponex, viagra, neoCitran];

    beforeEach(() => {});

    it('#buildGroupExpressions should build a valid expression: Get all approved drugs', () => {
        // SETUP
        // Expression: (item["approval"] == 1)
        const groupByApproved: DynamicTableGroupExpressionInterface = {
            group: {
                groupByField: 'approval',
                fieldType: 'Number',
                rules: [
                    {
                        'operator': '==',
                        'value': 1
                    }
                ]
            },
            operator: ''
        } as DynamicTableGroupExpressionInterface;

        // EXERCISE
        const expression = DynamicTableExpressionBuilder.buildGroupExpressions([groupByApproved]);
        // Filter data by using the expression function
        const items = data.filter((item: Object) => { return expression(item); });

        // VERIFY
        const existAspirin = items.indexOf(aspirin) > -1;
        const existDafalgan = items.indexOf(dafalgan) > -1;
        const existLeponex = items.indexOf(leponex) > -1;
        const existParacetamol = items.indexOf(paracetamol) > -1;
        expect(items.length).toBe(3);
        expect(existAspirin).toBeTruthy('The drug aspirin is approved!');
        expect(existDafalgan).toBeTruthy('The drug dafalgan is approved!');
        expect(existLeponex).toBeTruthy('The drug leponex is approved!');
        expect(existParacetamol).toBeFalsy('The drug paracetamol is rejected!');
    });


    it('#buildGroupExpressions should build a valid expression: Get all valid (not expired) drugs', () => {
        // SETUP
        const now = new Date();
        // Expression: '(item["date-to"] == null || item["date-to"].getTime() >= 1539727200000)'
        const groupByValidDrugs: DynamicTableGroupExpressionInterface = {
            group: {
                groupByField: 'date-to',
                fieldType: 'Date',
                rules: [
                    {
                        'operator': '==',
                        'value': null
                    },
                    {
                        'operator': '||',
                        'value': ''
                    },
                    {
                        'operator': '>=',
                        'value': now.setHours(0, 0, 0, 0)
                    }
                ]
            },
            operator: ''
        } as DynamicTableGroupExpressionInterface;

        // EXERCISE
        const expression = DynamicTableExpressionBuilder.buildGroupExpressions([groupByValidDrugs]);
        // Filter data by using the expression function
        const items = data.filter((item: Object) => { return expression(item); });

        // VERIFY
        const existAspirin = items.indexOf(aspirin) > -1;
        const existDafalgan = items.indexOf(dafalgan) > -1;
        const existParacetamol = items.indexOf(paracetamol) > -1;
        const existLeponex = items.indexOf(leponex) > -1;
        const existNeoCitran = items.indexOf(neoCitran) > -1;
        const existViagra = items.indexOf(viagra) > -1;
        expect(items.length).toBe(5);
        expect(existAspirin).toBeTruthy('aspirin is still valid, not expired!');
        expect(existDafalgan).toBeTruthy('dafalgan is still valid, not expired!');
        expect(existParacetamol).toBeTruthy('paracetamol is still valid, not expired!');
        expect(existLeponex).toBeTruthy('leponex is still valid, not expired!');
        expect(existNeoCitran).toBeTruthy('neo citran is still valid, not expired!');
        expect(existViagra).toBeFalsy('viagra is not valid, it is expired!');
    });


    it('#buildGroupExpressions should build a valid expression: Get all expired drugs', () => {
        // SETUP
        const now = new Date();
        // Expression: '(item["date-to"] != null && item["date-to"].getTime() < 1539727200000)'
        const groupByExpiredDrugs: DynamicTableGroupExpressionInterface = {
            group: {
                groupByField: 'date-to',
                fieldType: 'Date',
                rules: [
                    {
                        'operator': '!=',
                        'value': null
                    },
                    {
                        'operator': '&&',
                        'value': ''
                    },
                    {
                        'operator': '<',
                        'value': now.setHours(0, 0, 0, 0)
                    }
                ]
            },
            operator: ''
        } as DynamicTableGroupExpressionInterface;

        // EXERCISE
        const expression = DynamicTableExpressionBuilder.buildGroupExpressions([groupByExpiredDrugs]);
        // Filter data by using the expression function
        const items = data.filter((item: Object) => { return expression(item); });

        // VERIFY
        const existAspirin = items.indexOf(aspirin) > -1;
        const existDafalgan = items.indexOf(dafalgan) > -1;
        const existParacetamol = items.indexOf(paracetamol) > -1;
        const existLeponex = items.indexOf(leponex) > -1;
        const existNeoCitran = items.indexOf(neoCitran) > -1;
        const existViagra = items.indexOf(viagra) > -1;
        expect(items.length).toBe(1);
        expect(existAspirin).toBeFalsy('aspirin is not expired and is still valid!');
        expect(existDafalgan).toBeFalsy('dafalgan is not expired and is still valid!');
        expect(existParacetamol).toBeFalsy('paracetamol is not expired and is still valid!');
        expect(existLeponex).toBeFalsy('leponex is not expired and is still valid!');
        expect(existNeoCitran).toBeFalsy('neo citran is not expired and is still valid!');
        expect(existViagra).toBeTruthy('viagra is expired!');
    });

});