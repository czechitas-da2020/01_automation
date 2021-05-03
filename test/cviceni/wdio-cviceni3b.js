describe('CVICENI 3a', () => {
  it('trying navigation', () => {

        let date = new Date().valueOf();

        browser.url('https://www.czechitas.cz/cs/')
        browser.saveScreenshot(date + 'screen-main-page.png')
        browser.url('https://www.czechitas.cz/en/portfolio')
        browser.saveScreenshot(date + 'screen-portfolio.png')
  });
});

