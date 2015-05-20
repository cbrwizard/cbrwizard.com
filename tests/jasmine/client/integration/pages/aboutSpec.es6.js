describe('pagesAbout', function () {

  beforeEach(function (done) {
    Router.go('/about');
    Tracker.afterFlush(done);
  });

  beforeEach(window.waitForRouter);

  describe('template', function () {
    it('shows a heading', function () {
      expect(document.querySelector('.dynamic-container__heading').innerText).toEqual(TAPi18n.__('pages.about.greeting'));
    });

    it('shows a text', function () {
      expect(document.querySelector('.dynamic-container__text').innerText).toEqual(TAPi18n.__('pages.about.what'));
    });
  });
});