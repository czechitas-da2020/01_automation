describe('CVICENI 3a', () => {
  it('trying navigation', () => {
        browser.url('https://www.czechitas.cz/cs/')
        browser.saveScreenshot('screen-main-page.png')
        browser.url('https://www.czechitas.cz/en/portfolio')
        browser.saveScreenshot('screen-portfolio.png')
  });
});

