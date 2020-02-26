define(['knockout', "jquery", "jqcloud"], function (ko, $) {
    // Model
    function WordModel(word, weight) {
        var self = this;
        self.text = word;
        self.weight = weight;
    };

    // View Model
    function cloudViewModel() {
        var self = this;
        self.word = ko.observable("");

        self.words = ko.observablearry([new WordModel("Lorem", 13),
        new WordModel("Ipsum", 10),
        new WordModel("Dolor", 9),
        new WordModel("Sit", 8),
        new WordModel("Amet", 6),
        new WordModel("Consectetur", 5),
        new WordModel("Adipiscing", 5)
        ]);

        $("#bootLegWordCloud").jQCloud(self.words, { width: 200, height: 200 });

        self.checkInput = function() {
            if (self.word() !== "") {
                return true;
            } else {
                return false;
            }
        };

        self.addWord = async function()
        {
            var response = await fetch(`api/word/count/${self.word()}`);
            var wordCountData = await response.json();
            self.words.push(new WordModel(self.word(), wordCountData[0].count));
            self.word("");// reset word
            $("#bootLegWordCloud").jQCloud("update", self.words);
        }

        self.resetCloud = async function () {
            self.words = [];//clears word array
            $("#bootLegWordCloud").jQCloud("update", self.words);
        };

        self.updateCloud = async function () {
            self.words = [];//clears word array
            var wordList = ["sql", "php", "c#", "c++", "java", "javaScript"];
            for (var i = 0; i < wordList.length; i++) {
                var response = await fetch(`api/word/count/${wordList[i]}`);
                var wordCountData = await response.json();
                self.words.push(new WordModel(wordList[i], wordCountData[0].count));
            }
            $("#bootLegWordCloud").jQCloud("update", self.words);
            /*
            var cloudWords = [];
            var response = await fetch("api/word");
            var wordData = await response.json();
            for (var i = 0; i < wordData.length; i++) {
                console.log(wordData[i]);
                var word = wordData[i].word;
                var response2 = await fetch("api/word/count", { method: 'POST', body: JSON.stringify(word)});
                var wordCountData = await response2.json();
                console.log(wordCountData[0].count);
                cloudWords.push(new WordModel(wordData[i].word, wordCountData[0].count));
                console.log(cloudWords[i]);
            }
            $('#bootLegWordCloud').jQCloud('update', cloudWords, { autoResize: true });
            */
        };

    };
    return cloudViewModel;
});