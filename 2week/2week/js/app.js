var indexN = 0;

var database = new Array();
function Member(name, id, img){
    this.name = name;
    this.id = id;
    this.img = img;
}
Member.prototype.toString = function(){
    return this.id + " " + this.name + " " + this.img ;

}//a.toString();
//console.log(a);



var regist = function(){
    // id
    var year = new Date();
    var id = year.getFullYear().toString() + indexN;
    indexN++;
    //name
    var inp = document.getElementById('na');
    var n = inp.value;
    //img
    var img = document.getElementById('img').value;
    var str = "image/" + img + ".png";
    //creat new Member.
    var t = new Member(n, id, str);
   // var button = document.getElementById('log').t;
    database.push(t);

    var par = document.getElementById("tbody");
    var tr = document.createElement("tr");
    var content = "<td>" + id + "</td>" + "<td>" + n + "</td>" + 
    "<td><img src=image/" + img +".png width=100>" + " </td>";
    tr.innerHTML = content;
    par.appendChild(tr);
   
}
/*
var printA = function(){
    var year = new Date();
    var id = year.getFullYear().toString() + indexN;
    indexN++;
    //name
    var inp = document.getElementById('na');
    var n = inp.value;
    //img
    var img = document.getElementById('img').value;
    var str = "image/" + img + ".png";
    //creat new Member.
    var t = new Member(n, id, str);
    database.push(t);
    var loginData = document.getElementById('tbody1');
    var tr2 = document.createElement("tr");
    var Data2 = "<td>" + id + "</td>" + "<td>" + n + "</td>" + 
    "<td><img src=image/" + img + " </td>";
    tr2.innerHTML = Data2;
    loginData.appendChild(tr2)
}*/
var printA = function(){
    var list = document.getElementById("tbody1");
    database.length;
    if(database.length>0)
        list.style.visibility = "visible";
    list.innerHTML = "";
    for(var i = 0; i< database.length; i++){
        list.innerHTML +=database[i]+"<br>"
    }
}
