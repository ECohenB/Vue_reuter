<template>
    <div class="product-section">
      <!-- Título -->
      <div class="title">
        <h1>Nuestros productos</h1>
      </div>
  
      <!-- Contenedor de la tarjeta -->
      <div class="product-container">
        <div class="card">
          <!-- Imagen  -->
          <img :src="imagen" class="card-img-top" alt="Imagen del producto">
  
          <!-- tarjeta -->
          <div class="card-body">
            <h5 class="card-title">{{ nombre }}</h5>
            <p class="card-text">{{ descripcion }}</p>
            <p class="card-text">Precio: ${{ precio }}</p>
            <p class="card-text">Cantidad disponible: {{ cantidad }}</p>
          </div>
          <!-- links -->
          <div class="card-body">
            <a href="#" class="card-link">Ver más</a>
            <a href="#" class="card-link">Comprar</a>
          </div>
          
        </div>
      </div>
      <div class="redirect-link">
            <router-link to="/">Volver al inicio</router-link>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['nombre', 'descripcion', 'precio', 'cantidad', 'imagen'],
  };
  </script>
  
  <style scoped>

  .product-section {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  
  .title {
    margin-bottom: 20px;
  }
  
  .title h1 {
    font-size: 2rem;
    font-weight: bold;
    color: #333;
  }
  
  
  .product-container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
  

  .card {
    width: 300px;
    border: 2px solid gray;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  
  .card-img-top {
    max-height: 200px;
    object-fit: cover;
    width: 100%;
  }
  
 
  .card-body {
    padding: 15px;
    text-align: left;
  }
  
  .card-title {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .card-text {
    font-size: 1rem;
    margin-bottom: 5px;
  }
  
  
  .card-link {
    margin-right: 10px;
    color: #007bff;
    text-decoration: none;
  }
  
  .card-link:hover {
    text-decoration: underline;
  }
  
  </style>
  