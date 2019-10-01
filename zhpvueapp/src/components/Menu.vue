<template>
  <div class="ranks">
    <h2 class="ranks__title">Lista stopni</h2>
    <ul class="ranks__list">
      <li
        class="ranks__list-item"
        v-for="(item, index) in rankListGenerator"
        :key="index"
        @click="changeRank(index)"
      >{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  created() {
    this.$store.dispatch("fetchRankList");
  },
  computed: {
    ...mapGetters(["rankListGenerator"])
  },
  methods: {
    changeRank(id) {
      this.$store.dispatch("updateChangedRank", id);
    }
  }
};
</script>

<style lang="scss">
.ranks__list-item {
  list-style: none;
  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
}
</style>