import { TestDirectivePage } from './app.po';

describe('test-directive App', function() {
  let page: TestDirectivePage;

  beforeEach(() => {
    page = new TestDirectivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
