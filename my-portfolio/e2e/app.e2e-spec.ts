import { MyPortfolioPage } from './app.po';

describe('my-portfolio App', function() {
  let page: MyPortfolioPage;

  beforeEach(() => {
    page = new MyPortfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
