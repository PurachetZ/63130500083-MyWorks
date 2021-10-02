class player{
    constructor(name){
        this._name = name;
        this._history = new Array();
        this._pHistory = new Array();
    }
    roledice(){
        this._point = Math.floor(Math.random() * 6)+1;
        return this._point;
    }
}
function game (max, p1, p2){
    for(i = 0; i < max; i++){
        p1._pHistory[i] = p1.roledice();
        p2._pHistory[i] = p2.roledice();
        p1Win = '';
        p2Win = '';
        if(p1._pHistory[i] > p2._pHistory[i]){
            p1._history[i] = 'Win';
            p2._history[i] = 'Lose';
            p1Win++;
        }
        else if(p1._pHistory[i] == p2._pHistory[i]){
            p1._history[i] = 'Draw';
            p2._history[i] = 'Draw';
        }
        else{
            p1._history[i] = 'Lose';
            p2._history[i] = 'Win';
            p2Win++;
        }
    }
    if(p1Win>p2Win) winner = p1._name;
    else if(p1Win<p2Win) winner = p2._name;
    else winner = draw;
    return `max game : ${max} \nplayer 1 name : ${p1._name} \nplayer 2 name : ${p2._name} \nplayer 1\n${p1._history} \nplayer 2\n${p2._history} \nWinner is ${winner}`;
}
let p1 = new player('a');
let p2 = new player('b');
console.log(game(11,p1,p2))
