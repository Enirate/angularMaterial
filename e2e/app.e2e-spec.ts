import { MaterialStarterPage } from './app.po';

describe('material-starter App', function() {
  let page: MaterialStarterPage;

  beforeEach(() => {
    page = new MaterialStarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
