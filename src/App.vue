<template>
<div id="app">
  <div id="menu">
    <div id="brand">
      <router-link to="/">
        <img src="/images/sandwich.png">
      </router-link>
    </div>
    <div id="side">
      <router-link to="/filter">
        <div class="menu-item browse">
          <img class=icon src="/images/filter.png">
          <p>Filter</p>
        </div>
      </router-link>
      <router-link to="/meal">
        <div class="menu-item">
          <img class="icon" src="/images/menu.png">
          <p>{{$root.$data.meal.length}} items</p>
        </div>
      </router-link>
    </div>
  </div>
  <h1>Community Care Meal Planner</h1>
  <router-view />
</div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;

}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #B84901;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}

.icon {
  height: 50px;
  width: auto;
}
</style>
