function kolor(kolor)
{
document.bgColor=kolor;
}
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    title: 'Strona załadowała się ' + new Date().toLocaleString()
  }
})
Vue.component('todo-item', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">Skasuj</button>\
    </li>\
  ',
  props: ['title']
})
new Vue({
  el: '#todo-list',
  data: {
    newTodoText: '',
    todos: [
      {
        id: 1,
        title: 'opcja1',
      },
      {
        id: 2,
        title: 'opcja2',
      },
      {
        id: 3,
        title: 'opcja3'
      }
    ],
    nextTodoId: 4
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
    showTodo: function() {
   alert ('showtodo'); 
  }
  }
})
