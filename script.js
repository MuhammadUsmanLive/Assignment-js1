// Alert Name

document.getElementById("alertName").onclick= function(){
    document.getElementById("statement").innerHTML = ""
    alert("Muhammad Usman")
}
// Alert Number
document.getElementById("alertNum").onclick=function(){
    document.getElementById("statement").innerHTML =''
    alert(" +92 3240634259")
}

// Variable Name
document.getElementById("varName").onclick = function(){
    let varName;
    document.getElementById("statement").innerText = "Variable Name"
    document.getElementById("output").innerText = `varName `
}
// CamelCase Example

document.getElementById("camelCase").onclick = function(){
    document.getElementById("statement").innerText = "Example of camelCase"
    document.getElementById("output").innerText = "camelCase" 
}

// Sum 2 Numbers
document.getElementById("sum").onclick = function(){
    let a = 72;
    let b= 20;
    let sum = a+b;
    document.getElementById("statement").innerHTML = `a = ${a} <br/> b = ${b} <br/> `
    document.getElementById("output").innerText = `a + b = ${sum}`
}
// Subtract 2 Numbers
document.getElementById("sub").onclick = function(){
    let a = 50;
    let b= 35;
    let sub = a-b;
    document.getElementById("statement").innerHTML = `a = ${a} <br/> b = ${b} <br/> `
    document.getElementById("output").innerText = `a - b = ${sub}`
}
// Multiply 2 Numbers
document.getElementById("mul").onclick = function(){
    let a = 36;
    let b= 9;
    let mul = a*b;
    document.getElementById("statement").innerHTML = `a = ${a} <br/> b = ${b} <br/> `
    document.getElementById("output").innerText = `a * b = ${mul}`
}
// Divide 2 Numbers
document.getElementById("div").onclick = function(){
    let a = 9;
    let b= 3;
    let c = 5;
    let result = a/b * c;
    document.getElementById("statement").innerHTML = `a = ${a} <br/> b = ${b} <br/> c = ${c} `
    document.getElementById("output").innerText = `a / b * c = ${result}`
}

// Calculate 2 Numbers
document.getElementById("cal").onclick = function(){
    let a = 45;
    let b= 9;
    let result = a/b;
    document.getElementById("statement").innerHTML = `a = ${a} <br/> b = ${b} `
    document.getElementById("output").innerText = `a / b = ${result}`
}

// clear Statement
document.getElementById("clearStatement").onclick = function(){
    document.getElementById("statement").innerText = ""
}

// clear Statement
document.getElementById("clearOutput").onclick = function(){
    document.getElementById("output").innerText = ""
}