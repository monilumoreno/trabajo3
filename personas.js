
const pokerArray=[];

const obtenerData = async()=>{
    const response = await fetch ("https://pokeapi.co/api/v2/pokemon/")
    const data = await response.json()
    data.results.forEach(item => {
        pokerArray.push(item.name)
        
    });
    console.log (pokerArray)
}



//crear un elemento html desde js
const lista=document.getElementById("lista-dinamica")
const myList=["Item 1", "Item 2", "item 3"]

const fragment = document.createDocumentFragment();

myList.forEach((item)=>{
    const li = document.createElement("li")
    li.textContent=item
    fragment.appendChild(li)

});

//incorporar elementos a la lista
lista.appendChild(fragment)




