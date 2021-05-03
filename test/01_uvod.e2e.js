
// describe('Web Czechitas', () => {
//     it('se otevře v prohlížeci a počká 5sekund než se prohlížeč zavře', () => {
//         // Jdi na adresu https://www.czechitas.cz/cs
//         browser.url('https://www.czechitas.cz/cs/');

//         // Pockej 5sekund nez provedes dalsi prikaz
//         browser.pause(3000)
//         let title = browser.getTitle()
//         console.log("TITLE STRANKY JE " + title)
        
//     });
// });


// describe('CVICENI 1A', () => {
//     it('se otevře v prohlížeci a počká 5sekund než se prohlížeč zavře', () => {
//         // Jdi na adresu https://www.czechitas.cz/cs

//         browser.url('https://automation.cervik.repl.co/selectorsButtons.html');

//         // Pockej 5sekund nez provedes dalsi prikaz
//         browser.pause(1000)
//         browser.$('#button1').click()
//         browser.pause(1000)
//         browser.$('.click-click-click').click()
//         browser.pause(1000)
//         browser.$('[data-qa="customAttribute-button"]').click()
//         browser.pause(5000)
//         browser.saveScreenshot('./buttons.png')
//     });
// });


describe('CVICENI 2', () => {
    it('klikni na vsechny buttny v divu a udelej screenshot', () => {
        browser.url('https://automation.cervik.repl.co/selectorsButtons.html');
        let poleInputu = browser.$$('div#selector-buttons button')
        for(let i = 0; i < poleInputu.length; i = i + 1){
            poleInputu[i].click()
            browser.pause(500)
        }
        browser.saveScreenshot('./allButtonsClicked.png')
        expect().toHave
    });
});










// describe('CVICENI 3', () => {
//     it('se otevře v prohlížeci a počká 5sekund než se prohlížeč zavře', () => {
//         // Jdi na adresu https://www.czechitas.cz/cs

//         browser.url('https://automation.cervik.repl.co/login.html');
//         $('#login-username').setValue('czechitas')
//         $('#login-password').setValue('D4Ostr4v42020')

//         $('#login-submit').click()

//         $('h1=LOGGED!')
//         browser.saveScreenshot('./allButtonsClicked.png')
        
//     });
// });