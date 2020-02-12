define(['knockout', "jquery"], function (ko, $) {
    // Model
    function PostModel(data) {
        this.id = ko.observable(data.id);
        this.title = ko.observable(data.title);
        this.body = ko.observable(data.body);
    }

    // View Model
    function PostViewModel() {
        this.post = ko.observableArray([]);
        this.termToFind = ko.observable("");

        this.checkTerm = function () {
            if (this.termToFind() != "") { return true }
            else {
                return false
            }

        }

        this.getPosts = function () {
            if (this.termToFind() !== "") {
                $.getJSON("http://localhost:5001/api/post/?method=get", function (data) {
                    this.termToFind = ""; //clears the search box
                    this.post = [];
                    ko.utils.arrayForEach(data, function (model) {
                        this.post.push(new PostModel(model));//adds the posts to the observableArray
                    });
                    console.log(this.post); //used for debugging
                })
            }
        }
    }
    return PostViewModel;
});