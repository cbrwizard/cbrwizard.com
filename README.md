#cbrwizard.com

A wizardry website build with MeteorJS. This code might be useful if you want to have an example of MeteorJS file structure.

It uses ES6, Stylus, Jade, ThreeJS, TAPi18n, MomentJS and IronRouter.

Current tasks, bugs, etc. can be seen [on Trello](https://trello.com/b/D5IOdhwX/cbrwizard-com).

##How to dev:
1. $ meteor

##Tests
Tests are located in /tests and are written in Jasmine. They are quite general at the moment.
To run them, type

```bash
$ meteor --test
```

##Structure

* /client - Client related files and JS classes which get used only there.
  * /scripts - JS files.
    * /helpers - Meteor related template helpers.
    * /effects - Static not-data related visual effect classes.
    * /events - Meteor events for interactivity.
    * /lib - Libraries which must be loaded immediately for a client before other scripts.
      * /controllers - Folder for a main routes file and route actions.
        * /actions - Actions which are called on different routes.
      * /seo - Contains helper classes for SEO.
  * /styles - Stylus files for styling.
    * /blocks - Folders for each type of BEM blocks, which contain a file for each BEM block.
    * /lib - Vendor styles.
    * /shared - Folders with shared not BEM blocks styles, like text and structure.
    * /support - Folders with Stylus related data, like variables.
  * /templates - Views and layouts in Jade, separated into partials where needed.
* /i18n - Locale files, every string should be used from here.
* /lib - Shared between client and server scripts which are used in other parts.
  * /collections - MongoDB collections.
  * /config - Meteor startup functions.
  * /lib/.../lib/namespace/cbrw.js - Declares a global namespace. Is located so deeply so that Meteor loads it first.
* /public - Place for images, robots.txt, etc.
* /server - Server specific code.
  * /db - Helper db-related functions.
  * /publications - Meteor publications, which allow data to be used in client/presenters from lib/stores.

## Why

Why Meteor? Why Angular?

Have you ever made a technology choice which you later regretted? Well, I did a year ago. Now I understand that using Meteor and Angular for a static website was a really bad idea. I don't want to rewrite it now because rewriting is a waste of time. Well, you've got to learn something somehow!

## TODO
* Rewrite in normal Node.js and maybe React
* Improve fonts
* Remove db and switch to static.

##Thank you

Suggestions are welcome! I hope that somebody finds this code useful.
