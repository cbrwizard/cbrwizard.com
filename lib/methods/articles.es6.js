Meteor.methods({
	// articlesLast: funcbrw.Actions.Articles.last
	/**
	 * todo: remove anon func
	 */
	articlesLast: function() {
		console.log('called meteor method articlesLast');
		// alert(200);
		// return [100, 200, 300];
		return cbrw.Actions.Articles.last();
		// cbrw.Collections.Articles.find();
	}
});
