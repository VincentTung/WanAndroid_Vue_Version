<template>
  <div id="app">
    <div>mainpage</div>
  </div>
</template>

<script>
export default {
  name: "MainPage",
  mounted: function() {
    console.log("===init");
    this.getData();
  },
  methods: {
    getData: function() {
      this.$axios
        .get("/api/wxarticle/chapters/json")
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
