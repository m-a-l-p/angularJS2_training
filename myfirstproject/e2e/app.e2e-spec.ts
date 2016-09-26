import { MyfirstprojectPage } from './app.po';

describe('myfirstproject App', function() {
  let page: MyfirstprojectPage;

  beforeEach(() => {
    page = new MyfirstprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
