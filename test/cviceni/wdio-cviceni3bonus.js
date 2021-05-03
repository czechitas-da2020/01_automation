describe('CVICENI 3bonus', () => {
  it('with magic', () => {

        let datum = new Date();
        // check documentation for Date()
        let format = `${datum.getFullYear()}-${datum.getMonth()+1}-${datum.getDate()}_${datum.getHours()}-${datum.getMinutes()}-${datum.getSeconds()}`
        browser.url('https://www.czechitas.cz/cs/')
        browser.saveScreenshot(format + '-screen-main-page.png')
        browser.url('/portfolio')
        browser.saveScreenshot(format + '-screen-portfolio.png')
  });
});

