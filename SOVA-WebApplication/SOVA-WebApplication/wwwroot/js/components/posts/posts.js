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

        self.checkTerm = function () {
            if (self.termToFind() !== "") {
                return true;
            } else {
                return false;
            }
        };

        self.getPosts = async function () {
            if (self.termToFind() !== "") {
                var response = await fetch("api/post?searchTerm=" + self.termToFind);
                     self.termToFind(""); //clears the search box
            }
            var data = await response.json();
            for (var i = 0; i < 5; i++) {
                self.posts.push(new PostModel(data[i]));
            }
        };

        /*
        self.getPosts = function () {
            if (self.termToFind() !== "") {
                var urlString = "http://localhost:5001/api/post?searchTerm=" + self.termToFind;
                $.getJSON(urlString, function (data) {
                    self.termToFind(""); //clears the search box
                    // takes 5 posts and show them
                    for (var i = 0; i < 5; i++) {
                        self.posts.push(new PostModel(data[i]));
                    }
                    //console.log(self.posts); //used for debugging
                });
            }
        };*/
    };
    return postViewModel;
});