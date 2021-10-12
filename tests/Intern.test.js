const Intern = require('../lib/Intern');

test('check school constructor object', () => {
    const schoolValue = 'school name';
    const intern = new Intern('rose', '01', 'test@gmail.com', schoolValue);
    expect(intern.school).toBe(schoolValue);
    //check getSchool() if it get school name
    expect(intern.getSchool()).toBe(schoolValue);
});
test('check getRole() to return Intern', () => {
    const role = 'Intern';
    const intern = new Intern('rose', '01', 'test@gmail.com', 'school name');
    expect(intern.getRole()).toBe(role);
})
// test('check getSchool() if it get school name', () => {
//     const schoolValue = 'school name';
//     const intern = new Intern('rose', '01', 'test@gmail.com', schoolValue);
//     expect(intern.getSchool()).toBe(schoolValue);
// });
