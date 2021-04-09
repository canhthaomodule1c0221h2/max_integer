let a = parseInt(prompt("nhập vào số thứ nhất"));
let b = parseInt(prompt("nhập vào số thứ hai"));
let c = parseInt(prompt("nhập vào số thứ 3"));
if (a > b) {
    if (b > c) {
        document.write("số lớn nhất là " + a);
    }
    else if (a>c) {
        document.write("số lớn nhât là " + a);
    }
    else {
    document.write("số lớn nhất là " + c);
    }
}
else if (b>c) {
    document.write("số lớn nhất là" + b);
}
else {
    document.write("số lớn nhất là " + c);
}


