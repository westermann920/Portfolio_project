define([], function() {

    var getWords = async function(callback) {
        var response = await fetch("api/words");
        var data = await response.json();
        callback(data);
    };

    var getPosts = async function (callback) {
        var response = await fetch("api/post");
        var data = await response.json();
        callback(data);
    };

    return {
        getPosts,
        getWords
    };
});