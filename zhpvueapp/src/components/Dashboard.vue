<template>
  <div class="dashboard">
    <h2 class="dashboard__title">Wymagania stopni</h2>
    <h3 class="dashboard__semi-title">{{displayedItem.name}}</h3>
    <ul class="dashboard__requirements requirements">
      <li
        class="requirements__list-items"
        v-for="(item, index) in displayedItem.requirements"
        :key="index"
      >
        <div class="requirements__title-block title-block">
          <button class="title-block__button" @click="openRequirement">+</button>
          <h4 class="title-block__name">{{item.name}}</h4>
        </div>
        <div class="requirements__proposal-block proposal-block lock">
          <ul class="proposal-block__list">
            <li
              class="proposal-block__list-item"
              v-for="(item, index) in item.propositions"
              :key="index"
            >{{item.wymaganie}}</li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Dashboard",
  computed: {
    displayedItem() {
      return this.$store.getters.fetchDisplayRank;
    }
  },
  methods: {
    openRequirement(event) {
      event.target.textContent === "+"
        ? (event.target.textContent = "-")
        : (event.target.textContent = "+");
      const blockElement = event.target.parentNode.parentNode.lastChild;
      blockElement.classList.toggle("lock");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.lock {
  display: none;
}
.requirements__list-items {
  list-style: none;
}
.title-block {
  &__name {
    display: inline;
  }
}
</style>
