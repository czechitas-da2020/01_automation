describe("Elementy - CVICENI 4", () => {
  it('xpath', () => {
    browser.url('https://automation.cervik.repl.co/selectorsButtons.html')
    
    $('//*[@id="button1"]').click() //ID 
    $('//*[@name="clickingOnMe"]').click() //NAME
    $('//*[contains(@class, "click-click-click")]').click() //CLASS
    $('//*[contains(text(),"This is THE button")]').click() //TEXT 
    $('//*[contains(text(),"Partial")]').click() // PARTIAL TEXT
    $('//*[@data-qa="customAttribute-button"]').click() //CUSTOM
    $('//p/button').click() // obecne
    $('//div[contains(@class,"container")]/button').click() // obecne 

    browser.saveScreenshot('./elementy-cviceni4.png')
  })
})