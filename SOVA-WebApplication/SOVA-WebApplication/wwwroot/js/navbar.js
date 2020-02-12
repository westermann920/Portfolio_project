define(["knockout"], function (ko) {

    var menuComps = [
        {
            name: "posts",
            component: "posts"
        },
        {
            name: "cloud",
            component: "cloud"
        }
    ];

    var Menu = menuComps[0];
    var Component = ko.observable(Menu.component);

    var goToPost = function() {
        Menu = menuComps[0];
    };
    var goToCloud = function() {
        Menu = menuComps[1];
    };

    return {
        Component,
        menuComps,
        goToPost,
        goToCloud
    };
});