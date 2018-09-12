function getAll() {
    $('#results2').empty();
    $('#results').empty();
    $.ajax({
        url: 'http://localhost:51217/api/Game/'
    }).then(
        function (data) {
            $('#results').empty();
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                for (var field in item) {
                    $('#results').append(" " + field +
                        " : " + item[field] + ", ")
                }
                $('#results').append("<br>")
            }
        }
    )
}

function getById() {
    $('#results2').empty();
    $('#results').empty();
    var id = $('#getId').val();
    var urlGet = 'http://localhost:51217/api/Game/' + id;
    var ajaxGetId = {
        type: "GET",
        url: urlGet,
    }
    $.ajax(ajaxGetId).then(
        function (data) {
            console.log(data);
            $('#results').text("ID: " + data["ID"] + ",Game name: " + data["Game_Name"] + ", Player1: " + data["Player1"] + ", Player2:" + data["Player2"] + ", Who Won:" + data["Who_Won"]);
        }).fail(function (err) { console.log(err); })
}






