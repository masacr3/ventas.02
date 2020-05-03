document.addEventListener('DOMContentLoaded',function(e){
    console.log('cargo todo el documento')

    const codbarras = document.querySelector('.codb')

    var p1 = {
        'id' : '11',
        'cantidad' : '1',
        'marca' : 'la serenisima',
        'descripcion' : 'leche 1 litro',
        'precio' : '50',
        'subtotal' : '50'
    }

    codbarras.addEventListener('keypress', function(e){
        var code = (e.keyCode ? e.keyCode : e.which);
            if(code==13){
                e.preventDefault()
                console.log('presione enter')
                crearProducto(p1)
                codbarras.value = ''
                codbarras.focus()
            }
    })


})



function crearProducto(p){
    var template = `<div class="articulo">
                        <div class="cantidad">${ p.cantidad }</div>
                        <div class="producto">
                            <div class="marca">${ p.marca }</div>
                            <div class="descripcion">${ p.descripcion }</div>
                        </div>
                        <div class="precio">$${ p.precio }</div>
                        <div class="subtotal">$${ p.precio }</div>
                    </div>
    `
    const node = document.createElement('div')
    node.classList.add(`cod-${ p.id }`)

    const grid = document.querySelector('.mid')

    node.innerHTML = template
    grid.append(node)

    console.log('elemento inyectado correctamente')
}