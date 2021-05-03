describe("Elementy - CVICENI 1b", ()=>{
  it('find all elements and do something :)', ()=>{
    // go to page
    browser.url('https://czechitas-app.herokuapp.com/prihlaseni')
    
    // we prefer IDs, inputs have id, so we are using them.
    $('#email').setValue('vojta@cerveny.com')
    $('#password').setValue('superSecretPassword')

    // I know, that it is in form and it submit values, so I will use it.
    $('form button[type="submit"]').click() 

    // link with text, for example
    $('a*=Zapomněli jste své heslo?').click() // it doesn't work due bug in application

    // button for registration
    // you can use this one as well: $('a[href="https://czechitas-app.herokuapp.com/registrace"]')
    $('*=Zaregistrujte se').click()
  })
})