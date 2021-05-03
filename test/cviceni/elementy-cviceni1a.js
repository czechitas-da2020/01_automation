describe("Elementy - CVICENI 1a", ()=>{
  it('click on 3 buttons and create screenshots', ()=>{
    // go to page
    browser.url('https://automation.cervik.repl.co/selectorsButtons.html')
    
    //by id
    $('#button1').click() 
    //by name
    $('[name="clickingOnMe"]').click() 
    // by class
    // you can use this as well: "button.click-click-click"
    $('.click-click-click').click()  
    //by full text
    // you can use this as well: "=This is THE button" //without specification that it is an element button
    $("button=This is THE button").click()
    // Partial text
    // you can use this as well: "*=Partial" //without specification that it is an element button
    // you can use these as well: "*=Partial link", "*=link text", "*=tial li" etc.
    $("button*=Partial").click()
    // custom attribute
    // you can use this as well: "button[data-qa="customAttribute-button"]"
    $('[data-qa="customAttribute-button"]').click()

    browser.pause(500)
    browser.saveScreenshot('./elementy-cviceni1a.png')
  })
})