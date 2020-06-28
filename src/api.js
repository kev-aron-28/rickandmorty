

 const url = 'https://rickandmortyapi.com/api'

function getAsset(num){
    return fetch(`${url}/character/?page=${num}`)
    .then(res => res.json())
    .then(res => res.results)
}

function getSingle (id) {
    return fetch(`${url}/character/${id}`)
    .then(res => res.json())
   
}

function getEpisode() {
    return fetch(`${url}/episode`)
    .then(res => res.json())
    
}

function getEpisode2 ( ){
    return fetch("https://rickandmortyapi.com/api/episode?page=2")
    .then(res => res.json())
}


 export default {
     getAsset,
     getSingle,
     getEpisode,
     getEpisode2
 }