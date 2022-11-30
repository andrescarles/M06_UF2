//ACTIVIDAD 1
var Asignatura = {
    ref: 'BBDD',
    nom: 'Bases de Dades',
    hores: 180,
    UF: ['UF1', 'UF2', 'UF3', 'UF4'],
    professor: 'Pep Parés',
    alumnes: ['alu1', 'alu2', 'alu13', 'alu4', 'alu5']
};
for (propiedades in Asignatura) {
    console.log(propiedades)
}
//ACTIVIDAD 2
delete Asignatura.alumnes
for (propiedades in Asignatura) {
    console.log(propiedades)
}
//ACTIVIDAD 3
console.log(Object.keys(Asignatura).length)
    //ACTIVIDAD 4
var library = [{
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }
];
for (x in library) {
    console.log(library[x])
}
//ACTIVIDAD 5
function Cilindro(r, h) {
    this.r = r;
    this.h = h;
}

Cilindro.prototype.volumen = function() {
    return Math.PI * Math.pow(this.r, 2) * this.h
}
resultado = new Cilindro(3, 4)
console.log(resultado.volumen().toFixed(4))

//ACTIVIDAD 6
var circulo = {
        radio: 5,
        color_contorn: '',
        color_fons: '',
        gruix_contorn: '',
        perimetro() {
            console.log(2 * Math.PI * radio);
        },
        area() {
            console.log(Math.PI * Math.pow(r, 2));
        }
    }
    //ACTIVIDAD 7
function metodos(obj) {
    for (var id in obj) {
        if (typeof(obj[id]) == "function") {
            console.log(obj[id])
        }
    }
}
metodos(circulo)
    //ACTIVIDAD 8
let x = []
for (var id in circulo) {
    x.push([id, circulo[id]])
}
console.log(x)

//ACTIVIDAD 9
let objeto = {
    propiedad1: 'uno',
    propiedad2: 'dos',
    propiedad3: 'tres'
}
let invertido = new Object();
for (var id in objeto) {
    invertido[objeto[id]] = id
}
for (var id in invertido) {
    console.log(id + " " + invertido[id])
}
//ACTIVIDAD 10
function propiedadObjeto(prop, obj) {
    for (var id in obj) {
        if (prop == id) {
            return true
        }
    }
    return false
}
console.log(propiedadObjeto('propiedad1', objeto))