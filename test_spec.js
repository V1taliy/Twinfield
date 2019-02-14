describe ("Enter word Twinfield to Google search", function() {
    it ("it should find first link", function() {
browser.waitForAngularEnabled(false);
browser.get("https://www.google.com/");
element(by.name("q")).sendKeys("Twinfield");
element(by.name("btnK")).click();
expect(element(by.xpath('/html/body/div[7]/div[3]/div[10]/div[1]/div[2]/div/div[2]/div[2]/div/div/div/div[1]/div/div[1]/div/div/div[1]/a/div/cite')).getText()).toEqual("Twinfield");
browser.pause();

});
    it('should follow each available link', function() {

 let allLink = element.all(by.css(".LC20lb"));
 expect(allLink.get(0).getText()).toEqual('Twinfield');
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