<template>
  <div>
    <header>
      <div>
        <h1>2 Truths 1 Lie</h1>
      </div>
    </header>
    <section id="question-section">
      <div v-for="statement in results" :key="statement.ID">
        <div>
          {{ statement.Statement1.Content }}
        </div>
        <div>
          {{ statement.Statement2.Content }}
        </div>
        <div>
          {{ statement.Statement3.Content }}
        </div>
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
      console.log(`[INFO] Mounted Test Route ID: ${this.$route.params.id}`);
      const url = `http://localhost:8000/api/v1/statements`;
      axios.get(url)
        .then(res => {
          this.results = res.data.filter(statement => statement.ID === this.$route.params.id);
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
  }
</style>
