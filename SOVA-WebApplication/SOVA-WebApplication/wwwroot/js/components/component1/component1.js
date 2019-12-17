define(['knockout', 'dataService', 'store'], function (ko, ds, store) {
    var posts = ko.observableArray([]);
    
    var selectPerson = function (person) {
        store.dispatch(store.actions.selectPerson(person));
        store.dispatch(store.actions.selectMenu("Component 2"));
        //postman.publish("selectperson", person);
    };

    ds.getposts();

    return function (params) {
        return {
            posts,
            selectPerson
        };
    };
});