//đề xuất kích thước cho bảng
let size = 4;
let min = 0;
let max = size - 1;
let excludeIds = [];
//phần game
function start() {
  let tenplayer = prompt("nhập tên người chơi")
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
// lấy vị trí từ hàm getIp()
    let id1 = getId();
     let id2 = getId();
    //tạo id ngẫu nhiên 00-33(i cột; j dòng)
    function getId() {
        let i = Math.floor(Math.random()*(3)+0);
        let j = Math.floor(Math.random()*(3)+0);
        return i+""+j;
    }

    // in 2 số đầu tiên ngẫu nhiên
    document.getElementById(id1).innerHTML="2";
    document.getElementById(id2).innerHTML="2";
    //điểm số
    let score = 0;
    document.getElementById("score").innerHTML = score;
    function up() {
        let isMove = false; //th sai
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
                            exeludeIds.push(nId);
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
        let isMoved = false;
        excludeIds = [];
        for(let i=min;i<=max;i++) {
            for(let j=max;j>=min;j--) {
                let id = i+""+j;
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
        if(!id.endsWith(max)) { //nếu không kết thúc tại max ( max = 3)
            let arr = id.split(""); //cắt chuỗi ex: [12] -> [1,2]
            let i = parseInt(arr[0]);
            let j = parseInt(arr[1]);
            for(let k=(j+1);k<=max;k++) {
                let nId = i+""+k; // nid = 1 3
                if(document.getElementById(nId).innerHTML != "") { // nếu tại vị trí dòng 1 cột 3 không rỗng
                    var val = parseInt(document.getElementById(i+""+(k-1)).innerHTML); // lấy giá trị val = số nguyên tại vị trí 1 2,
                    var nVal = parseInt(document.getElementById(nId).innerHTML); // lấy giá trị val = số nguyên tại vị trí 1 3,
                    if(val == nVal) { // nếu hai số bằng nhau
                        if(excludeIds.indexOf(nId) == -1){ //nếu không có số nào tại vị trí 1 3
                            excludeIds.push(nId); // đẩy lên cuối chuỗi
                            document.getElementById(nId).innerHTML = (val+nVal); // in ra tổng số trc và sau
                            document.getElementById(i+""+(k-1)).innerHTML = ""; // xoa so phia trc (vị trí 1 2)
                            isMoved = true;
                            score += (val+nVal);
                        }
                        break; // kết thúc xét vòng tiếp theo
                    }
                }
                else { // nếu vị trí 1 3 rỗng ( đấy phần tử)
                    document.getElementById(nId).innerHTML = document.getElementById(i+""+(k-1)).innerHTML; // thì vị trí 1 3 = vị trí 1 2
                    document.getElementById(i+""+(k-1)).innerHTML = ""; //xóa vị trí 1 2
                    isMoved = true;
                }
            }
        }
        return false;
    }



//update
    function update() {
        //them so ngau nhien
        let ids = [];
        for(let i = min;i<=max;i++) {
            for (let j = min;j<=max;j++) {
                let id = i+""+j; //id 0 0 ->3 3
                if (document.getElementById(id).innerHTML =="") { //nếu tại vị trí là rỗng
                    ids.push(id); //nhưng id hiện rỗng lên mảng ids
                }
            }
        }
        let id = ids[Math.floor(Math.random()*ids.length)];// vị trí xuất hiện tại nhwungx vị trí rỗng
        if (Math.random()<0.8) { // tạo số ngẫu nhiên 1-4
            document.getElementById(id).innerHTML = "2";
        } else {
            document.getElementById(id).innerHTML = "4";
        }

        let fill = true;
        for(let i = min;i<=max;i++) {
            for (let j = min; j <= max; j++) {
                let id = i + "" + j;
                if (document.getElementById(id).innerHTML == "") { //nếu tại vị trí là rỗng
                    fill = false;
                    break;
                }
            }
        }
        document.getElementById("score").innerHTML = score; //in điểm
        if (fill) {
            checkGameOver()
        }
    }

// function loss() {
//     let isOver = true;
//     for (let i = min; i <= max; i++) {
//         for (let j = min; j <= max; j ++) {
//
//             let val = parseInt(document.getElementById(i + "" + j).value);
//             let nVal = parseInt(document.getElementById(i+""+(j + 1)).value);
//             console.log(nVal);
//             console.log(val);
//             if (val == nVal) {
//                 isOver = false;
//                 break;
//             }
//         }
//             for (let j = 0; j <= 3; j++) {
//                 let val = parseInt(document.getElementById(j + "" + i).value);
//                 let nVal = parseInt(document.getElementById(j+""+(i + 1)).value);
//                 if (val == nVal) {
//                     isOver = false;
//                     break;
//                 }
//             }
//     }
//
//     if (isOver) {
//         alert("game over");
//     }
//     return false;
// }
    function checkGameOver() {
        let isOver = true;
        for(let j=min;j<=max;j++) {
            for(let i=min;i<=(max-1);i++) { //theo chieu ngang
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
            alert(tenplayer + " đã đạt được số điểm là: " + score )
        }
    }

//di chuyển bằng phím định hướng
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
    };
}





