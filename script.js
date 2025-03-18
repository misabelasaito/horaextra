function calcular() {
    let salario = parseFloat(document.getElementById("salario").value);
    let horasUteis = parseFloat(document.getElementById("horasUteis").value);
    let horasFinais = parseFloat(document.getElementById("horasFinais").value);

    let valorHora = salario / 200;
    let valorExtraUteis = horasUteis * valorHora;
    let valorExtraFinais = horasFinais * valorHora * 1.5;
    let totalReceber = valorExtraUteis + valorExtraFinais;

    document.getElementById("resultadoUteis").innerText = `R$ ${valorExtraUteis}`;
    document.getElementById("resultadoFinais").innerText = `R$ ${valorExtraFinais}`;
    document.getElementById("total").innerText = `R$ ${totalReceber}`;
}
