var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }

                  })
  function kolor(kolor)
{
document.bgColor=kolor;
}
  <p>
<input type="button" value="Przycisk zmiany koloru tła na zielony" onclick="kolor('green');">
<input type="button" value="Przycisk zmiany koloru tła na biały" onclick="kolor('white');">
    </p>
