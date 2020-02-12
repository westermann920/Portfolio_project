require.config({
    baseUrl: "js",
    paths: {
        jquery: "../lib/jquery/dist/jquery",
        knockout: "../lib/knockout/build/output/knockout-latest.debug",
        text: "../lib/requirejs-text/text",
        jqcloud: "../lib/jqcloud2/dist/jqcloud"
    }
});

require(["knockout"], function (ko) {
    ko.components.register('posts', {
        viewModel: { require: "components/posts/posts" },
        template: { require: "text!components/posts/posts.html" }
    });
    ko.components.register('cloud', {
        viewModel: { require: "components/wordcloud/cloud" },
        template: { require: "text!components/wordcloud/cloud.html" }
    });
});

define(["knockout", "navbar"], function (ko, navbar) {
    ko.applyBindings(navbar);
});