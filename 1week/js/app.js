var indexN = 0;
var database = new Array();
function Member(name, id, img){
    this.name = name;
    this.id = id;
    this.img = img;
}
Member.prototype.toString = function(){
    return this.id + " "+ this.name + " " + this.img ;

}

var regist = function(){
    // id
    var id = new Data().getFullYear + indexN;
    indexN++;
    //name
    var inp = document.getElementById('na');
    var n = inp.value;
    //img
    var img = document.getElementById('img').value;
    var str = "media/" + img + ".png";
    //creat new Member.
    var t = new Member(n, id, str);
    database.push(t);

    var par = document.getElementById("tbody");
    var tr = document.createElement("tr");
    var content = "<td>" + id + "</td>" + "<td>" + n + "</td>" + 
    "<td><img src=image/" + img +"width=100> </td>";
    tr.innerHTML = content;
    par.appendChild(tr);

}
