function post() {
    var urlPost = 'http://localhost:51217/api/Game';

    var item = {
        Game_Name: $('#gameName').val(),
        Player1: $('#player1').val(),
        Player2: $('#player2').val(),
        Who_Won: $('#whoWon').val()
    }
    var ajaxPost = {
        type: "POST",
        url: urlPost,
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify(item)
    }

    $.ajax(ajaxPost).then(
        function (data) {
            $('#gameName').val("");
            $('#player1').val("");
            $('#player2').val("");
            $('#whoWon').val("");
            alert('Creat');

        }
    ).fail(
        function (err) {
            console.error(err)
        }
        )
}
