describe('linksIndex', function () {

  beforeEach(function (done) {
    Router.go('/links');
    Tracker.afterFlush(done);
  });

  beforeEach(window.waitForRouter);

  describe('template', function () {
    it('shows links', function () {
      expect(document.querySelectorAll('.links__item').length).toBeGreaterThan(0);
    });

    it('shows a heading', function () {
      expect(document.querySelector('.dynamic-container__heading').innerText).toEqual(TAPi18n.__('links.index.greeting'));
    });
  });
});