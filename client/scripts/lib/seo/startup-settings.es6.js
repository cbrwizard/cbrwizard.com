/**
 * Default SEO settings for all pages
 */
Meteor.startup(function () {
  return SEO.config({
    title: 'cbrwizard.com - Fyodor Ivanishchev',
    meta: {
      'description': 'Magical website about a cyber wizard.'
    },
    og: {
      type: 'website',
      site_name: 'cbrwizard.com'
    },
    twitter: {
      card: 'summary',
      creator: '@cbrwizard',
    },
    auto: {
      twitter: true,
      og: true,
      set: ['description', 'url', 'title']
    },
    rel_author: 'https://plus.google.com/u/0/+ФёдорИванищев'
  });
});