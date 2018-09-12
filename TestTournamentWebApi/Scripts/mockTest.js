class JavaPromis {
    constructor(mock) {
        this.mock = mock
    }

    PromiseFake() {
        if (this.mock) {
            var promise = $.ajax({
                url: 'http://localhost:51217/api/Game'
            })
            return promise;

        }
        var p = new Promise(function (
            resolve, // this will be used to fire successful result
            reject) // this will be used to fire failure result
        {

            // space for firing results!                      
            var _todos = [new Tur(1, "GameName", "shlomi", "avi", "shlomi"), new Tur(2, "GameName2", "shlomi2", "avi2", "shlomi2")]
            setTimeout(() => { resolve(_todos) }, 5000);
            resolve(_todos)
            //reject("bbbbb aaaa ddddddd")
        }
        );
        return p

    }
}

function Tur(ID, Game_Name, Player1, Player2, Who_Won) {
    this.ID = ID
    this.Game_Name = Game_Name
    this.Player1 = Player1
    this.Player2 = Player2
    this.Who_Won = Who_Won
    this.myToString = function () {
        return "Id " + this.ID +
            " Game_Name " + this.Game_Name +
            " Player1 " + this.Player1 +
            " Player2 " + this.Player2 +
            " Who_Won " + this.Who_Won
    }
}

function WindowAPi() {
    this.todos = {};
    var text = "";
    this.getTodosJQuery = function () { }
    var javaPromis = new JavaPromis(false);
    var promiseResulte = javaPromis.PromiseFake();
    promiseResulte.then(
        (data) => {
            this.todos = data;
            console.log("dddd", data);
            $('#results2').text(JSON.stringify(data));
        }, (err) => { console.log(err) }
    )
    this.printTodos = function () {
        for (var i = 0; i < this.todos.length; i++) {
            var todo = new Tur(this.todos[i].ID, this.todos[i].Game_Name, this.todos[i].Player1, this.todos[i].Player2, this.todos[i].Who_Won).myToString();
        }
    }

}
function FakeResults() {
    $('#results2').empty();
    $('#results').empty();
    var windowApi = new WindowAPi();
}
//node resulte 
function NodeTestResult() {
    var promise = $.ajax({
        url: 'http://localhost:3000/api/todo'
    }).then(
        function (data) {
            $('#results2').empty();
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                for (var field in item) {
                    $('#results2').append(" " + field +
                        " : " + item[field] + ", ")
                }
                $('#results2').append("<br>")
            }
        }
        )    
}