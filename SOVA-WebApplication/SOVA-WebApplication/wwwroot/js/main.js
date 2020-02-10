var SearchPosts = function (posts) {
    this.posts = ko.observableArray(posts);
    this.termToFind = ko.observable("");

    this.getPosts = function () {
        if (this.termToFind() != "") {
            $.getJSON("http://localhost:5000/api/post", function (data) {
                this.posts.push(data); //adds the posts to the observableArray
                this.termToFind("") //clears the search box
            })
        }
    }.bind(this);  // Ensure that "this" is always this view model
};
ko.applyBindings(new SearchPosts([]));