<template>
<div>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('lowCal')" href="#" class="pure-menu-link">Low Calorie</a></li>
      <li class="pure-menu-item"><a @click="select('lowSug')" href="#" class="pure-menu-link">Low Sugar</a></li>
      <li class="pure-menu-item"><a @click="select('hiProt')" href="#" class="pure-menu-link">High Protein</a></li>
    </ul>
  </div>
  <ProductList :products="products" />
</div>
</template>

<script>
import ProductList from "../components/ProductList.vue"
export default {
  name: 'Filter',
  components: {
    ProductList
  },
  data() {
    return {
      setting: '',
    }
  },
  computed: {
    products() {
      if (this.setting === 'lowCal'){
        return this.$root.$data.products.filter(product => product.calories <= 15);
      }
      else if (this.setting === 'lowSug'){
        return this.$root.$data.products.filter(product => product.sugar <= 10);
      }
      else if (this.setting === 'hiProt'){
        return this.$root.$data.products.filter(product => product.protein >= 30);
      }
      else return "";
    }
  },
  methods: {
    select(setting) {
      this.setting = setting;
    }
  }
}
</script>
