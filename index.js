//  task1
let sayi1 = parseInt(prompt("Birinci:"));
let sayi2 = parseInt(prompt("İkinci:"));
let sayi3 = parseInt(prompt("Üçüncü:"));

Üç sayının ortalamasını hesabla
let ortalama = (sayi1 + sayi2 + sayi3) / 3;

console.log("result:  " + ortalama);

// task2
  
let sayi1 = parseInt(prompt("Birinci:"));
let sayi2 = parseInt(prompt("İkinci:"));
let sayi3 = parseInt(prompt("Üçüncü:"));


let result = (sayi1 + sayi2 > sayi3) && (sayi1 + sayi3 > sayi2) && (sayi2 + sayi3 > sayi1);


console.log(result);

// task3

let name = prompt("Ad:");
let surname = prompt("Soyad:");
let fullName = name + " " + surname;
// cavabi ekrana yazdır
console.log("Tam Adınız: " + fullName)

// task4


let boy = parseFloat(prompt("Boy:"));
let kilo = parseFloat(prompt("Kilo"));

let bmi = kilo / (boy * boy);

let hal;
if (bmi > 25) {
    hal = "artiq cekili";
} else if (bmi >= 18.5 && bmi <= 24.9) {
    hal = "Normal";
} else {
    hal = "ariq";
}

// ekrana yazdır
console.log(bmi);
console.log("hal: " + hal);



   
   

   
