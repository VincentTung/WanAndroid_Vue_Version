<template>
  <div class="parent"></div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      isActivated: true
    }
  },
  //计算属性
  computed: {
    fullName: {
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      set: function (value) {
        var arr = value.split(' ')
        this.firstName = arr[0]
        this.lastName = arr[1]
      }
    }
  },
  methods: {
    handleDivClick: function () {
      this.isActivated = !this.isActivated
    }
  },
  beforeCreate() {
    console.log("---beforeCreate");
  },
  created() {
    console.log("---created");
  },
  beforeMount() {
    console.log("---beforeMount");
  },
  mounted() {
    console.log("---mounted");
  },
  beforeDestroy() {
    console.log("---beforeDestroy");
  },
  destroyed() {
    console.log("---destroyed");
  },
  beforeUpdate() {
    console.log("---beforeUpdate");
  },
  updated() {
    console.log("---updated");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.activated {
  color: red;
}
</style>
