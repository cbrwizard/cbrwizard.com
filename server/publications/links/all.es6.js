/**
 * Returns all links
 */
Meteor.publish('linksAll', function () {
  return cbrw.Collections.Links.find();
});