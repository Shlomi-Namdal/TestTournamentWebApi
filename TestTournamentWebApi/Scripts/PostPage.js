function post() {
    var req = new XMLHttpRequest();
    var url = 'http://localhost:51217/api/Game';
    req.open('POST', url);
    req.setRequestHeader("Content-Type", "application/json");
    req.onload = function () {
        alert('Creat');
    }
    req.onerror = function () {
        alert('eroor');
    }
    var gameName = $('#gameName').val();
    var player1 = $('#player1').val();
    var player2 = $('#player2').val();
    var whoWon = $('#whoWon').val();

    $('#gameName').val("");
    $('#player1').val("");
    $('#player2').val("");
    $('#whoWon').val("");
    req.send(
        '{"Game_Name":' + '"' + gameName + '"' +
        ',"Player1":' + '"' + player1 + '"' +
        ',"Player2":' + '"' + player2 + '"' +
        ',"Who_Won":' + '"' + whoWon + '"}');

}