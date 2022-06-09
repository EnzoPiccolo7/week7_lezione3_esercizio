let chiamata = fetch('https://fakestoreapi.com/products?limit=5').then(risp => risp.json());
        chiamata.then(data => {
            let lista = document.querySelector('#list');
            data.forEach(element => {
                let li = document.createElement('li');
                li.className = 'list-group-item';
                li.innerHTML = element.title + '    ' + '$' + element.price;
                lista.appendChild(li);
            });
        })

function addprod(prodotti) {
    fetch('https://fakestoreapi.com/products?limit=5',{
        method:"POST",
            body:JSON.stringify(
                {
                    title:'test prodotti',
                    price: 15
                }
            )
    }).then(response => response.json()).then(json => innerHTML(prodotti))

}
              