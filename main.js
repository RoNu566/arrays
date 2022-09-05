class prenda{
    constructor(tipo,talle,color,precio,disponibilidad){
    this.tipo=tipo
    this.talle=talle
    this.color=color
    this.precio=precio
    this.disponibilidad=disponibilidad
}
FueraDeStock(){
    let error = "prenda no disponible"
    if(this.disponibilidad == true){
        this.disponibilidad = false

    }else{
        console.log(error)
    }
}
}

const tienda = []

let prenda1 =new prenda("remera","XL","rojo",500,false)
let prenda2 =new prenda("remera","M","verde",450,true)
let prenda3 =new prenda("camisa","S","azul",550,false)
let prenda4 =new prenda("blusa","XS","rosado",600,true)
let prenda5 =new prenda("shorts","M","violeta",1200,true)

tienda.push(prenda1)
tienda.push(prenda2)
tienda.push(prenda3)
tienda.push(prenda4)
tienda.push(prenda5)

console.table(tienda)

let disponible = tienda.filter(prenda=>prenda.disponibilidad==true)
console.log(disponible)