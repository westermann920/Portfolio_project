define(['knockout', "jquery"], function (ko, $) {
    // Model
    function postModel(data) {
        var self = this;
        self.id = ko.observable(data.id);
        self.title = ko.observable(data.title);
        self.body = ko.observable(data.body);
    };

    // View Model
    function postViewModel() {
        var self = this;
        self.post = ko.observableArray([]);
        self.termToFind = ko.observable("");

        self.checkTerm = function() {
            if (self.termToFind() != "") {
                return true;
            } else {
                return false;
            }

        };

        self.getPosts = function() {
            self.post = ko.observableArray([]);
            if (self.termToFind() !== "") {
                $.getJSON("http://localhost:5001/api/post",
                    function(data) {
                        self.termToFind(""); //clears the search box
                        var array = [];
                        ko.utils.arrayForEach(data,
                            function(table) {
                                console.log(table);
                                array.push(table); //adds the post to the observableArray
                            });
                        self.post = array;
                        //console.log(this.post); //used for debugging
                    });
            }
        };
    };
    return postViewModel;
});