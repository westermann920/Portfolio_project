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
            this.post = ko.observableArray([]);
            if (this.termToFind() !== "") {
                $.getJSON("http://localhost:5001/api/post/?method=get", function (data) {
                    this.termToFind = ""; //clears the search box
                    var array = [];
                    ko.utils.arrayForEach(data, function (table) {
                        console.log(table)
                        array.push(table);//adds the post to the observableArray
                    });
                    this.post = array;
                    //console.log(this.post); //used for debugging
                })
            }
        }
    }
    return PostViewModel;
});