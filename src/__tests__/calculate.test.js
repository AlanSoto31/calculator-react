import '@testing-library/jest-dom/extend-expect'
import calculate from '../logic/calculate';

describe("Calculate function", () => {
    const values1 = {
        total: '5',
        next: null,
        operation: null,
    }

    const values2 = {
        total: '5',
        next: '20',
        operation: '-',
    }

    const values3 = {
        total: '5.',
        next: null,
        operation: null,
    }

    test("Converts to negative", () => {
        const buttonName = '+/-'
        expect(calculate(values1, buttonName)).toEqual({"next": null, "operation": null, "total": "-5"});
    });

    test("Sets all values to null", () => {
        const buttonName = 'AC'
        expect(calculate(values1, buttonName)).toEqual({"next": null, "operation": null, "total": null});
    });


    test("Calculates the total percentage value", () => {
        const buttonName = '%'
        expect(calculate(values1, buttonName)).toEqual({"total": '0.05', "next": null, "operation": null});
    });

    test("Calculates the next percentage value", () => {
        const buttonName = '%'
        expect(calculate(values2, buttonName)).toEqual({"total": '5', "next": '0.2', "operation": '-'});
    });

    test("Avoids dot duplication", () => {
        const buttonName = '.';
        expect(calculate(values3, buttonName)).toEqual({"total": '5.', "next": null, "operation": null});
    })

});

describe("Calculate function performs basic operations", () => {
    const values1 = {
        total: '5',
        next: '20',
        operation: '+',
    }
    const values2 = {
        total: '5',
        next: '20',
        operation: '-',
    }
    const values3 = {
        total: '5',
        next: '20',
        operation: 'x',
    }
    const values4 = {
        total: '5',
        next: '20',
        operation: '÷',
    }

    test("+", () => {
        const buttonName = '='
        expect(calculate(values1, buttonName)).toEqual({"total": '25', "next": null, "operation": null});
    });
    test("-", () => {
        const buttonName = '='
        expect(calculate(values2, buttonName)).toEqual({"total": '-15', "next": null, "operation": null});
    });
    test("x", () => {
        const buttonName = '='
        expect(calculate(values3, buttonName)).toEqual({"total": '100', "next": null, "operation": null});
    });
    test("÷", () => {
        const buttonName = '='
        expect(calculate(values4, buttonName)).toEqual({"total": '0.25', "next": null, "operation": null});
    });
});

