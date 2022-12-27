function Clock(hora, minut, segon, sentit = true, estat) {
    this.hora = hora;
    this.minut = minut;
    this.segon = segon;
    this.sentit = sentit;
    this.estat = estat;
}

Clock.prototype.arrenca = function() {
    if (this.estat == false) this.estat = true;
    this.ref = setTimeout(() => {
        if (this.sentit) {
            this.segon++;
            if (this.segon == 60) {
                this.segon = 0;
                this.minut += 1;
                if (this.minut == 60) {
                    this.minut = 0;
                    this.hour += 1;
                }
            }
        } else {
            if (this.segon == 0) {
                this.segon = 59;
                this.minut -= 1;
                if (this.minut == 0) {
                    this.minut = 59;
                    this.hour -= 1;
                }
            } else {
                this.segon--;
            }

        }
    }, 1000);
}

Clock.prototype.atura = function() {
    if (this.estat == true) this.estat = false;
    clearInterval(this.ref);
}
Clock.prototype.reset = function() {
    Clock.atura();
    this.segon = 0;
    this.minut = 0;
    this.hora = 0;
}
Clock.prototype.set = function(hora, minut, segon) {
    Clock.atura();
    this.segon = segon;
    this.minut = minut;
    this.hora = hora;
}
Clock.prototype.formata = function() {
    let cad_segon = this.segon.toString();
    let cad_minut = this.minut.toString();
    let cad_hora = this.hora.toString();
    return cad_hora + ':' + cad_minut + ':' + cad_segon;
}


//PROBANDO RELOJES
let hoy = Date.now();
let data = new Date(hoy);
let reloj1 = new Clock(data.getHours(), data.getMinutes(), data.getSeconds(), true, true)
let reloj2 = new Clock(0, 0, 0, true, true)
let reloj3 = new Clock(0, 5, 0, false)
let contador = 0;

function pintaHora() {

    document.getElementById("div1").innerHTML = 'reloj 1: ' + (reloj1.hora > 9 ? reloj1.hora : "0" + reloj1.hora) +
        ":" + (reloj1.minut > 9 ? reloj1.minut : "0" + reloj1.minut) +
        ":" + (reloj1.segon > 9 ? reloj1.segon : "0" + reloj1.segon);
    document.getElementById("div3").innerHTML = 'reloj 3: ' + (reloj3.hora > 9 ? reloj3.hora : "0" + reloj3.hora) +
        ":" + (reloj3.minut > 9 ? reloj3.minut : "0" + reloj3.minut) +
        ":" + (reloj3.segon > 9 ? reloj3.segon : "0" + reloj3.segon);
    if (contador > 10) {
        reloj2.arrenca();
        document.getElementById("div2").innerHTML = 'reloj 2: ' + (reloj2.hora > 9 ? reloj2.hora : "0" + reloj2.hora) +
            ":" + (reloj2.minut > 9 ? reloj2.minut : "0" + reloj2.minut) +
            ":" + (reloj2.segon > 9 ? reloj2.segon : "0" + reloj2.segon);
    }
    reloj1.arrenca();
    contador++
    if (reloj2.minut % 2 == 0) {
        reloj3.atura
    } else {
        reloj3.arrenca();
    }
    inicio();
}

function inicio() {
    t = setTimeout(pintaHora, 1000);
}



inicio()