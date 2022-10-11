

var lista = new Array();
lista[0] = "Gdzie kucharek sześć tam nie ma co jeść";
lista[1] = "Z niewolnika nie ma pracownika";
lista[2] = "Nie oceniaj ksiązki po okładce";
lista[3] = "Żadna praca nie hańbi";
lista[4] = "Idzie luty, podkuj buty";
lista[5] = "W marcu jak w garncu";
lista[6] = "Kiedy się jaskółka zniża, deszcz się do nas zbliża";
lista[7] = "Niedaleko pada jabłko od jabłoni";
lista[8] = "Nieszczęścia chodzą parami";
lista[9] = "Tonący brzytwy się chwyta";
lista[10] = "Dobrymi chęciami jest piekło wybrukowane";
lista[11] = "Kuj żelazo, póki gorące";
lista[12] = "Nie szata zdobi człowieka";
lista[13] = "Śmiech to zdrowie";
lista[14] = "Zapomniał wół, jak cielęciem był";
lista[15] = "Budować zamki na lodzie";
lista[16] = "Co z oczu, to z serca";
lista[17] = "cudza praca nie wzbogaca";
lista[18] = "dla kota za dużo, dla psa za mało";
lista[19] = "dla każdej matki miłe jej dziatki";
lista[20] = "Jak kamień w wodę";
lista[21] = "Jak Kuba Bogu, tak Bóg Kubie";
lista[22] = "Jak się cenisz, tak cię cenią";
lista[23] = "Jak pies je, to nie szczeka, bo mu miska ucieka";
lista[24] = "Jak sobie pościelesz, tak się wyśpisz";
lista[25] = "Jak spadać, to z dobrego konia";
lista[26] = "Każdy kij ma dwa końce";
lista[27] = "Każdy ma to, na co sobie zasłużył";
lista[28] = "Kochanego ciała nigdy za wiele";
lista[29] = "Lepszy własny chleb niż pożyczona bułka";
lista[30] = "Tonący brzytwy się chwyta";
lista[31] = "Dobrymi chęciami jest piekło wybrukowane";
lista[32] = "Licho nie śpi";
lista[33] = "Ładna buzia to połowa posagu";
lista[34] = "Ładny kwiatek krótko przy drodze stoi";
lista[35] = "Mądrej głowy włos się nie trzyma";
lista[36] = "Mokry deszczu się nie boi";
lista[37] = "Mieć dwie lewe ręce";
lista[38] = "Miłość od pierwszego wejrzenia";
lista[39] = "Nawet dobre pióro kleksy robi";
lista[40] = "Na bezrybiu i rak ryba";
lista[41] = "Na pieniądzach świat nie stoi";
lista[42] = "Natura ciągnie wilka do lasu";
lista[43] = "Nawet mistrzowi nie zaszkodzi nauka";
lista[44] = "Pasuje jak wół do karety";
lista[45] = "Praca nie zając, nie ucieknie";
lista[46] = "Stary, ale jary";
lista[47] = "Styczeń pogodny wróży rok płodny";
lista[48] = "Szczęściarzowi nawet wół się ocieli";
lista[49] = "Trafić z deszczu pod rynnę";




var x = Math.floor((Math.random() * 49)+1);
console.log(x);

var haslo = lista[x];

haslo = haslo.toLocaleUpperCase();
let dlugosc = haslo.length;


let ile_skuch = 0;

let haslo1 = "";

for(i = 0;i < dlugosc; i++)
{
    if(haslo.charAt(i)==" ")
         haslo1 = haslo1 + " ";
    else if(haslo.charAt(i)==",")
        haslo1 = haslo1 + ","
    else if(haslo.charAt(i)=="?")
        haslo1 = haslo1 + "?" 
        else if(haslo.charAt(i)=="!")
        haslo1 = haslo1 + "!"    
    else
        haslo1 = haslo1 + "-";

}


function wypisz_haslo()
{
    document.getElementById("plansza").innerHTML = haslo1;
}

window.onload = start;


let litery = [];
litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "Q";
litery[22] = "P";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";



function start()
{
    let tresc_diva = "";

    for (i=0;i<=34;i++)
    {
        let element = "lit" + i;
        tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')" id="'+ element +'">'+litery[i]+'</div>';
        if((i + 1) % 7 == 0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>';
    }
    document.getElementById("alfabet").innerHTML = tresc_diva;
    wypisz_haslo();
}


String.prototype.ustawZnak = function(miejsce,znak)
{
    if (miejsce > this.length - 1) 
    return this.toString();

    else return this.substr(0,miejsce) + znak + this.substr(miejsce + 1);  
}

function sprawdz(nr)
{
    

    let trafiona = false;

    for(i=0;i<dlugosc;i++)
    {
        if (haslo.charAt(i)==litery[nr])
        {
            
            haslo1 = haslo1.ustawZnak(i,litery[nr]);
            trafiona = true;
        }
    }

    if (trafiona == true)
    {
        let element = "lit" + nr;
        document.getElementById(element).style.background = "rgb(98, 163, 98)";
        document.getElementById(element).style.color = "rgba(5, 39, 5, 0.883)";
        document.getElementById(element).style.border = "3px solid rgb(98, 163, 98)";
        document.getElementById(element).style.cursor = "default";
        

        wypisz_haslo();

    }
    else{
        let element = "lit" + nr;
        document.getElementById(element).style.background = "rgba(126, 36, 36, 0.876)";
        document.getElementById(element).style.color = "rgba(41, 4, 4, 0.959)";
        document.getElementById(element).style.border = "3px solid rgba(126, 36, 36, 0.876)";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick",";");
       


        //skucha
        ile_skuch++;
        let obraz = "./img/wis_" + ile_skuch + ".png";
        document.getElementById("szubienica").innerHTML = '<img src="' + obraz + '"alt=""/>';
        

    }
        //wygrana
        if (haslo==haslo1)
        document.getElementById("alfabet").innerHTML = "Brawo! Udało Ci się odgadność hasło: <br>" + haslo + '<br><br><span class="reset" id="reset" onclick="location.reload()">Jeszcze raz?</span>'

        //przegrana
        if(ile_skuch >= 9)
        document.getElementById("alfabet").innerHTML = "Uuuuu! <br> Niestety nie udało Ci się odgadnąć hasła: <br>" + haslo + '<br><br><span class="reset" id="reset" onclick="location.reload()">Jeszcze raz?</span>'

}


