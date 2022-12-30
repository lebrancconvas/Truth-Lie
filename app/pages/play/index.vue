<template>
  <div>
    <header>
      <div>
        <h1>Select Statement to Guess...</h1>
      </div>
    </header>
    <section id="statement-list-section">
      <div v-for="(statement) in results" :key="statement.ID">
        <Card style="width: 500px">
          <template #title>
            <h3>ID: {{ statement.ID }}</h3>
          </template>
          <div>
            <NuxtLink to="/play/:statement.id">
              <Button type="primary">Play</Button>
            </NuxtLink>
          </div>
        </Card>
      </div>
    </section>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        results: []
      }
    },
    mounted() {
      const url = `http://localhost:8000/api/v1/statements`;
      axios.get(url)
        .then(res => {
          this.results = res.data;
        })
        .catch(err => {
          console.error(err);
          console.log(`[ERROR] Fetching Data error.`);
        })
    }
  }
</script>

<style scoped>
  * {
    text-align: center;
    margin: 0 auto;
  }
</style>
