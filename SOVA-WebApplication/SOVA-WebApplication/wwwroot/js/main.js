
require.config({
    baseUrl: "js",
    paths: {
        jquery: "../lib/jquery/dist/jquery",
        knockout: "../lib/knockout/build/output/knockout-latest.debug",
        text: "../lib/requirejs-text/text",
        jqcloud: "../lib/jqcloud2/dist/jqcloud",
        dataService: "services/dataService",
        postman: "services/postman",
        store: "services/store"
    },
    shim: {
        jqcloud: ["jquery"]
    }
});

require(["knockout"], function(ko) {
    ko.components.register('cloud', {
        viewModel: { require: "components/wordcloud/cloud" },
        template: { require: "text!components/wordcloud/cloud.html" }
    });
    ko.components.register('component1', {
        viewModel: { require: "components/component1/component1" },
        template: { require: "text!components/component1/component1.html" }
    });
});


require(["knockout", "store", "navbarApp"], function (ko, store, app) {
    store.subscribe(() => console.log(store.getState()));
    ko.applyBindings(app);
});