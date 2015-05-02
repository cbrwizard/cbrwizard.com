/**
 * Returns a locale primary or not button class for a locale
 */
Template.registerHelper('localeBtnClass', function (locale) {
  let btnClass = `flag ${locale}`;

  if (locale === TAPi18n.getLanguage()) {
    btnClass += ' flag--primary';
  } else {
    btnClass += ' flag--default';
  }

  return btnClass;
});