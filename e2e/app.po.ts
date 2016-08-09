export class FreeCodeCampPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('free-code-camp-app h1')).getText();
  }
}
