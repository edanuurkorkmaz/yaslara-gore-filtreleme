/* Bir obje dizisinde yaşı 18’den büyük olan kişileri bulan bir fonksiyon yazın.

Adımlar:  

Obje dizisi üzerinde filter çalıştırılır.

Her obje için yaş > 18 kontrol edilir.

Yeni obje dizisi döndürülür. */

const students = [
    {
        id: 1,
        firstName: "Edanur",
        lastName: "Korkmaz",
        age: 22
    },
    {
        id:2,
        firstName: "Elif",
        lastName: "Güner",
        age: 21
    },
    {
        id:3,
        firstName: "Ekin",
        lastName: "Çoban",
        age: 22
    },
    {
        id:4,
        firstName: "Berk",
        lastName: "Cloud",
        age: 17
    }
]
    const overAges = students.filter(student => student.age >18 );

    console.log(overAges);
