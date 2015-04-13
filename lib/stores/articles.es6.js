cbrw.Stores.Article = class Article {
  /**
   * Returns an articles collection
   */
  static collection() {
    if (_.isUndefined(this._collection())) {
      this._collection = new Mongo.Collection('articles');
    }
    return this._collection;
  }

  /**
   * Temporary holder of a collection so that it
   * does not create a new one every time collection method
   * is called
   */
  static _collection() {
    return undefined;
  }
};
