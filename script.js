// Mengubah teks heading setelah halaman dimuat
window.onload = function() {
    document.querySelector('h1').textContent = "Latihan JavaScript Selesai";

    // Menampilkan pesan selamat datang setelah halaman dimuat
    document.getElementById('output').innerHTML += "<br>Selamat datang di latihan JavaScript";
};

// Deklarasi variabel dan tipe data
let name = "John";
const age = 30;

// Menampilkan nama dan umur
document.getElementById('output').innerHTML += `<br>Nama: ${name}, Umur: ${age}`;

// Array dan perulangan
let fruits = ["Apple", "Banana", "Mango"];
fruits.forEach(function(fruit) {
    document.getElementById('output').innerHTML += `<br>Buah: ${fruit}`;
});

// Objek dan properti
let person = {firstName: "John", lastName: "Doe", age: 30};
document.getElementById('output').innerHTML += `<br>Nama Depan: ${person.firstName}, Nama Belakang: ${person.lastName}`;

// Membaca nilai input dan mengendalikan alur program
function cekNilai() {
    let value = parseInt(document.getElementById('userInput').value);
    let output = "";

    if (value > 10) {
        output = "Nilai lebih besar dari 10";
    } else if (value === 10) {
        output = "Nilai sama dengan 10";
    } else {
        output = "Nilai kurang dari 10";
    }

    document.getElementById('output').innerHTML = output;

    // Perulangan untuk menampilkan angka 1 hingga nilai yang dimasukkan
    for (let i = 1; i <= value; i++) {
        document.getElementById('output').innerHTML += `<br>${i}`;
    }
}

// Fungsi untuk menyapa
function greet(name) {
    return `Hello, ${name}`;
}

// Memanggil fungsi greet dengan argumen berbeda
document.getElementById('output').innerHTML += `<br>${greet("Alice")}`;
document.getElementById('output').innerHTML += `<br>${greet("Bob")}`;

// Fungsi untuk menghitung kuadrat
function calculateSquare(number) {
    return number * number;
}

// Memanggil fungsi calculateSquare
document.getElementById('output').innerHTML += `<br>Square of 4: ${calculateSquare(4)}`;
document.getElementById('output').innerHTML += `<br>Square of 5: ${calculateSquare(5)}`;

// Arrow function untuk penjumlahan
let add = (a, b) => a + b;
document.getElementById('output').innerHTML += `<br>Sum of 2 + 3: ${add(2, 3)}`;

// Array dan manipulasi dengan metode push dan forEach
let students = ["Alice", "Bob", "Charlie"];
students.push("David");
students.forEach(function(student) {
    document.getElementById('output').innerHTML += `<br>Student: ${student}`;
});

// Objek dan perulangan for...in
let car = {brand: "Toyota", model: "Corolla", year: 2020};
for (let key in car) {
    document.getElementById('output').innerHTML += `<br>${key}: ${car[key]}`;
}

// Array objek untuk beberapa mobil
let cars = [
    {brand: "Toyota", model: "Corolla", year: 2020},
    {brand: "Honda", model: "Civic", year: 2019},
    {brand: "Ford", model: "Focus", year: 2018}
];

cars.forEach(function(car) {
    document.getElementById('output').innerHTML += `<br>${car.brand} ${car.model} (${car.year})`;
});
