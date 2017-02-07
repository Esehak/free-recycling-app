import { SpaClientPage } from './app.po';

describe('spa-client App', function() {
  let page: SpaClientPage;

  beforeEach(() => {
    page = new SpaClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
