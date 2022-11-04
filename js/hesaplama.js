function hesapla(){
    let vize = document.getElementById("vize").value;
    let final = document.getElementById("final").value;

    let vizeNotu= Number(vize);
    let finalNotu = Number(final);
    
            let ortalama = vizeNotu * 0.3 + finalNotu * 0.7;
            let mesaj = "";
                if (ortalama >= 0 && ortalama <= 30) 
                    mesaj="Ortalama : " + ortalama + " = FF > Kaldınız";
                else if (ortalama >= 45 && ortalama <= 54) 
                mesaj="Ortalama : " + ortalama + " = DC > Kodşullu Geçtiniz";
                else if (ortalama >= 55 && ortalama <= 69) 
                mesaj="Ortalama : " + ortalama + " = CC > Geçtiniz";
                else if (ortalama >= 70 && ortalama <= 84) 
                mesaj="Ortalama : " + ortalama + " = BB > Geçtiniz";
                else if (ortalama >= 85 && ortalama <= 100) 
                mesaj="Ortalama : " + ortalama + " = AA > Geçtiniz";

            document.getElementById("sonuc").innerHTML = mesaj;
}
let hesaplaBtn=document.getElementById("hesapla");
    hesaplaBtn.onclick=hesapla;