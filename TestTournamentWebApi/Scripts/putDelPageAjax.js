function show()
{
    var id = $('#getId').val();
    var urlGet = 'http://localhost:51217/api/Game/' + id;
    var ajaxGetId = {
        type: "GET",
        url: urlGet,
    }

    $.ajax(ajaxGetId).then(
        function (data) {
            $('#gameName').val(data["Game_Name"]);
            $('#player1').val(data["Player1"]);
            $('#player2').val(data["Player2"]);
            $('#whoWon').val(data["Who_Won"]);
        }).fail(function (err) { console.log(err); })
}
function deleteGame() {
    var id = $('#getId').val();
    var urlGet = 'http://localhost:51217/api/Game/' + id;
    var ajaxGetId = {
        type: "DELETE",
        url: urlGet,
    }
    $.ajax(ajaxGetId).then(function (data) {
        alert("Deleted!");
        $('#getId').val("");
        $('#gameName').val("");
        $('#player1').val("");
        $('#player2').val("");
        $('#whoWon').val("");
    }).fail(function (err) { console.log("Error"); })
}
function edit() {
    var id = $('#getId').val();
    var urlGet = 'http://localhost:51217/api/Game/' + id;
    var item = {
        Game_Name: $('#gameName').val(),
        Player1: $('#player1').val(),
        Player2: $('#player2').val(),
        Who_Won: $('#whoWon').val()
    }
    var ajaxPut = {
        type: "PUT", // what is the method? post, get, put , delete
        url: urlGet,
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify(item) // request http body
    }
    $.ajax(ajaxPut).then(function (data) {
        console.log(data);
        alert("Edit!");
        $('#getId').val("");
        $('#gameName').val("");
        $('#player1').val("");
        $('#player2').val("");
        $('#whoWon').val("");
    }).fail(function (err) { console.log(data); })

}

