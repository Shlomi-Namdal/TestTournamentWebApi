function edit() {
    id = $('#getId').val();
    console.log(id);
    var req = new XMLHttpRequest();
    var url = 'http://localhost:51217/api/Game/' + id;
    req.open("PUT", url);
    req.setRequestHeader("Content-Type", "application/json");
    req.onload = function () { alert('Updating..') };
    req.onerror = function () { alert('Error') };

    game = $('#gameName').val();
    player1 = $('#player1').val();
    player2 = $('#player2').val();
    won = $('#whoWon').val();

    $('#getId').val("");
    $('#gameName').val("");
    $('#player1').val("");
    $('#player2').val("");
    $('#whoWon').val("");

    req.send(
        '{"Game_Name":' + '"' + game + '"' +
        ',"Player1":' + '"' + player1 + '"' +
        ',"Player2":' + '"' + player2 + '"' +
        ',"Who_Won":' + '"' + won + '"}');

}




function show() {
    id = $('#getId').val();
    var req = new XMLHttpRequest();
    var url = 'http://localhost:51217/api/Game/' + id;
    req.open("Get", url);
    req.onload = function () {
        var list = JSON.parse(req.response)
        $('#gameName').val(list["Game_Name"]);
        $('#player1').val(list["Player1"]);
        $('#player2').val(list["Player2"]);
        $('#whoWon').val(list["Who_Won"]);
    }
    req.onerror = function () {
        alert(req.response);
    }
    req.send();
}

function deleteGame() {
    id = $('#getId').val();
    var req = new XMLHttpRequest();
    var url = 'http://localhost:51217/api/Game/' + id;
    req.open("DELETE", url);
    req.onload = function () {
        alert("this Id IS Deleted!");
        $('#getId').val("");
        $('#gameName').val("");
        $('#player1').val("");
        $('#player2').val("");
        $('#whoWon').val("")
    }
    req.onerror = function () {
        alert(req.response);
    }
    req.send();

}