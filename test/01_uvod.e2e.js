
describe('Web Czechitas', () => {
    it('se otevře v prohlížeci a počká 5sekund než se prohlížeč zavře', () => {
        // jdi na adresu https://www.czechitas.cz/cs
        browser.url('https://www.czechitas.cz/cs/');

        // pockej 5sekund nez provedes dalsi prikaz
        browser.pause(5000)

        // dalsi prikaz tady momentalne neni, takze po 5sekundach se prohlizec zavre
        // exekuce testu skončí a Ty můžeš vidět výsledky testu v terminálu.

        // zde pak můžeš přidat další příkazy
        // zkus například tyto dva příkazy odkomentovat a spustit npm test znovu - co se stane?
        // browser.maximizeWindow()
        // browser.pause(5000)
    });
});
