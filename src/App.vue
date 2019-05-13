<template>
  <v-container class="blue" v-if="restaurants">
    <v-card>
      <v-card-title>
        Zomato API
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="restaurants"
        :search="search"
        :pagination.sync="pagination"
        class="elevation-1"
      >
        <template v-slot:items="props">
          <td>{{ props.item.restaurant.name }}</td>
          <td class="text-xs-right">{{ props.item.restaurant.location.city }}</td>
        </template>
        <template v-slot:no-results>
          <v-alert
            :value="true"
            color="error"
            icon="warning"
          >Your search for "{{ search }}" found no results.</v-alert>
        </template>
      </v-data-table>
      <div class="text-xs-center pt-2">
        <v-pagination color="blue" v-model="pagination.page" :length="pages"></v-pagination>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      pagination: {},
      selected: [],
      search: "",
      headers: [
        { text: "Название ресторана", value: "restaurant.name" },
        { text: "Город", value: "restaurant.location.city" }
      ]
    };
  },
  created() {
    this.$store.dispatch("loadRestaurants");
  },
  computed: {
    restaurants() {
      return this.$store.getters.getRestaurants;
    },
    pages() {
      if (
        this.pagination.rowsPerPage == null ||
        this.pagination.totalItems == null
      )
        return 0;

      return Math.ceil(
        this.pagination.totalItems / this.pagination.rowsPerPage
      );
    }
  }
};
</script>

<style>
</style>
