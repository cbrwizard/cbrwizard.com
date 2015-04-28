/**
 * Returns all experiments
 */
Meteor.publish('experimentsAll', function () {
  return cbrw.Collections.Experiments.find();
});