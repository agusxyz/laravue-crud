<template>
  <div>
    <h1>Create An Item</h1>
    <form v-on:submit.prevent="addItem()">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Item Name:</label>
            <input type="text" class="form-control" v-model="item.name" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Item Price:</label>
            <input type="text" class="form-control" v-model="item.price" />
          </div>
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary">Add Item</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        item: {}
      }
    },

    methods: {
      addItem() {
        let uri = 'http://development.tasks/items'
        this.axios.post(uri, this.item)
          .then(response => {
            this.$router.push({name: 'DisplayItem'})
          })
          .catch(error => console.log(error))
      }
    }
  }
</script>
