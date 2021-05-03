describe("Elementy - CVICENI 3bonus", () => {
  it('check if Skarpa is in DOM', () => {
    browser.url('https://automation.cervik.repl.co/modal.html')

    browser.url('https://automation.cervik.repl.co/modal.html')
    $('button').click()
    $('.modal-body').waitForDisplayed() //funguje to i bez toho, protoze element uz je v DOMu
    const text = $('.modal-body').getText()

    if (text.indexOf("Škarpa")) {
      console.log('Heureka, skarpa nalezena')
    }
  })
})