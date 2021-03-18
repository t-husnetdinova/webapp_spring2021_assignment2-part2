
app.component('feed', {
    data() {
        return {
            posts: 10,
        }
    },
    template: 
      /*html*/ 
      `<div class="feed">
        <post v-for="n in posts" :key="n">  </post>
      </div>`
  })

app.component('post', {
    template:
    /* html */
    `<div class="post">
        <div class="card mx-auto homepage text-left">
        <div class="card-body">
            <h5 class="card-title"> Post </h5>
            <p class="card-text"> Post Body </p>
        </div>
        <div class="card-footer text-muted text-left">
            2 days ago
        </div>
        </div>
      </div>`
})