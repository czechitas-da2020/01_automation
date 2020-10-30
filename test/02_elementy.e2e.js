
describe('Elementy', () => {
  xit('cviceni 1a', () => {
    browser.url('https://automation.cervik.repl.co/selectorsButtons.html')
    $('#button1').click() //ID 
    $('[name="clickingOnMe"]').click() //NAME
    $('.click-click-click').click() //CLASS
    $('button=This is THE button').click() //TEXT
    $('button*=Partial').click() // PARTIAL TEXT
    $('[data-qa="customAttribute-button"]').click() //CUSTOM
    $('p button').click() // obecne
    $('button=Button mimo').click() // obecne 

    browser.saveScreenshot('screeshot-elements-1a.png')
    browser.pause(3000)

  });

  xit('cviceni 1b', () => {
    browser.url('http://czechitas-shopizer.azurewebsites.net/shop/')
    $('#customerAccount') // MyAccount
    $('span*=Shopping cart') //Shopping cart 

    $('#searchField') // search input
    $('input[value="Search"]') //Search button

    $('*=Products') // Products

    $('#home-banner') // section with big image

    browser.pause(3000)


  });

  xit('cviceni 1 BONUS', () => {
    browser.url('http://czechitas-shopizer.azurewebsites.net/shop/')
    $('#featuredItemsContainer div:nth-child(1)') //First item 
    $('#featuredItemsContainer div:nth-child(1) .store-btn-addtocart') //First item button Add to cart


    $('#featuredItemsContainer div:nth-child(3)') //First item 
    $('#featuredItemsContainer div:nth-child(3) .store-btn-addtocart') //First item button Add to cart


    $('li.facebook') // facebook
    $('input[value="Search"]') //Search button

    // A nebo jakkoliv jinak, moznosti je vic.
    $('.usefull-link').$("*=Home") // Home
    $('.usefull-link').$("*=Register")

    browser.pause(3000)
  });

  xit('Cviceni 2', () => {
    browser.url('https://automation.cervik.repl.co/selectorsButtons.html')
    const buttons = $$('div#selector-buttons button')
    console.log('Pocet tlacitek: ' + buttons.length)

    // for(let i = 0; i < buttons.length; i = i+1) {
    //     buttons[i].click()
    // }

    buttons.forEach((button) => {
      button.click()
    })

    browser.saveScreenshot('screeshot-elements-2.png')
    browser.pause(3000)
  })

  xit('Cviceni 3', () => {
    browser.url('https://automation.cervik.repl.co/login.html')
    const userName = $('#login-username');
    userName.setValue('czzzzechitas')
    userName.clearValue()

    userName.setValue('czechitas')
    $('#login-password').setValue('D4Ostr4v42020')
    $('#login-submit').click()
    $('h1=LOGGED!').waitForDisplayed()
    console.log($('h1=LOGGED!').getText())
  })
  xit('Cviceni 3 BONUS', () => {
    browser.url('https://automation.cervik.repl.co/modal.html')
    $('button').click()
    $('.modal-body').waitForDisplayed() //funguje to i bez toho, protoze element uz je v DOMu
    const text = $('.modal-body').getText()

    if (text.indexOf("Škarpa")) {
      console.log('Heureka, skarpa nalezena')
    }
  })

  xit('Cviceni 5', () => {
    browser.url('https://automation.cervik.repl.co/selectorsButtons.html')
    $('//*[@id="button1"]').click() //ID 
    $('//*[@name="clickingOnMe"]').click() //NAME
    $('//*[contains(@class, "click-click-click")]').click() //CLASS
    $('//*[contains(text(),"This is THE button")]').click() //TEXT 
    $('//*[contains(text(),"Partial")]').click() // PARTIAL TEXT
    $('//*[@data-qa="customAttribute-button"]').click() //CUSTOM
    $('//p/button').click() // obecne
    $('//div[contains(@class,"container")]/button').click() // obecne 


    browser.saveScreenshot('screeshot-elements-1a.png')
    browser.pause(3000)
  });
});
