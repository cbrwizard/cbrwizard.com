sitemaps.add('/sitemap.xml', function () {
  const lastExperimentCreatedAt = cbrw.Collections.Experiments.find({}, {sort: {createdAt: -1}}).fetch()[0];
  return [
    {page: '/', priority: 1},
    {page: '/links', changefreq: 'monthly', priority: 0.8},
    {page: '/experiments', lastmod: lastExperimentCreatedAt, changefreq: 'monthly', priority: 0.8}
  ];
});
