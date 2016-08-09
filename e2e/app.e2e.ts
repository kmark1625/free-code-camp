import { FreeCodeCampPage } from './app.po';

describe('free-code-camp App', function() {
  let page: FreeCodeCampPage;

  beforeEach(() => {
    page = new FreeCodeCampPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('free-code-camp works!');
  });
});
