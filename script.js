
function ejercicio1() {
    const resultadoDiv = document.getElementById("resultado1");
    
    let n = prompt("Ingrese hasta que números de la serie de Fibonacci que desea ver:");
    
    if (n === null) {
        resultadoDiv.className = "resultado info";
        resultadoDiv.innerHTML = "⏹️ Operación cancelada";
        return;
    }
    
    n = parseInt(n);
    
    if (isNaN(n) || n <= 0) {
        resultadoDiv.className = "resultado error";
        resultadoDiv.innerHTML = "❌ Error: Debe ingresar un número entero positivo mayor que 0";
        return;
    }
    
    let fibonacci = [];
    if (n >= 1) fibonacci.push(0);
    if (n >= 2) fibonacci.push(1);
    
    for (let i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i-1] + fibonacci[i-2]);
    }
    
    resultadoDiv.className = "resultado exito";
    resultadoDiv.innerHTML = `
        <strong>📊 Fibonacci (${n} números):</strong>
        <span class="serie">${fibonacci.join(", ")}</span>
    `;
    
    alert(`📊 Los primeros ${n} números de la serie de Fibonacci son:\n\n${fibonacci.join(", ")}`);
}

document.getElementById("formPrimo").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const numero = parseInt(document.getElementById("numeroPrimo").value);
    const resultadoDiv = document.getElementById("resultado2");
    
    if (isNaN(numero) || numero < 1) {
        resultadoDiv.className = "resultado error";
        resultadoDiv.innerHTML = "❌ Por favor ingresa un número entero positivo";
        return;
    }
    
    let esPrimo = true;
    
    if (numero === 1) {
        esPrimo = false;
    } else {
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                esPrimo = false;
                break;
            }
        }
    }
    
    resultadoDiv.className = "resultado exito";
    if (esPrimo) {
        resultadoDiv.innerHTML = `✅ El número <strong>${numero}</strong> <span style="color: #48bb78; font-weight: 600;"> es primo</span>`;
    } else {
        resultadoDiv.innerHTML = `❌ El número <strong>${numero}</strong> <span style="color: #fc8181; font-weight: 600;">NO es primo</span>`;
    }
    
    document.getElementById("numeroPrimo").value = "";
});
function ejercicio3() {
    const resultadoDiv = document.getElementById("resultado3");
    let sumaPares = 0;
    let sumaImpares = 0;
    let contador = 0;
    let numerosIngresados = [];
    
    alert("Ingresa números (ingresa 0 para terminar)");
    
    while (true) {
        let input = prompt(`Número #${contador + 1} (0 para terminar):`);
        
        if (input === null) {
            resultadoDiv.className = "resultado info";
            resultadoDiv.innerHTML = "⏹️ Operación cancelada";
            return;
        }
        
        let numero = parseInt(input);
        
        if (isNaN(numero)) {
            alert("❌ Por favor ingresa un número válido");
            continue;
        }
        
        if (numero === 0) {
            break;
        }
        
        numerosIngresados.push(numero);
        
        if (numero % 2 === 0) {
            sumaPares += numero;
        } else {
            sumaImpares += numero;
        }
        
        contador++;
    }
    
    if (contador === 0) {
        resultadoDiv.className = "resultado info";
        resultadoDiv.innerHTML = "ℹ️ No ingresaste ningún número";
        return;
    }
    
    resultadoDiv.className = "resultado exito";
    resultadoDiv.innerHTML = `
        <strong>📊 Resultados:</strong>
        <div class="detalle">Números ingresados: ${numerosIngresados.join(", ")}</div>
        <div class="detalle">➕ Suma de pares: <strong style="color: #48bb78;">${sumaPares}</strong></div>
        <div class="detalle">➖ Suma de impares: <strong style="color: #fc8181;">${sumaImpares}</strong></div>
        <div class="detalle">📝 Total de números: ${contador}</div>
    `;
    
    alert(`📊 Resultados:\n\n🔵 Suma de números pares: ${sumaPares}\n🔴 Suma de números impares: ${sumaImpares}\n📝 Total: ${contador} números`);
}
function ejercicio4() {
    const resultadoDiv = document.getElementById("resultado4");
    
    let n = prompt("Ingresa un número para calcular su factorial:");
    
    if (n === null) {
        resultadoDiv.className = "resultado info";
        resultadoDiv.innerHTML = "⏹️ Operación cancelada";
        return;
    }
    
    n = parseInt(n);
    
    if (isNaN(n) || n < 0) {
        resultadoDiv.className = "resultado error";
        resultadoDiv.innerHTML = "❌ Error: Debe ingresar un número entero no negativo";
        return;
    }
    
    let factorial = 1;
    
    for (let i = 2; i <= n; i++) {
        factorial *= i;
    }
    
    resultadoDiv.className = "resultado exito";
    resultadoDiv.innerHTML = `
        <strong>📊 Factorial de ${n}:</strong>
        <span class="serie">${n}! = ${factorial.toLocaleString()}</span>
    `;
    
    alert(`📊 El factorial de ${n} es:\n\n${n}! = ${factorial.toLocaleString()}`);
}

function ejercicio5() {
    const resultadoDiv = document.getElementById("resultado5");
    const numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let intentos = 0;
    let adivinado = false;
    let historial = [];
    
    alert("🎯 ¡Adivina el número secreto (1-10)!");
    
    while (!adivinado) {
        let input = prompt(`Intento #${intentos + 1}: Ingresa un número del 1 al 10:`);
        
        if (input === null) {
            resultadoDiv.className = "resultado info";
            resultadoDiv.innerHTML = `⏹️ Juego cancelado. El número era ${numeroSecreto}`;
            return;
        }
        
        let intento = parseInt(input);
        intentos++;
        
        if (isNaN(intento) || intento < 1 || intento > 10) {
            alert("❌ Por favor ingresa un número válido entre 1 y 10");
            intentos--;
            continue;
        }
        
        historial.push(intento);
        
        if (intento === numeroSecreto) {
            adivinado = true;
            resultadoDiv.className = "resultado exito";
            resultadoDiv.innerHTML = `
                <strong>🎉 ¡Felicidades! Adivinaste el número</strong>
                <div class="detalle">🔢 Número secreto: <strong>${numeroSecreto}</strong></div>
                <div class="detalle">🎯 Intentos: ${intentos}</div>
                <div class="detalle">📝 Historial: ${historial.join(", ")}</div>
            `;
            alert(`🎉 ¡Correcto! El número era ${numeroSecreto}\n\n`);
        } else if (intento < numeroSecreto) {
            alert("📈 Muy Bajo - Intenta con otro numero");
        } else {
            alert("📉 Muy Alto - Intenta con otro numero");
        }
    }
}
document.getElementById("formVocales").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const frase = document.getElementById("frase").value;
    const resultadoDiv = document.getElementById("resultado6");
    
    if (!frase.trim()) {
        resultadoDiv.className = "resultado error";
        resultadoDiv.innerHTML = "❌ Por favor ingresa una frase";
        return;
    }
    
    const vocales = "aeiouáéíóúAEIOUÁÉÍÓÚ";
    let contador = 0;
    let vocalesEncontradas = [];
    
    for (let i = 0; i < frase.length; i++) {
        if (vocales.includes(frase[i])) {
            contador++;
            if (!vocalesEncontradas.includes(frase[i].toLowerCase())) {
                vocalesEncontradas.push(frase[i].toLowerCase());
            }
        }
    }
    
    resultadoDiv.className = "resultado exito";
    resultadoDiv.innerHTML = `
        <strong>📊 Análisis de vocales:</strong>
        <div class="detalle">📝 Frase: "${frase}"</div>
        <div class="detalle">🔤 Total de vocales: <strong style="color: #667eea; font-size: 1.2em;">${contador}</strong></div>
        <div class="detalle">🔹 Vocales encontradas: ${vocalesEncontradas.length > 0 ? vocalesEncontradas.join(", ") : "Ninguna"}</div>
    `;
    
    document.getElementById("frase").value = "";
});
function ejercicio7() {
    const resultadoDiv = document.getElementById("resultado7");
    
    let n = prompt("Ingresa la cantidad de números de la serie (0,1,1,0,0,0,1,1,1,1,0...) que deseas ver:");
    
    if (n === null) {
        resultadoDiv.className = "resultado info";
        resultadoDiv.innerHTML = "⏹️ Operación cancelada";
        return;
    }
    
    n = parseInt(n);
    
    if (isNaN(n) || n <= 0) {
        resultadoDiv.className = "resultado error";
        resultadoDiv.innerHTML = "❌ Error: Debe ingresar un número entero positivo mayor que 0";
        return;
    }
    
    let serie = [];
    let count = 0;
    let valor = 0;
    let repeticiones = 1;
    
    while (serie.length < n) {
        for (let i = 0; i < repeticiones && serie.length < n; i++) {
            serie.push(valor);
        }
        valor = valor === 0 ? 1 : 0;
        repeticiones++;
    }
    resultadoDiv.className = "resultado exito";
    resultadoDiv.innerHTML = `
        <strong>📊 Serie de 0 y 1 (${n} números):</strong>
        <span class="serie">${serie.join(", ")}</span>
        <div class="detalle">📌 Patrón: 0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1...</div>
    `;
   
    alert(`📊 Los primeros ${n} números de la serie son:\n\n${serie.join(", ")}`);
}