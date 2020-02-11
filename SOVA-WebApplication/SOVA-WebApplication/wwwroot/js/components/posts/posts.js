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

// View Model
function SomeViewModel() {
    var self = this;

    this.ArrayOfModels = ko.observableArray([]),

        this.GetModelsByAjax = function () {
            $.ajax({
                type: 'POST',
                url: '/echo/json/',
                data: {
                    json: JSON.stringify([{
                        Firstname: "Bob",
                        Lastname: "Smith"
                    },
                    {
                        Firstname: "Ted",
                        Lastname: "Smith"
                    }]),
                    delay: 0
                },
                context: this,
                success: function (data) {
                    self.SuccessfullyRetrievedModelsFromAjax(data);
                },
                dataType: 'json'
            });
        };

    this.SuccessfullyRetrievedModelsFromAjax = function (models) {
        ko.utils.arrayForEach(models, function (model) {
            self.ArrayOfModels.push(new SomeModel(model));
        });
    };
}

ko.applyBindings(new SomeViewModel());