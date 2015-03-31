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

#####/routes.js
A router file, links urls to controllers.

#####/controllers
Classes which set up different pages. Are called from routes file.

#####/effects
Static not-data related visual effect classes. Are called from controllers.

#####/helpers
Meteor related template helpers. They call presenters. Are called from controllers.

#####/presenters
Classes which contain data for templates. Are called from Meteor helpers.

#####/events
Meteor related event handlers. They call actors.

#####/actors
Classes which call Meteor methods. Are called from events.

#####/declarations/namespace/cbrw.js
Declares a global namespace cbrw. Is located so deelpy so that Meteor loads it first. TODO: pray to FSM that modules support will be added to Meteor.


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


###/templates
Views and layouts in Jade, separated into partials.



###/server
####/methods
Meteor methods, which call actions. Are called from events.

####/actions
Classes which call models. Are called from Meteor methods.

####/models
Classes which contain data handlers, which have static methods for scopes and individual methods. Are called from actions.
