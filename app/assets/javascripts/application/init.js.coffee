##
# Prepares app namespace
@.app = {
  # Creates angular app
  cbrwizard:
    angular.module(
      'cbrwizard',
      ['templates', 'truncate', 'cbrwizardFilters']
    )
  # Creates custom filters module
  angularFilters:
    angular.module('cbrwizardFilters', [])

  config: {}
}

