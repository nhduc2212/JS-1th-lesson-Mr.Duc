// ======First exercise=====
// -----3-blocks diagram-----
// Input: 1-day-salary(100.000); number-of-working-day(user-Input)
// Output: total-salary
// Process: total-salary=1-day-salary*number-of-working-day
// --------------------------
var Salary=100000;
let dateOfWorking = window.prompt("Nhập số ngày làm việc:");
var totalSalary;
totalSalary = Salary*dateOfWorking;
console.log("Tiền lương của nhân viên này là: ",totalSalary);
// --------------------------

// ======Second exercise=====
// -----3-blocks diagram-----
// Input: number a, number b, number c, number d, number e; (user-Input)
// Output: average
// Process: average = (number a + number b + number c + number d + number e)/5
// --------------------------
var ave;
var a = 1;
var b = 2;
var c = 3;
var d = 4;
var e = 5;
ave = (a + b + c + d + e)/5;
console.log("Trung bình của 5 số ", a, b, c, d, e, "là: ", ave);
// --------------------------

// ======Third exercise=====
// -----3-blocks diagram-----
// Input: Usd exchange rate (23.500); amount of USD (user-Input)
// Output: input USD exchanged to VND
// Process: input USD exchanged to VND = amount of USD * Usd exchange rate;
// --------------------------
var usdExrate=23500;
var numOfDollar;
let money=window.prompt("Nhập số tiền USD");
numOfDollar = usdExrate*money;
console.log("Số tiền USD được quy đổi thành ", numOfDollar, "VNĐ");
// --------------------------

// ======Fourth exercise=====
// -----3-blocks diagram-----
// Input: Width of the rectangle, length of the rectangle
// Output: perimeter, area of the rectangle
// Process: 
    // perimeter of the rectangle = (Width of the rectangle + length of the rectangle) * 2
    // area of the rectangle = Width of the rectangle * length of the rectangle
// --------------------------
var Width=10;
var length=5;
var perimeter;
var area;
perimeter=(Width+length)*2;
area=Width*length;
console.log("Chu vi của hình chữ nhật là ",perimeter, ", Diện tích của hình chữ nhật là: ", area);
// --------------------------

// ======Fifth exercise=====
// -----3-blocks diagram-----
// Input: number a (user-Input, 2-digit)
// Output: Digit sum of number a
// Process: 
    // First digit of a = a/10;
    // Second digit of a = a%10;
    // Digit sum of number a = First digit of a + Second digit of a;
// --------------------------
let numberA=window.prompt("Nhập số cần tính ký số: ");
var sumDigit;
var firstDigit;
var secondDigit;
firstDigit=Math.floor(numberA/10);
secondDigit=numberA%10;
sumDigit=firstDigit+secondDigit;
console.log("Tổng 2 ký số của ", numberA, " là: ",sumDigit)
// --------------------------

