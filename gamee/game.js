let size = 4;
let min = 0;
let max = size - 1;
let excludeIds = [];
function start() {
    class Name {
        constructor(name) {
            this.name = name
        }
        setName(name) {
            this.name = name
        }
        getName() {
            return this.name
        }
    }
    let x = prompt("nhập tên người chơi")
    let player = new Name()
    player.setName(x)
    let y = player.getName()
    let broad = '<table border = "1">';
    for (let row = 0; row < size; row++) {
        broad +='<tr>';
        for (let col = 0; col < size; col++) {
            let id = row + "" + col;
            broad += '<td align="center" height="90" width="90" id="'+id+'"></td>'
        }
        broad += '</tr>';
    }
    broad += '</table>';
    document.getElementById("canvas").innerHTML = broad;
    let id1 = getId();
    let id2 = getId();
    document.getElementById(id1).innerHTML="1024";
    document.getElementById(id2).innerHTML="1024";
    score = 0;
    document.getElementById("score").innerHTML = score;
function getId() {
    let i = Math.floor(Math.random()*(max-min+1)+min);
    let j = Math.floor(Math.random()*(max-min+1)+min);
    return i+""+j;
}
function up() {
    isMove = false;
    exeludeIds = [];
    for (let j = min; j <= max; j++) {
        for (let i = min; i <= max; i++) {
            let id = i+""+j;
            if (document.getElementById(id).innerHTML != "") {
                moveUp(id);
            }
        }
    }
    if (isMove == true) { // trường hợp trên đúng thì gọi hàm update
        update();
    }
    return false;
}
function moveUp(id) {
    if (!id.startsWith(min)) {
        let arr = id.split("");
        let i = parseInt(arr[0]);
        let j = parseInt(arr[1]);
        for (let k=(i-1);k>=min;k--) {
            let nId  = k+""+j;
            if (document.getElementById(nId).innerHTML != "") { //neu cho o day co so
                let val = parseInt(document.getElementById((k+1)+""+j).innerHTML); // val bang so nguyen cua o phi trc nid day
                let nVal = parseInt(document.getElementById(nId).innerHTML); // nval la so cua o co id tu nid
                // let x = val + nVal;
                // if (x = 2048) {
                //     alert("you done!");
                //     load();
                // }
                if (val == nVal) {
                    if (exeludeIds.indexOf(nId) == -1) {
                        exeludeIds.push(nId);//tai len id cua o
                        document.getElementById(nId).innerHTML = (val + nVal);//cong hai gia tri
                        document.getElementById((k+1)+""+j).innerHTML = "";//xoa gtri trc khi da cong hai so
                        isMove = true;
                        score += (val+nVal);
                    }
                    break;
                }
            } else {
                document.getElementById(nId).innerHTML = document.getElementById((k+1)+""+j).innerHTML;
                document.getElementById((k+1)+""+j).innerHTML= "";
                isMove = true;
            }
        }
    }
    return false;
}

function left() {
    isMoved = false;
    excludeIds = [];
    for(let i=min;i<=max;i++) {
        for(let j=min;j<=max;j++) {
            let id = i+""+j;
            if(document.getElementById(id).innerHTML != "") {
                moveLeft(id);
            }
        }
    }
    if(isMoved == true) {
        update();
    }
    return false;
}
function moveLeft(id) {
    if(!id.endsWith(min)) {
        let arr = id.split("");
        let i = parseInt(arr[0]);
        let j = parseInt(arr[1]);
        for(let k=(j-1);k>=min;k--) {
            let nId = i+""+k;
            if(document.getElementById(nId).innerHTML != "") {
                var val = parseInt(document.getElementById(i+""+(k+1)).innerHTML);
                var nVal = parseInt(document.getElementById(nId).innerHTML);
                if(val == nVal) {
                    if(excludeIds.indexOf(nId) == -1){
                        excludeIds.push(nId);
                        document.getElementById(nId).innerHTML = (val+nVal);
                        document.getElementById(i+""+(k+1)).innerHTML = "";
                        isMoved = true;
                        score += (val+nVal);
                    }
                    break;
                }
            }
            else {
                document.getElementById(nId).innerHTML = document.getElementById(i+""+(k+1)).innerHTML;
                document.getElementById(i+""+(k+1)).innerHTML = "";
                isMoved = true;
            }
        }
    }
    return false;
}

function down() {
    isMoved = false;
    excludeIds = [];
    for(var i=min;i<=max;i++) {
        for(var j=max;j>=min;j--) {
            var id = j+""+i;
            if(document.getElementById(id).innerHTML != "") {
                moveDown(id);
            }
        }
    }
    if(isMoved == true) {
        update();
    }
    return false;
}
function moveDown(id) {
    if(!id.startsWith(max)) {
        var arr = id.split("");
        var i = parseInt(arr[0]);
        var j = parseInt(arr[1]);
        for(var k=(i+1);k<=max;k++) {
            var nId = k+""+j;
            if(document.getElementById(nId).innerHTML != "") {
                var val = parseInt(document.getElementById((k-1)+""+j).innerHTML);
                var nVal = parseInt(document.getElementById(nId).innerHTML);
                if(val == nVal) {
                    if(excludeIds.indexOf(nId) == -1){
                        excludeIds.push(nId);
                        document.getElementById(nId).innerHTML = (val+nVal);
                        document.getElementById((k-1)+""+j).innerHTML = "";
                        isMoved = true;
                        score += (val+nVal);
                    }
                    break;
                }
            }
            else {
                document.getElementById(nId).innerHTML = document.getElementById((k-1)+""+j).innerHTML;
                document.getElementById((k-1)+""+j).innerHTML = "";
                isMoved = true;
            }
        }
    }
    return false;
}
function right() {
        isMoved = false;
        excludeIds = [];
        for(var i=min;i<=max;i++) {
            for(var j=max;j>=min;j--) {
                var id = i+""+j;
                if(document.getElementById(id).innerHTML != "") {
                    moveRight(id);
                }
            }
        }
        if(isMoved == true) {
            update();
        }
        return false;
    }
    function moveRight(id) {
        if(!id.endsWith(max)) {
            var arr = id.split("");
            var i = parseInt(arr[0]);
            var j = parseInt(arr[1]);
            for(var k=(j+1);k<=max;k++) {
                var nId = i+""+k;
                if(document.getElementById(nId).innerHTML != "") {
                    var val = parseInt(document.getElementById(i+""+(k-1)).innerHTML);
                    var nVal = parseInt(document.getElementById(nId).innerHTML);
                    if(val == nVal) {
                        if(excludeIds.indexOf(nId) == -1){
                            excludeIds.push(nId);
                            document.getElementById(nId).innerHTML = (val+nVal);
                            document.getElementById(i+""+(k-1)).innerHTML = "";
                            isMoved = true;
                            score += (val+nVal);
                        }
                        break;
                    }
                }
                else {
                    document.getElementById(nId).innerHTML = document.getElementById(i+""+(k-1)).innerHTML;
                    document.getElementById(i+""+(k-1)).innerHTML = "";
                    isMoved = true;
                }
            }
        }
        return false;
    }
    function update() {
    let ids = [];
    for(let i = min;i<=max;i++) {
        for (let j = min;j<=max;j++) {
            let id = i+""+j; //id 0 0 ->3 3
            if (document.getElementById(id).innerHTML =="") {
                ids.push(id);
            }
        }
    }
    let id = ids[Math.floor(Math.random()*ids.length)];
    if (Math.random()<0.8) {
        document.getElementById(id).innerHTML = "2";
    } else {
        document.getElementById(id).innerHTML = "4";
    }
    let fill = true;
    for(let i = min;i<=max;i++) {
        for (let j = min; j <= max; j++) {
            let id = i + "" + j;
            if (document.getElementById(id).innerHTML == "") {
                fill = false;
            }
        }
    }
    document.getElementById("score").innerHTML = score;
    if (fill) {
        checkGameOver()
    }
    // else {
    //     checkWin();
    // }
}
// function checkWin() {
//     if (excludeIds.indexOf(2048)){
//         alert("chúc mừng " + y + " đã giành chiến thắng")
//     }
//
// }
function checkGameOver() {
    let isOver = true;
    for(let j=min;j<=max;j++) {
        for(let i=min;i<=(max-1);i++) {
            let val = parseInt(document.getElementById(i+""+j).innerHTML);
            let nVal = parseInt(document.getElementById((i+1)+""+j).innerHTML);
            if(val == nVal) {
                isOver = false;
                break;
            }
        }
    }
    for(let j=min;j<=max;j++) { // theo chieu doc
        for(let i=min;i<=(max-1);i++) {
            let val = parseInt(document.getElementById(j+""+i).innerHTML);
            let nVal = parseInt(document.getElementById(j+""+(i+1)).innerHTML);
            if(val == nVal) {
                isOver = false;
                break;
            }
        }
    }
    if(isOver) {
       alert(y + " đạt số điểm là: " + score)
    }
}
document.onkeydown = function(move) {
    move.preventDefault();
    switch (move.keyCode) {
        case 37:
            left();
            break;
        case 38:
            up();
            break;
        case 39:
            right();
            break;
        case 40:
            down();
            break;
      }
   }
}