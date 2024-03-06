function mostra() {
    var pizza = document.getElementById("selectPizza").value;
    var contorno = document.getElementById("selectContorno").value;
    var bevanda = document.getElementById("selectBevanda").value;
    var piz = pizza.split(".");
    var cont = contorno.split(".");
    var bev = bevanda.split(".");
    var prezzo = parseInt(piz[1]);
    var prezzo2 = parseInt(cont[1]);
    var prezzo3 = parseInt(bev[1]);
    var res = document.getElementById("result");
    var tot = prezzo + prezzo2 + prezzo3;
    res1 = "Hai scelto la pizza " + piz[0] + ", come contorno " + cont[0] + " e come bevanda " + bev[0] + "<br> Il prezzo totale è: " + tot + " euro.";
    res.innerHTML = res1;
    res.style.textAlign = "center";
    res.style.fontSize = "24px";

    var marg = document.getElementById("margherita");
    var am = document.getElementById("americana");
    var ort = document.getElementById("ortolana");
    var buf = document.getElementById("bufala");
    var cap = document.getElementById("capricciosa");
    var pat = document.getElementById("patatine");
    var zuc = document.getElementById("zucchine");
    var rad = document.getElementById("radicchio");
    var ac = document.getElementById("acqua");
    var bib = document.getElementById("bibite");
    var bir = document.getElementById("birra");

    if (piz[0] == "margherita") {
        marg.style.display = "inline-block";
        am.style.display = "none";
        ort.style.display = "none";
        buf.style.display = "none";
        cap.style.display = "none";
    } else if (piz[0] == "americana") {
        am.style.display = "inline-block";
        marg.style.display = "none";
        ort.style.display = "none";
        buf.style.display = "none";
        cap.style.display = "none";
    } else if (piz[0] == "ortolana") {
        ort.style.display = "inline-block";
        am.style.display = "none";
        marg.style.display = "none";
        buf.style.display = "none";
        cap.style.display = "none";
    } else if (piz[0] == "bufala") {
        buf.style.display = "inline-block";
        am.style.display = "none";
        ort.style.display = "none";
        marg.style.display = "none";
        cap.style.display = "none";
    } else if (piz[0] == "capricciosa") {
        cap.style.display = "inline-block";
        am.style.display = "none";
        ort.style.display = "none";
        buf.style.display = "none";
        marg.style.display = "none";
    }

    if (cont[0] == "patatine") {
        pat.style.display = "inline-block";
        zuc.style.display = "none"
        rad.style.display = "none";
    } else if (cont[0] == "zucchine") {
        pat.style.display = "none";
        zuc.style.display = "inline-block"
        rad.style.display = "none";
    } else if (cont[0] == "radicchio") {
        pat.style.display = "none";
        zuc.style.display = "none"
        rad.style.display = "inline-block";
    }

    if (bev[0] == "acqua") {
        ac.style.display = "inline-block";
        bib.style.display = "none";
        bir.style.display = "none";
    } else if (bev[0] == "bibite") {
        ac.style.display = "none";
        bib.style.display = "inline-block";
        bir.style.display = "none";
    } else if (bev[0] == "birra") {
        ac.style.display = "none";
        bib.style.display = "none";
        bir.style.display = "inline-block";
    }

    var imm = document.getElementById("immagini");
    imm.style.textAlign = "center";
    imm.style.marginTop = "40px";


}
