<template>
  <header>
    <div class="title">
    <h1>Rick y Morty</h1>
    </div>
    
    <nav>
      <ul>
       <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/episodes">Episodes</router-link></li>
      
      </ul>
    </nav>
  </header>
</template>

<style scoped>
  header{
    display:flex;
    align-items:center;
    justify-content:space-between;
    font-family: 'Questrial', sans-serif;
    border-bottom-style:outset;

  }

  nav{
    display:flex;
  }

  ul{
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-size:20px;
    margin-right: 20px;;
  }

  ul li a {
    text-decoration:none;
    color: black;
    padding: 20%;
  }
  ul li a:hover{
    background-color:honeydew;
    transition: .5s;
    color: black;
    border-radius: 5px;
  }
  ul li{
    list-style:none;
    margin:15px;
  }

  h1{
    margin-left:10px;
  }
  

</style>