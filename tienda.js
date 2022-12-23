const precios= {'Bermuda con bolsillo':30, "Camiseta entrenamiento":33, "Chaqueta chandal":53, "Pantalón":53, "Polo":33, "Sudadera":53, "Camiseta Primera Equipacion":63, "Camiseta Segunda Equipacion":63, "Bidón":13, "Bufanda":18, "Llavero":8, "Paraguas":18, "Taza" :13, "Zapatillas":23};
const pedido={"Bermuda con bolsillo":0, "Camiseta entrenamiento":0, "Chaqueta chandal":0, "Pantalón":0, "Polo":0, "Sudadera":0, "Camiseta Primera Equipacion":0, "Camiseta Segunda Equipacion":0, "Bidón":0, "Bufanda":0, "Llavero":0, "Paraguas":0, "Taza" :0, "Zapatillas":0};
//const subtotales={"Bermuda con bolsillo":0, "Camiseta entrenamiento":0, "Chaqueta chandal":0, "Pantalón":0, "Polo":0, "Sudadera":0, "Camiseta Primera Equipacion":0, "Camiseta Segunda Equipacion":0, "Bidón":0, "Bufanda":0, "Llavero":0, "Paraguas":0, "Taza" :0, "Zapatillas":0};

function pedirProducto(nombre){
    //console.log(pedido);
    pedido[nombre] = pedido[nombre] +1;
    //console.log(pedido);
    escribir();
};

function escribir(){
let totalPedido=0;
for (const key in pedido) {
    let auxiliar= precios[key]*pedido[key];
    totalPedido += auxiliar;
}
//console.log(totalPedido);    
document.getElementById('total').innerHTML= totalPedido;
    };
	<!--addEventlistener en JS-->
    