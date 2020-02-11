define(['knockout'], function (ko) {
    function Word(name, rating) {
        this.name = name;
        this.userRating = ko.observable(rating || null);
    }

    function MyViewModel() {
        this.words = [];
    }
    return MyViewModel;
});