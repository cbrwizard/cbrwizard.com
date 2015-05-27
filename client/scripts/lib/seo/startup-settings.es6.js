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
      site_name: 'cbrwizard.com',
      image: 'http://www.cbrwizard.com/apple-touch-icon.png',
      url: window.location.href
    },
    twitter: {
      card: 'summary',
      creator: '@cbrwizard',
      url: window.location.href
    },
    auto: {
      twitter: true,
      og: true,
      set: ['description', 'title']
    },
    rel_author: 'https://plus.google.com/u/0/+ФёдорИванищев'
  });
});