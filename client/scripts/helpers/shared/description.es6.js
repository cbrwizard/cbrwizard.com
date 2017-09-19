Template.registerHelper('description', function(experiment) {
  if (TAPi18n.getLanguage() === 'ru-RU') {
    return experiment.descriptionRu
  }
  return experiment.descriptionEn
})
