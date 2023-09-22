window.alert('As caixas para inserir número ja estão no negativo pois pelo celular não é possível digitar um valor negativo.')

const res = document.getElementById('res-container')
const valorA = document.getElementById('valorA')
const valorB = document.getElementById('valorB')
const valorC = document.getElementById('valorC')



function calcular() {

    var a = valorA.value;
    var b = valorB.value;
    var c = valorC.value;

    if (a != -0 && b != -0 && c != -0) {

        
        var d1 = b**2
        var d2 = -4 * a * c
        var d = d1 + d2
        var rd = d**0.5
        
        var xl1 = -b - rd
        var xl2 = 2 * a
        var xl = xl1 / xl2
        
        var xll1 = -b + rd
        var xll2 = 2 * a
        var xll = xll1 / xll2
        
        
        
        res.innerHTML = `<div id="res">
        <div>
        <p>Δ = ${d1} – 4·${a}·${c}</p>
        <p>Δ = ${d1} + ${d2}</p>
        <p>Δ = ${d}</p>
        </div>
        <hr>
        <div>
        <p class="sublinhar">x = – ${b} ± √${d}</p>
        <p>2.${a}</p>
        </div>
        <div>
        <p class="sublinhar"> – ${b} ± ${rd}</p>
        <p>${xl2}</p>
        </div>
        <hr>
        <div>
        <p class="sublinhar">x1 = – ${b} - ${rd}</p>
        <p>${xl2}</p>
        </div>
        <div>
        <p class="sublinhar"> – ${xl1}</p>
        <p>${xl2}</p>
        </div>
        <div>
        <p>x1 = ${xl}</p>
        </div>
        <hr>
        <div>
        <p class="sublinhar">x2 = – ${b} + ${rd}</p>
        <p>${xl2}</p>
        </div>
        <div>
        <p class="sublinhar"> ${xll1}</p>
        <p>${xl2}</p>
        </div>
        <div>
        <p>x2 = ${xll}</p>
        </div>
        <hr>
        <div>
        <button onclick='refazer()'>Refazer</button>
        </div>
        </div>`
    } else {
        window.alert('Operação inválida, verique os números e tente de novo.')
    }
}

function refazer() {
    res.innerHTML = ''
    valorA.value = '-0'
    valorB.value = '-0'
    valorC.value = '-0'
}