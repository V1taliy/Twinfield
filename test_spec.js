describe ("Twinfield link", function() {
    it ("hi", function() {
      browser.waitForAngularEnabled(false);
browser.get("https://www.google.com/");
element(by.name("q")).sendKeys("Twinfield");
element(by.name("btnK")).click();
expect(element(by.name))


browser.pause();

});
})

/*input.sendKeys("Twinfield");
input.sendKeys(protractor.Key.ENTER);
driver.findElement(by.name("q")).click();
driver.sendKeys("Twinfield"); 
element(by.model("q")).sendKeys("Twinfield");
element(by.xpath('//*[@id="q"]')).sendKeys('What is Protractor?');
var query = element(by.xpath('//*[@id="q"]'));
expect(query = 'What is Protractor?');
browser.pause();  

});
})
*/




/*
describe('Enter User Credentials', function() {
 it('This will insert an userName', function() {
 browser.get('http://google.com');

 element(by.xpath('//*[@id="lst-ib"]')).sendKeys('what is protractor');
  var query = element(by.xpath('//*[@id="lst-ib"]'));
 
     expect(query = 'what is protractor');

  var button = element(by.xpath('//*[@id="tsf"]/div[2]/div[3]/center/input[1]'));
  button.click();
   browser.pause();
     });
});
var addButton = element(by.css('[value="add"]'));
addButton.click().
*/