<template>
<div class="wrapper">
  <div class="meal" v-if="meal.length === 0">
      <p>Your meal contains no food</p>
  </div>
  <div class="meal" v-else>
    <div class="total">
      <h3>Total:</h3>
      <ul>
        <li>Cost: ${{$root.$data.totals[0].toFixed(2)}}</li>
        <li>Protein: {{$root.$data.totals[1]}}g</li>
        <li>Sugar: {{$root.$data.totals[2]}}g</li>
        <li>Calories: {{$root.$data.totals[3]}}</li>
      </ul>
    </div>
    <div v-for="item in meal" :key="item.id">
      <div class="item">
        <div class="info">
          <h1>{{item.name}}</h1>
        </div>
        <div class="image">
          <img class="thumbnail" :src="'/images/products/'+item.image">
        </div>
        <div class="price">
          <h2>${{item.price}}</h2>
          <button v-on:click="meal.splice(meal.indexOf(item),1);
          $root.$data.totals[0] -= item.price;
          $root.$data.totals[1] -= item.protein;
          $root.$data.totals[2] -= item.sugar;
          $root.$data.totals[3] -= item.calories;" class="auto">Remove</button>

        </div>
      </div>
      <div class = nutrition>
        <p>Calories: {{item.calories}}</p>
        <p>Sugar: {{item.sugar}}g</p>
        <p>Protein: {{item.protein}}g</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'MealList',
  props: {
    meal: Array,
  }
}
</script>

<style scoped>
.grapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.meal {
  margin-top: 20px;

  justify-content: space-around;
}

.item {
  align: left;
  border: 2px solid #333;
}

img {

  height: 250px;
  width: 200px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.thumbnail {
  width: 150px;
  height: auto;
  padding: 15px;
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

button {
  height: 50px;
  background: #ff5700;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}

.nutrition {
  display: flex;
  background: #000000;
  color: #ffffff;
  margin-bottom: 15px;
}

p {
  padding: 10px;
}

ul {
  border: solid 1px #000000;
}

h3 {
  background: #000000;
  color: #ffffff;
}
</style>
