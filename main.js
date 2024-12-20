/* Bir obje dizisinde yaşı 18’den büyük olan kişileri bulan bir fonksiyon yazın.

Adımlar:  

Obje dizisi üzerinde filter çalıştırılır.

Her obje için yaş > 18 kontrol edilir.

Yeni obje dizisi döndürülür. */

const people = [
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
    function overEighteen(people){
        return people.filter(person => person.age > 18);
    }

    const justChecking = overEighteen(people);

    console.log(justChecking);
    

    