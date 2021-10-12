const Employee = require('../lib/Employee');
describe('Employee', () => {
    describe('constructor parameter test', () => {
        it('build a constructor object successful', () => {
            const employee = new Employee();
            expect(typeof employee).toBe('object');
            //tobe ===; to equal ==
        })
        it('check the name in constructor', () => {
            const name = 'rose';
            const employee = new Employee(name);
            expect(employee.name).toBe(name);
        })
        it('check the id in constructor', () => {
            const id = '01';
            const name = 'rose';
            const employee = new Employee(name, id);
            expect(employee.id).toBe(id);
        })
        it('check the email in constructor', () => {
            const id = '01';
            const name = 'rose';
            const email = 'test@gmail.com'
            const employee = new Employee(name, id, email);
            expect(employee.email).toBe(email);
        })
    })
    describe('getName', () => {
        it('test method getName()', () => {
            const name = 'rose';
            const employee = new Employee(name);
            expect(employee.getName()).toBe(name)
        })
    })
    describe('getId', () => {
        it('test method getId()', () => {
            const id = '01';
            const name = 'rose';
            const employee = new Employee(name, id);
            expect(employee.getId()).toBe(id);
        })
    })
    describe('getEmail', () => {
        it('test method getEmail()', () => {
            const id = '01';
            const name = 'rose';
            const email = 'test@gmail.com'
            const employee = new Employee(name, id, email);
            expect(employee.getEmail()).toBe(email);
        })
    })
    describe('getRole', () => {
        it('test method getRole() to return Employee', () => {
            const role = 'Employee';
            const employee = new Employee('rose', '01', 'test@gmail.com');
            expect(employee.getRole()).toBe(role)
        })
    })
})