define(['knockout'], function (ko) {
    function Word(name, rating) {
        var self = this
        self.name = name;
        self.userRating = ko.observable(rating || null);
    }

    function cloudViewModel() {
        var self = this;
        self.words = [];
    };
    return cloudViewModel;
});