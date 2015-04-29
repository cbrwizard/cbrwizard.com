/**
 * Gets a user locale language
 *
 * @returns {string}
 */
function getUserLanguage() {
  return navigator.languages ? navigator.languages[0] : (navigator.language || navigator.userLanguage);
}

if (Meteor.isClient) {
  Meteor.startup(function () {
    TAPi18n.setLanguage(getUserLanguage());
  })
}