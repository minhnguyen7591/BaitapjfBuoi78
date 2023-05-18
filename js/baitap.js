var mangSoNguyen = [];
function nhapSoNguyen(){
    var n = Number(document.getElementById("soNguyen").value);
    mangSoNguyen.push(n);
    document.getElementById("mangSoNguyen").innerHTML = mangSoNguyen;
}
document.getElementById("btnThemSoNguyen").onclick = nhapSoNguyen;
//tổng số dương
function tongSD(){
    var totalSD = 0;
    for(var i = 0; i < mangSoNguyen.length; i++){
        if(mangSoNguyen[i] > 0){
            totalSD += mangSoNguyen[i];
        }  
    }
    document.getElementById("result1").innerHTML = "Tổng số dương: " + totalSD;
}
document.getElementById("btnTinhTongDuong").onclick =tongSD;

// đếm số dương
function demSD(){
    var dem = 0;
    for(var i = 0; i < mangSoNguyen.length; i++){
        if(mangSoNguyen[i] > 0){
            dem++;
        }
    }
    document.getElementById("result2").innerHTML = "Tổng số dương: " + dem;
}
document.getElementById("btnDemSoDuong").onclick =demSD;

// Tìm số nhỏ nhất
function timSoMin(){
    var soMin = mangSoNguyen[0];
    for(var i = 1; i < mangSoNguyen.length; i++){
        if(mangSoNguyen[i] < soMin){
            soMin = mangSoNguyen[i];
        }
    }
    document.getElementById("result3").innerHTML = "Số nhỏ nhất: " + soMin;
}
document.getElementById("btnSoNhoNhat").onclick = timSoMin;

// Tìm số dương nhỏ nhất
function timSoDuongMin(){
    var soDuongMin = mangSoNguyen[0];
    for(var i = 1; i < mangSoNguyen.length; i++){
        if(mangSoNguyen[i] > 0 && mangSoNguyen[i] < soDuongMin){
            soDuongMin = mangSoNguyen[i];
        }
    }
    document.getElementById("result4").innerHTML = "Số dương nhỏ nhất: " + soDuongMin;
}
document.getElementById("btnSoDuongNhoNhat").onclick = timSoDuongMin;
