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
        self.posts = ko.observableArray([]); // Posts currently shown
        self.allPosts = ko.observableArray(); // All posts form search
        self.termToFind = ko.observable(""); // Search input value
        self.setSize = ko.observable(5); // How many posts is shown at ones
        self.currentSet = ko.observable(0); // The current post set

        // Check if search input field is used or not
        self.checkTerm = function () {
            if (self.termToFind() !== "") {
                return true;
            } else {
                return false;
            }
        };

        // Checks if there are any posts
        self.checkPost = function () {
            if (self.posts() !== []) {
                return true;
            } else {
                return false;
            }
        }

        // Gets data from api
        self.getPosts = async function () {
            if (self.termToFind() !== "") {
                var response = await fetch("api/post/find/" + self.termToFind());
                var data = await response.json();
                for (var i = 0; i < data.length; i++) {
                    self.allPosts.push(new PostModel(data[i]));
                }
                self.termToFind(""); //Clears the search box
            }
        };

        // Shows the posts
        self.page = ko.computed(function () {
            if (self.setSize() == "all") {
                self.posts(self.allPosts.slice(0));
            } else {
                var size = parseInt(self.setSize(), 10);
                var first = size * self.currentSet(); 
                var last = first + size;
                self.posts(self.allPosts.slice(first, last));
            }

        }, self);

        // Gets the total number of post sets
        self.numberOfPostSets = function () {
            var totalSets = self.allPosts().length / self.setSize() || 1;
            return Math.ceil(totalSets);
        }

        // Gets next set posts
        self.nextSet = function () {
            if (self.currentSet() < self.numberOfPostSets() - 1) {
                self.currentSet(this.currentSet() + 1);
            }
        }
        // Gets previous set posts
        self.previousSet = function () {
            if (self.currentSet() > 0) {
                self.currentSet(this.currentSet() - 1);
            }
        }

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