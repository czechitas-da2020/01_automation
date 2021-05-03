describe("Elementy - CVICENI 2", () => {
  it('find all buttons in div#selector-buttons and click on them and do screenshot', () => {
    browser.url('https://automation.cervik.repl.co/selectorsButtons.html')

    let buttons = $$('div#selector-buttons button') // array of buttons
    console.log('Pocet buttons v div#selector-buttons je:' + buttons.length)

    for (let i = 0; i < buttons.length; i = i + 1) {
      buttons[i].click()
    }
    browser.pause(500)
    browser.saveScreenshot('./elementy-cviceni2.png')
  })
})