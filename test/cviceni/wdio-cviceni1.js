describe('CVICENI 1 BONUS', () => {
  it('trying max, min window nad some scrolling and filling input', () => {
      browser.url('https://www.czechitas.cz/cs/');

      browser.$('#footer').scrollIntoView()
      browser.$('.newsletter-email').setValue('muj@email.com')
      browser.maximizeWindow()
      browser.pause(5000)
      browser.minimizeWindow()
      browser.pause(1000)
  });
});