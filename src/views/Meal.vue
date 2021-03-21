<template>
<div>
  <h2>Your Meal:</h2>

  <MealList :meal="meal" />

</div>
</template>

<script>
import MealList from "../components/MealList.vue"
export default {
  name: 'Home',
  components: {
    MealList
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    meal() {
      return this.$root.$data.meal;
    }
  },
}
</script>


<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}



form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>
