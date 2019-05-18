import { RohanShoppingPage } from './app.po';

describe('rohan-shopping App', function() {
  let page: RohanShoppingPage;

  beforeEach(() => {
    page = new RohanShoppingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
