#cbrwizard.com

A wizardry blog build with MeteorJS.

##Features
- Index page with list of latest articles. (wip)
- Article page with full text and Discus comments. (wip)
- Articles page with text and tags search. (wip)
- Admin section with articles records editor. (wip)
- Admin text editor with draft feature. (wip)
- Subscribe to email and RSS. (wip)
- EN/RU locales automatic and manual switch. (wip)

##How to prepare to dev:
1. $ npm install
1. $ meteor

##Tests (wip)
Tests are located in /tests and are written in Jasmine.
To run them, type

```bash
$ meteor --test
```

##Structure

###/client
Client related files and JS classes which get used only there.

####/scripts
JS files.

#####/helpers
Meteor related template helpers. Are called from controllers. Are named after templates.

#####/effects
Static not-data related visual effect classes. Are called from controllers.

#####/lib
Libraries which must be loaded immediately for a client, where folders are named after their usage.

######/controllers
Folder for a main routes file and route actions.

#######/actions
Classes which define actions which are called on different routes.

#######/routes.js
Iron Router links file, connects URLs to Controller classes.


####/styles
Stylus files for styling.

#####/blocks
Folders for each type of BEM blocks, which contain Stylus files for each BEM block.

#####/lib
Vendor styles.

#####/shared
Folders with shared not BEM blocks styles, like text and structure.

#####/support
Folders with Stylus related data, like variables.


####/templates
Views and layouts in Jade, separated into partials where needed. Folders are named after controllers and pages, with some exceptions.



###/i18n
Locale files, every string should be used from here.


###/lib
Shared between client and server scripts which are used in other parts.

####/config
Different scripts and config objects which help app to function.

####/collections
MongoDB collections.

####/schemas
Validation SimpleSchema schemas for stores.

####/lib/lib/lib/namespace/cbrw.js
Declares a global namespace cbrw. Is located so deeply so that Meteor loads it first. TODO: pray to FSM that modules support will be added to Meteor.


###/public
Images and other files with easy public access.


###/server
Server specific code.

####/publications
Meteor publications, which allow data to be used in client/presenters from lib/stores.


###/tests
Jasmine client and server tests.