//Js dosyamızı html dosyamızın bulundğu yere oluşturduk
//Şimdi butonumuzu ve yazimizi tanıtalım.

var buton = document.getElementById("Buton"); //Yeşil kısma verdiğimiz idyi yazıyoruz.
var yazi = document.getElementById("Yazi");

//Şimdi değişme kısmını yazalım.

buton.addEventListener("click",() =>{
    yazi.innerHTML = "Merhaba!!!" //Yeşil kısma istediğiniz yazıyı yazabilirsiniz.
})

//şimdi html dosyamıza geri dönüp js dosyamızı ekleyelim.
