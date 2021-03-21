<template>
<div class="wrapper">
  <div class="products">
    <div class="product" v-for="product in products" :key="product.id">
      <div class="info">
        <h1>{{product.name}}</h1>
      </div>
      <div class="image">
        <img :src="'/images/products/'+product.image">
      </div>
      <div class="price">
        <h2>${{product.price}}</h2>
        <button v-on:click="$root.$data.meal.push(product);
        $root.$data.totals[0] += product.price;
        $root.$data.totals[1] += product.protein;
        $root.$data.totals[2] += product.sugar;
        $root.$data.totals[3] += product.calories;" class="auto">Add to meal</button>
      </div>
      <div class="nutrition">
        <p>Calories: {{product.calories}}</p>
        <p>Sugar: {{product.sugar}}g</p>
        <p>Protein: {{product.protein}}g</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    products: Array
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
  border: solid #000000;
}

.product img {
  border: 1px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #d57a5c;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

.nutrition {
  border-top: dashed 1px #000000;
}

button {
  height: 50px;
  background: #ff5700;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
