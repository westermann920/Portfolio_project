define(['knockout', 'dataService'], function (ko, ds) {
    var posts = ko.observableArray([]);

    ds.getposts();

    return function (params) {
        return {
            posts,
        };
    };
});