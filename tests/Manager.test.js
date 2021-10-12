const Manager = require('../lib/Manager');

test('check officeNumber in constructor object', () => {
    const officeValue = 202;
    const manager = new Manager('rose', '01', 'test@gmail.com', officeValue);
    expect(manager.officeNumber).toBe(officeValue);
})
test('check getOfficeNumber() to get office value', () => {
    const officeValue = 202;
    const manager = new Manager('rose', '01', 'test@gmail.com', officeValue);
    expect(manager.getOfficeNumber()).toBe(officeValue);
})
test('check getRole() to return Manager', () => {
    const role = 'Manager';
    const manager = new Manager('rose', '01', 'test@gmail.com', 202);
    expect(manager.getRole()).toBe(role);
})