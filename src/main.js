//javascript -->Progaming Language
/*
Progaming language
1. output and input
2. variable and data type
3. condition (if else)
4. looping (perulangan)
5. function
*/

//output
//1. using console.log()
console.log("Hello World!");
console.log("Welcome to SMA ABBS Surakarta");
//2. using alert()
//alert("Welcome to My Website")
//3. using innerHTML
document.getElementById("name").innerHTML="My Name is Zacky Fitransyah";

//variable --> to store data (untuk menyimpan data)
//variable : let, var, const
//let 
let firstname = "Zacky";
console.log(firstname);
let lastname = "Fitransyah";
console.log(lastname);
console.log(firstname, lastname);
let a = 5;
console.log(a);
var b = 5;
var b = 6;
console.log(b);
const c = 5;
console.log(c);

//Type Data
//1. string = character --> use ""/''
//2. number (integer, float)
//integer = bilangan bulat
//float = bilangan pecahan/desimal
//3. boolean = true, false 
let data1 = "SMA ABBS Surakarta"; //string
let data2 = "100"; //string
let data3 = 50; //integer
let data4 = 25.25; //float
let data5 = true; //boolean

//operator
/*1. operatonr aritmatika
- penjumalahan (+)
- pengurangan (-)
- pekalian (*)
- pembagian (/)
- perpangkatan (**)
- modulus (%) --> sisa hasil bagi
*/

let number1 = 200;
let number2 = 25;
console.log(number1 + number2);
console.log(number1 - number2);
console.log(number1 * number2);
console.log(number1 / number2);
console.log(number1 ** number2);
console.log(number1 % number2);

//menghitung persegi panjang -->luas = panjang * lebar
let panjang = 15;
let lebar = 5;
let luas = panjang * lebar;
//console.log("Luas persegi panjang adalah ", luas);
//Membuat rumus BMI
/*let tinggi = 1.8;
let berat = 55;
let BMI = berat /(tinggi**2)*10000;
console.log("Berat Badan = ", berat);
console.log("Tinggi Badan = ", tinggi);
console.log("BMI ", BMI);*/

/*2.Comparison operators
- equel tp(==)
- not equel (!=)
- greater than (>)
- great than or equel (>=)
- less than (<)
- less than or equal (<=)
*/
let x = 10;
console.log (x == 10); //true
console.log (x != 10); //false
console.log (x > 10); //false
console.log (x >= 10); //true
console.log (x < 10); //true
console.log (x <= 10); //true

/*
3. Logical operators
- AND (&&) --> AKAN BERNILAI true apabila semua kondisi hasilnya true
- OR (||) --> AKAN BERNILAI true apabila paling tidak ada satu kondisi yang nilainya true
- NOT (!) --> NILAI KEBALIKAN 
*/

//condition
/*1 condition
if (condition){
    action;
}
*/

let y = 10;
if (y >= 10){
    console.log("Good Morning");
}

/*2 conditions
if (condition){
    action 1;
}
else{
    action 2;
}
*/
let p = 10;
if (p >= 10){
    console.log("Good morning");
}
else{
    console.log("Good Afternoon");
}

//jika nilai >=75, maka lulus
//jika nilai <=, maka tidak lulus


let nilai = 80;
if (nilai >= 75){
    console.log("lulus");
}
else{
    console.log("tidak lulus");
}

//jika bilangan genap, maka genap
//jika bilangan ganjil, maka ganjil 

let bilangan = 9;
if (bilangan % 2 == 0){
    console.log("genap");
}
else{
    console.log("ganjil");
}

/* more then 2 conditions if(condition 1){
    action 1
}
else if (condition 2){
    action 2;
}
else{
    action 3    
}
*/

let tinggi = 1.8;
let berat = 55;
let BMI = berat /(tinggi**2)*10000;
console.log("Berat Badan = ", berat);
console.log("Tinggi Badan = ", tinggi);
console.log("BMI ", BMI);

//jika BMI < 18,5, maka underwight
//jika BMI 18,5 - 24,9, healthy/ normal wight
//jika BMI 24,9 - 29,9,maka overwight
//jika > 30,0,obese

if (BMI < 18.5){
    console.log("underweight");
}
else if (BMI > 18.5 && BMI <= 24.9)
    console.log("healthy/ normal weight");

//grade
//jika nilai >= 90, maka gradenya A
//jika nilai >= 80, maka gradenya B
//jika nilai >= 70, maka gradenya C
//jika nilai >= 60, maka gradenya D
let nilai2 = 85;
if (nilai2 >= 90)
    console.log("grade A");
else if (nilai2 >= 80)
    console.log("grade B");
else if (nilai2 >= 70)
    console.log("grade C");
else if (nilai2 >= 60)
    console.log("grade D");

//looping (perulangan);

/*1. using "for"
fpr(first;end;step){
    action;
}
*/
console.log("------ using for ------");
for (let i = 1; i <= 10; i++){
    console.log("zacky fitransyah", i);
}

/*2. using "while"
while(condition){
    action;
}
*/
console.log("------ using while ------");
let j = 1;
while (j <= 10){
    console.log("zacky fitransyah", j);
    j++;
}

/*3. using "do while"
do{
    action;
}
while(condition);
*/
console.log("------ using do while ------");
let m = 1;
do{
    console.log("zacky fitransyah", m);
    m++;
}
while (m < 10);