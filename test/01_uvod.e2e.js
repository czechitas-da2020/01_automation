
describe('Web Czechitas', () => {
    it('se otevře v prohlížeci a počká 5sekund než se prohlížeč zavře', () => {
        // fra
        browser.url('https://www.czechitas.cz/cs/');
        browser.pause(5000)
    });
});
