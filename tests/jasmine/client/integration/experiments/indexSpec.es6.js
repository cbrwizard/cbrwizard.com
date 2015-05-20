describe('experimentsIndex', function () {

  beforeEach(function (done) {
    Router.go('/experiments');
    Tracker.afterFlush(done);
  });

  beforeEach(window.waitForRouter);

  describe('template', function () {
    it('shows experiments', function () {
      expect(document.querySelectorAll('.experiment-item').length).toBeGreaterThan(0);
    });

    it('shows a heading', function () {
      expect(document.querySelector('.dynamic-container__heading').innerText).toEqual(TAPi18n.__('experiments.index.greeting'));
    });
  });
});