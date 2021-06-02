function huongdan() {
    let hienthi = true;
    if (hienthi) {
        document.getElementById("show").innerHTML = "Di chuyển bằng phím định hường trên bàn phím để gộp ô số";
        document.getElementById("show1").innerHTML = "Có thể chiến thắng khi một ô bất khì đạt 2048";
        hienthi = false;
    }
    else {
        document.getElementById("show").innerHTML = "";
        document.getElementById("show1").innerHTML = "";
        hienthi = true;
    }
    return true;
}