describe("Web Czechitas", () => {
    it("se otevře v prohlížeci a počká 5sekund než se prohlížeč zavře", () => {
      // jdi na adresu https://www.czechitas.cz/cs
      browser.url("https://www.czechitas.cz/cs/");
      browser.pause(2000);
      //zmena velikosti okna via WindowRect, WindowSize po otevren height: 806, width: 1051, x: 9, y: 9 }
      let aktualni_position_size = browser.getWindowRect();
      console.log(" x: "+ aktualni_position_size.x + " y: " + aktualni_position_size.y + " w: " + aktualni_position_size.width + " h: " + aktualni_position_size.height);
      aktualni_position_size.x =100;
      aktualni_position_size.y =100;
      aktualni_position_size.height =300;
      aktualni_position_size.width =300;
      browser.setWindowRect(aktualni_position_size.x, aktualni_position_size.y, aktualni_position_size.width, aktualni_position_size.height );
      console.log(" x_s: " + aktualni_position_size.x + " y_s: " + aktualni_position_size.y + " w_s: " + aktualni_position_size.width + " h_s: " + aktualni_position_size.height);
      browser.pause(2000);
      let aktualni_position_size_n = browser.getWindowRect();
       browser.minimizeWindow();
       console.log(" x_n: " + aktualni_position_size_n.x + " y_n: " + aktualni_position_size_n.y + " w_n: " + aktualni_position_size_n.width + " h_n: " + aktualni_position_size_n.height);
      browser.pause(2000);
      browser.maximizeWindow();
      let aktualni_position_size_m = browser.getWindowRect();
      console.log(" x_m: " + aktualni_position_size_m.x + " y_m: " + aktualni_position_size_m.y + " w_m: " + aktualni_position_size_m.width + " h_m: " + aktualni_position_size_m.height);
      browser.pause(2000);
      browser.fullscreenWindow();
      let aktualni_position_size_f = browser.getWindowRect();
      console.log(" x_f:  "+ aktualni_position_size_f.x + " y_f: " + aktualni_position_size_f.y + " w_f: " + aktualni_position_size_f.width + " h_f: " + aktualni_position_size_f.height);
      browser.pause(2000);
      //browser.closeWindow();
      //browser.navigateTo(https://docs.google.com/forms/d/e/1FAIpQLSdgS9RjWnyfVxjdN74VI3SsXLqtgBAyODflqUE7Sl3xRoAq1A/viewform);????
      //screenshoty-podle me v tom neni rozdil
      let dnes = new Date();
      console.log("vypis5:"+ new Date().toLocaleDateString());
       browser.saveScreenshot("./" + new Date().valueOf() + "_screenshot1.png");
       browser.saveScreenshot("./" + new Date().toLocaleDateString() + "_screenshot2.png");
       browser.saveScreenshot("./" + dnes.valueOf() + "_screenshot3.png");
       browser.saveScreenshot("./" + dnes.toLocaleDateString() + "_screenshot4.png");
      // pohyb po okne
      let mujFooterElement = browser.$("#footer");
      mujFooterElement.scrollIntoView();
      //browser.$("#footer").scrollIntoView();
      browser.pause(5000);
      browser.$(".newsletter-email").setValue("muj@email.com");
      browser.pause(5000);
      let mujHeaderElement = browser.$("#header");
      mujHeaderElement.scrollIntoView();
      //browser.$("#header").scrollIntoView();
      browser.pause(5000);
      browser.$(".newsletter-email").scrollIntoView();
      //browser.pause(5000);
      //navigace 
      browser.newWindow('https://webdriver.io')
      browser.pause(5000);
      browser.switchWindow('https://www.czechitas.cz/cs/kdo-jsme')
      browser.pause(5000);
      browser.url("https://www.czechitas.cz/cs/");
      browser.pause(2000);
      browser.url("/co-delame");
      browser.pause(5000);
      browser.url("/kdo-jsme");
      browser.pause(5000);
      browser.back();
      browser.pause(5000);
      browser.forward();
      browser.pause(5000);
      browser.url("/blog");
      browser.pause(5000);
      browser.refresh();
      //via url
      let aktualni_url = browser.getUrl();
      console.log("vypis3:"+ aktualni_url);
      let aktualni_title = browser.getTitle();
      //console.log("vypis4:"+ aktualni_title.length);
      console.log("vypis4:"+ aktualni_title);
      let aktualni_delka_HTML = browser.getPageSource();
      console.log("vypis5:"+ aktualni_delka_HTML.length);
    });
  });