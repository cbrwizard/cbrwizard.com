if (Meteor.isServer) {
  function seedArticles() {
    console.log('called db seed action');
    ///**
    // * TODO: move to a store method
    // */
    if (cbrw.Collections.Articles.find().count() < 3) {
      console.log('inserted articles');
      cbrw.Collections.Articles.create({
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
        'Ut enim ad minim veniam,' +
        'quis nostrud exercitation ullamco laboris nisi' +
        'ut aliquip ex ea commodo consequat.Duis aute irure dolor in' +
        'reprehenderit in voluptate velit esse cillum dolore eu fugiat' +
        'nulla pariatur.Excepteur sint occaecat cupidatat non proident,' +
        'sunt in culpa qui officia deserunt mollit anim id est laborum.',
        title: 'Programming, people and worlds',
        createdAt: new Date().valueOf(),
        updatedAt: new Date().valueOf(),
        tag_list: "kek, lol, mega, rails",
        feeling: 'funky'
      });
      cbrw.Collections.Articles.create({
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
        'Ut enim ad minim veniam,' +
        'quis nostrud exercitation ullamco laboris' +
        'nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in' +
        'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla' +
        'pariatur.Excepteur sint occaecat cupidatat non proident,' +
        'sunt in culpa qui officia deserunt mollit anim id est laborum.',
        title: 'Random thoughts',
        createdAt: new Date().valueOf(),
        updatedAt: new Date().valueOf(),
        tag_list: "kek, mega long tag, mega, rails",
        feeling: 'sad'
      });
      cbrw.Collections.Articles.create({
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
        'Ut enim ad minim veniam,' +
        'quis nostrud exercitation ullamco laboris' +
        'nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in' +
        'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla' +
        'pariatur.Excepteur sint occaecat cupidatat non proident,' +
        'sunt in culpa qui officia deserunt mollit anim id est laborum.',
        title: 'About programming',
        createdAt: new Date().valueOf(),
        updatedAt: new Date().valueOf(),
        tag_list: "kek, random thoughts, mega, rails",
        feeling: 'happy'
      });
    }
  }

  seedArticles();
}


