const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('github', () => {
        it('check to get GitHub value', () => {
            const githubValue = 'GitHub username'
            const engineer = new Engineer('rose', '01', 'test@gmail.com', githubValue);
            expect(engineer.github).toBe(githubValue)
        })
    })
    describe('getGitHub', () => {
        it('check getGitHub() to get github username', () => {
            const githubValue = 'GitHub username';
            const engineer = new Engineer('rose', '01', 'test@gmail.com', githubValue);
            expect(engineer.getGitHub()).toBe(githubValue);
        })
    })
    describe('getRole', () => {
        it('getRole() return Engineer', () => {
            const role = 'Engineer';
            const engineer = new Engineer('rose', '01', 'test@gmail.com', 'GitHub username');
            expect(engineer.getRole()).toBe(role)
        })
    })
})