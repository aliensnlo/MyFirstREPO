// Прописать 20 условных операторов, используя переменные с прошлой домашки и сравнивая их между собой в любой логической последовательности

const head = 11;
const body = 11;
const age = 20;
const bodyage = 31;
const ok = false;
const k = "kasha";
const l = "lopatoi";
const z = "zero";
const x = "xleb";
const c = 1;
const v = 2;
const q = 3;
const n = 4;
const m = true;
const s = false;
const d = true;
const f = false;
const r = "Чебурашкой";
const lol = "smex";
const god = 25;
const e = true;
const a = 11;
const b = 10;

if (head == body) {
  console.log("Тело у меня супер");
} else {
  console.log("Тело не супер");
}

if (a > b) {
  console.log("a > b");
} else {
  console.log("a < b");
}

if (c < v) {
  console.log("c < v");
} else {
  console.log("c > v");
}

if (m == true) {
  console.log("true");
} else {
  console.log("false");
}

if (!d == true) {
  console.log("true");
} else {
  console.log("false");
}

// Набиваю руку

const obj = {
  id1: 1,
  id2: 2,
};
console.log(obj);

const obj1 = {
  id1: 1,
  id2: 2,
};
console.log(obj.id1, obj.id1);

const arr = ["айди1", "айди2", "айди3"];
console.log(arr[0]);

// СОЗДАТЬ 5 МАССИВОВ ОБЪЕКТОВ

const arr2 = [
  {
    id: 1,
  },
  {
    lil: 2,
  },
  {
    id: 1,
  },
];
console.log(arr2[1].lil);

const arr3 = [{ id: 4 }, { lil: 3 }, { id: 1 }];
if (arr3[0].id > arr3[1].lil) {
  console.log("id > lil");
} else {
  console.log("lil > id");
}

const arr4 = [{ id: 1 }, { od: 4 }, { bd: 3 }];
if (!arr4[1].od > arr4[2].bd) {
  console.log("od > bd");
} else {
  console.log("od < bd");
}

const arr5 = [{ lim: 33 }, { lim: "Конь" }, { lim: true }];
if ((arr5[1].lim = arr5[2].lim)) {
  console.log(arr5[0].lim);
} else {
  console.log("Не вышло");
}

const arr6 = [
  { pol: 1 },
  { rav: "Будующий сеньор" },
  { pravda: true },
  { pol: 22 },
];
if ((arr6[1].rav = arr6[2].pravda)) {
  console.log(arr6[0].pol);
} else {
  console.log(arr6[3].pol);
}
