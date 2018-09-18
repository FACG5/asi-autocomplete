var send = require("../public/js/logic")
var tape = require("tape");


tape("Check Type Of Result", function (t) {
    send("http://extracts.panmacmillan.com/getextracts?authorcontains=a", function (result) {
        var actual = result.Extracts.length;

        var expected = 10
        t.deepEqual(actual, expected, "Length is Equal");
        t.end();
    })
})

tape("Check Type Of Result", function (t) {
    send("http://extracts.panmacmillan.com/getextracts?authorcontains=a", function (result) {
        var actual = typeof result;
        var expected = "object";
        t.deepEqual(actual, expected, "type is object");
        t.end();
    })
})