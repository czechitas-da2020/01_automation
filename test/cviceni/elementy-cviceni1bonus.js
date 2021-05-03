describe("Elementy - CVICENI 1bonus", ()=>{
  //using TagName is just for testing purpose, you can use click or whatever you want to do with elements
  it('find all elements and do something :)', ()=>{
    // go to page
    browser.url('https://czechitas-app.herokuapp.com')
    
    //logo in top - left corner
    $('img.logo').getTagName() // or $('a.navbar-brand')
    
    //Login into app
    $('a.nav-item[href="https://czechitas-app.herokuapp.com/prihlaseni"]').getTagName() // or $('a.nav-item i.fa-user')


    // Card 
    $('.card').getTagName()

    // More info in Card
    $('*=Více informací').getTagName() //or $('.card .card-body a.btn')
    
    // social icons
    $$('div.footer__socials a.footer__icon')[0].getTagName()
  })
})