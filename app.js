//While1. A va B butun musbat sonlari berilgan (A> B). A usunlikdagi kesmada
//maksimal darajada B kesma joylashtirilgan. A kesmaning bo'sh qismini aniqlovchi
//programma tuzilsin. Ko'paytirish va bo'lish amallarini ishlatmang.
let a = +prompt("A kesmani kiriting:");
let b = +prompt("B kesmani kiriting:");
let count = 0;
while (a >= b) {
  a -= b;
  count++;
}
console.log("Qoldiq " + a);
//While2. A va B butun musbat sonlari berilgan (A > B). A usunlikdagi kesmada B
//kesmadan nechta joylashtirish mumkinligini aniqlovchi programma tuzilsin.
//Ko'paytirish va bo'lish amallarini ishlatmang.
console.log(count);
//While3. n butun soni berilgan (n > 0). Agar n soni 3 ning darajasi bo'lsa "3 - ning
//darajasi", aks xolda "3 - ning darajasi emas” degan natija chiqaruvchi programma
//tuzilsin. Qoldiqli bo'lish va bo'lish amallarini ishlatmang.
let son2 = +prompt("Son kiriting:");
let daraja = 1;
while (daraja <= son2) {
  if (daraja === son2) {
    console.log("3 - ning darajasi");
    break;
  }
  daraja = daraja * 3;
}
if (daraja > son2) {
  console.log("3 - ning darajasi emas");
}
//While4. n va m butun musbat sonlari berilgan (n > m). n sonini m soniga bo'lib
//butun va qoldiq qismlarini bo'lish va qoldiqni olish amallarini ishlatmasdan
//topuvchi programma tuzilsin.
let n1 = +prompt("1 soni kiriting:");
let n2 = +prompt("2 soni kiriting:");
let natija = 0;
while (n1 >= n2) {
  n1 -= n2;
  natija++;
}
console.log("Qoldiq " + n1);
console.log(natija);
//While5. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash
//orqali, berilgan son raqamlarini teskari tartibda chiqaruvchi programma tuzilsin.
let num = prompt("Son kiriting:");
while (num > 0) {
  num--;
  console.log(num);
}
//While6. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash
//orqali, berilgan son raqamlari yig'indisini va raqamlari sonini chiqaruvchi
//programma tuzilsin.

//While7. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash
//orqali, berilgan son raqamlarining orasida 2 raqami bor-yo'qligini aniqlovchi
//programma tuzilsin.

//While8. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash
//orqali, berilgan son raqamlarining orasida toq raqamlar bor-yo'qligini aniqlovchi
//programma tuzilsin.

//While9. Palindromik songa tekshirish dasturini yozing. True yoki False qaytarsin.
//Palindromik son – boshidan va oxiridan o’qilish bir xil bo’lgan son, masalan
//1345431, 45788754
let son = prompt("Son kiriting:").toLowerCase();
let teskari2 = "";
let i = son.length - 1;
while (i >= 0) {
  teskari2 += son[i];
  i--;
}
if (son === teskari2) {
  console.log(true);
} else {
  console.log(false);
}

//While10. n butun soni berilgan (n > 1). N sonini tub yoki tub emasligini aniqlovchi
//programma tuzilsin.
let n = +prompt("Son kiriting:");
let s = 2;
let tub = true;
while (s < n) {
  if (n % s === 0) {
    tub = false;
  }
  s++;
}
console.log(tub);
