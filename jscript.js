
function kolor(kolor)
{
document.bgColor=kolor;
}
var menu = ["opcja1", "opcja2", "opcja3", "opcja4"];
var app = new Vue({
  el: '#app',
  data: {
    message: menu
  }
})
var app1 = new Vue({
  el: '#app-1',
  data: {
    seen: false
  }
  methods: {
    content: function () {
      seen = true
    }
})
