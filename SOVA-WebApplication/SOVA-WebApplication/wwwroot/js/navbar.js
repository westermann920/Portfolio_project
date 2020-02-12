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
    var menuComponent = ko.observable(Menu.component);

    var changeComponent = function (comp) {
        menuComponent(comp.component);
    }

    return {
        menuComponent,
        menuComps,
        changeComponent
    };
});