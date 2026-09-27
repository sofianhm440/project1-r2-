const nama = "sofyan";
let usia = 5  ;

const biodata = document.getElementById('biodata');

function swallow() {
    let generasi;

    if(usia >= 2 && usia <10) { 
        generasi = "gen beta"
    } 
    else if (usia >= 10 && usia < 17) {
        generasi = "gen alpha "
    } 
    else if (usia >= 17 && usia < 30) {
        generasi = "gen z"
    }
    else if (usia >= 30) {
        generasi = "gen milenial"
    }
    else {
        generasi = "bayik tapi bayik tidak masuk generasi dulu yahhh"
    }

    return biodata.innerHTML = generasi;

}

console.log(nama);
console.log(usia);

swallow();