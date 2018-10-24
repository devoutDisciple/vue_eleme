<template>
  <div>
    <img alt="Vue logo" src="../assets/1.jpg">
    <!-- 直接绑定 -->
    <div>{{message}}</div>
    <!-- 用声明式渲染 v-bind -->
    <span v-bind:title='message'>鼠标停留有message</span>
    <!-- 条件式渲染 v-if -->
    <div v-if="screen">测试v-if</div>
    <!-- 列表循环渲染 -->
    <ol>
      <Li v-for="todo in todos" v-bind:id='todo.id' v-bind:name='todo.name' v-bind:text='todo.text' />
    </ol>
    <!-- 事件 -->
    <button v-on:click='btnClick'>点击</button>
    <div>双向绑定:{{doubleData}}</div>
    <input v-model="doubleData"/>

    <Helloworld msg='this is props'></Helloworld>
    <div>{{testComputed}}</div>
  </div>
</template>

<script>
import Helloworld from './components/HelloWorld';
import Li from './components/Li';

export default {
  beforeCreate() {
    console.log(`beforeCreate=${this.message}`)
  },
  beforeUpdate() {
    console.log(`this is beforeupdate`);
  },
  beforeMount() {
    console.log(`this is beforemount`)
  },
  beforeMount() {
    console.log(`this is beforeMount`)
  },
  created() {
    console.log(`this is create ${this.message}`)
  },
  data() {
    return {
      message: 5,
      screen: false,
      todos: [
        { id: '1', name: 'level1', text: '学习 JavaScript' },
        { id: '2', name: 'level2', text: '学习 Vue' },
        { id: '3', name: 'level3', text: '整个牛项目' }
      ],
      doubleData: 'hello'
    }
  },
  components: {
    Helloworld,
    Li
  },
  methods: {
    btnClick: function() {
      this.message++;
    }
  },
  watch: {
    message: function() {
      console.log(this.message)
    }
  },
  computed: {
    testComputed: function() {
      return this.doubleData
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
