var app = new Vue({
    // The DOM element we want to effect
    el: '#app',
    // The data we want to send to the component
    data: {
        message: 'This message is being displayed by a Vue component',
    }
})

var app2 = new Vue({
    el: '#app2',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
  })

var app3 = new Vue({
    el: '#app3',
    data: {
      seen: true
    }
  })

var app4 = new Vue({
    el: '#app4',
    data: {
      todos: ['this', 'that', 'something else']
    }
  })

let button = document.querySelector('#toggle-seen')
button.onclick = toggleSeenElement
function toggleSeenElement() {
  app3.seen = !app3.seen;
}
