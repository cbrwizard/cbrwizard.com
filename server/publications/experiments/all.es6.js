/**
 * Returns all experiments
 */
TAPi18n.publish('experimentsAll', function () {
  return cbrw.Collections.Experiments.i18nFind({display: {$ne: false}});
});