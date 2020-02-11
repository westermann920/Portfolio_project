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

    var changeComp = function () {
        if (Menu.component == "posts") {
            Menu = menuComps[0];
        } else if (Menu.component == "cloud"){
            Menu = menuComps[1];
        }
        
    }

    return {
        Component,
        menuComps,
        changeComp
    };
});