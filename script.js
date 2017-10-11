//1
btn.onclick = function(){
    var val = document.getElementById('inp').value;
    alert("length of string = " + val.length);
}

//2
var imgFlw = {
    img1: 'flower_01',
    img2: 'flower_02',
    img3: 'flower_03',
}
var str = '';
for (var key in imgFlw){
    str += `<img src="img/${imgFlw[key]}.png" >`
}
out1.innerHTML = str;

//3 - 4
document.getElementById('btn3-4').onclick = function(){
    var val = adress.value;  
    if (val.substring(0,12) == 'https://www.'){
        var str_new = val.substring(12);
    }
    else if(val.substring(0,11) == 'http://www.'){
        var str_new = val.substring(11);
    }
    else if (val.substring(0,8) == 'https://'){ 
        var str_new = val.substring(8);
    }
    else if(val.substring(0,7) == 'http://'){
        var str_new = val.substring(7);
    }
    else{
        var str_new = val;
    }
    out2.innerHTML = str_new;
}

//5
btnForm.onclick = function(){
    var name = namef.value;
    var surname = surnamef.value;
    var password = passwordf.value;
    var email = emailf.value;
    if (password.length >= 5 && email.includes('@') && !email.includes(' ')){
        name.trim();
        surname.trim();
        alert('Welcom!');
        return true;
    }
    else{
        alert('please enter correct values');
        return false;
    }
}


//6
document.getElementById('btn6').onclick = function(){
    out3.innerHTML = code.value.charCodeAt();
}