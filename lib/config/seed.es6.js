if (Meteor.isServer) {
  function seedArticles() {
    console.log('called db seed action');
    ///**
    // * TODO: move to a store method
    // */
    if (cbrw.Stores.Article.count() < 2) {
      console.log('inserted articles');
      cbrw.Stores.Article.insert({
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
        'Ut enim ad minim veniam,' +
        'quis nostrud exercitation ullamco laboris nisi' +
        'ut aliquip ex ea commodo consequat.Duis aute irure dolor in' +
        'reprehenderit in voluptate velit esse cillum dolore eu fugiat' +
        'nulla pariatur.Excepteur sint occaecat cupidatat non proident,' +
        'sunt in culpa qui officia deserunt mollit anim id est laborum.',
        title: 'Super mega title',
        createdAt: new Date()
      });
      cbrw.Stores.Article.insert({
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
        'Ut enim ad minim veniam,' +
        'quis nostrud exercitation ullamco laboris' +
        'nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in' +
        'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla' +
        'pariatur.Excepteur sint occaecat cupidatat non proident,' +
        'sunt in culpa qui officia deserunt mollit anim id est laborum.',
        title: 'Ultra mega title',
        createdAt: new Date()
      });
    }
  }

  seedArticles();
}
