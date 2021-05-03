describe("Elementy - CVICENI 3", () => {
  it('login page and operations on that page', () => {
    browser.url('https://automation.cervik.repl.co/login.html')

    let usernameInput = $('#login-username')
    let passwordInput = $('#login-password')
    let submitButton = $('#login-submit')

    usernameInput.setValue('czzzzechitas')
    browser.pause(500)
    usernameInput.clearValue()

    usernameInput.setValue('czechitas')
    passwordInput.setValue('D4Ostr4v42020')
    submitButton.click()
    
    let header = $('h1*=LOGGED')
    console.log("Full text of header is:" + header.getText())
  })
})