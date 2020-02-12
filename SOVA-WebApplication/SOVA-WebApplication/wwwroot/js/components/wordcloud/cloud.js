define(['knockout', "jquery", "jqcloud"], function (ko, $) {
    // Model
    function WordModel(_word, _wordCount) {
        var self = this;
        self.word = _word;
        self.wordCount = _wordCount;
    };

    // View Model
    function cloudViewModel() {
        var self = this;

        var cloudWords = [
            { text: "Lorem", weight: 13 },
            { text: "Ipsum", weight: 10.5 },
            { text: "Dolor", weight: 9.4 },
            { text: "Sit", weight: 8 },
            { text: "Amet", weight: 6.2 },
            { text: "Consectetur", weight: 5 },
            { text: "Adipiscing", weight: 5 }
        ];

        $('#bootLegWordCloud').jQCloud(cloudWords);
    };
    return cloudViewModel;
});