# Main init file which initializes EVERYTHING

# Prepares app namespace
@.app || (@.app = {})

# Creates angular app
@app.cbrwizard = angular.module('cbrwizard', ['templates', 'cbrwizardFilters'])

# Creates custom filters module
@app.angularFilters = angular.module('cbrwizardFilters', [])
