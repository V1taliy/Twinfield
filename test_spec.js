describe ("Enter word Twinfield to Google search", function() {
    it ("it should find first link with URL: https://www.twinfield.co.uk/", function() {
browser.waitForAngularEnabled(false);
browser.get("https://www.google.com/");
element(by.name("q")).sendKeys("Twinfield");
element(by.name("btnK")).click();
expect(element(by.xpath('/html/body/div[7]/div[3]/div[10]/div[1]/div[2]/div/div[2]/div[2]/div/div/div/div[1]/div/div[1]/div/div/div[1]/a/div/cite')).getText()).toEqual("https://www.twinfield.co.uk/");
});
   
it('should follow each available link which contain "Twinfield" ', function() {
  var arr = [];
  arr.push(element.all(by.partialLinkText('Twinfield')));
    
  for (var link in arr) {
  arr[link].click();
  browser.navigate().back();
  }
});
})
