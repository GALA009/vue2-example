<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <router-link :to="{ path: '/about', activeClass: 'onactive'}" >Go About!</router-link>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    console.log('data')
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  /**
   * [beforeCreate description]
   * 加载 data 数据之前
   */
  beforeCreate () {
    console.log('beforeCreate')
  },
  created () {
    console.log('created')
  },
  beforeMount () {
    console.log('beforeMount')
  },
  mounted () {
    console.log('mounted')
  },
  beforeUpdate () {
    console.log('beforeUpdate')
  },
  updated () {
    console.log('updated')
  },
  /**
   * [updated description]
   * 状态激活时
   */
  activated () {
    console.log('activated')
  },
  deactivated () {
    console.log('deactivated')
  },
  beforeDestroy () {
    console.log('beforeDestroy')
  },
  destroyed () {
    console.log('destroyed')
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;

  li {
    display: inline-block;
    margin: 0 10px;

    a {
      color: #42b983;
    }
  }
}

</style>
