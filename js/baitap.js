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
