class cbrw.Stores.Article extends Minimongoid
  @_collection: new Meteor.Collection('articles')

  @all: ->
    @find()

  @count: ->
    @all().count()
