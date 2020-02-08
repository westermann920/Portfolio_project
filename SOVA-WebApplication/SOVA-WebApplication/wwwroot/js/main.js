var SimpleListModel = function (items) {
    this.items = ko.observableArray(items);
    this.itemToAdd = ko.observable("");
    this.addItem = function () {
        if (this.itemToAdd() != "") {
            this.items.push(this.itemToAdd()); // Adds the item. Writing to the "items" observableArray causes any associated UI to update.
            this.itemToAdd(""); // Clears the text box, because it's bound to the "itemToAdd" observable
        }
    }.bind(this);  // Ensure that "this" is always this view model
};

var SearchPosts = function (posts) {
    this.posts = ko.observableArray(posts);
    this.termToFind = ko.observable("");

    this.getPosts = function () {
        if (this.termToFind() != "") {
            $.getJSON("/api/post", function (data) {
                this.posts.push(data); //adds the posts to the observableArray
                this.termToFind("") //clears the search box
            })
        }
    }.bind(this);  // Ensure that "this" is always this view model
};
ko.applyBindings(new SearchPosts([]));