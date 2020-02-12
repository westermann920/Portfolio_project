define(['knockout', "jquery"], function (ko, $) {
    // Model
    function PostModel(data) {
        var self = this;
        self.id = data.id;
        self.title = data.title;
        self.body = data.body;
    };

    // View Model
    function postViewModel() {
        var self = this;
        self.posts = ko.observableArray();
        self.termToFind = ko.observable("");

        self.checkTerm = function() {
            if (self.termToFind() !== "") {
                return true;
            } else {
                return false;
            }

        };

        self.getPosts = function() {
            if (self.termToFind() !== "") {
                var urlString = "http://localhost:5001/api/post?searchTerm=" + self.termToFind;
                $.getJSON(urlString, function(data) {
                        self.termToFind(""); //clears the search box
                        ko.utils.arrayForEach(data, function (table) {
                            self.posts.push(new PostModel(table)); //adds the post to the observableArray
                        });
                        //console.log(self.posts); //used for debugging
                    });
            }
        };
    };
    return postViewModel;
});