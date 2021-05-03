describe('CVICENI 2 navigation', () => {
  it('trying navigation', () => {
    //CVICENI 2 navigation
    const pauseMs = 1000 // pro zjednoduseni zmeny cekani - rychleji, pomaleji
    browser.url('https://www.czechitas.cz/cs/');

    browser.url('https://seznam.cz')
    browser.pause(pauseMs)
    browser.url('')
    browser.pause(pauseMs)
    browser.url('/portfolio')
    browser.back()
    browser.pause(pauseMs)
    browser.forward()
    browser.pause(pauseMs)
    browser.refresh()
    browser.pause(pauseMs)
  });
});

describe('CVICENI 2 additional', () => {
  it('get page title, current url and  page source', () => {
    browser.url('https://www.czechitas.cz/cs/');
    console.log(browser.getUrl())
    console.log(browser.getTitle())
    console.log(browser.getPageSource().length);
  })
})


describe('CVICENI 2 bonus', () => {
  it('get page title, current url and  page source with function', () => {
        let showTitleAndUrl = () => {
            console.log(browser.getUrl())
            console.log(browser.getTitle())
        }

        browser.url('https://www.czechitas.cz/cs/')
        showTitleAndUrl()
        browser.url('/portfolio')
        showTitleAndUrl()
  })
})

