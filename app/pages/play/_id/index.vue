<template>
  <div>
    <header>
      <div>
        <h1>2 Truths 1 Lie</h1>
      </div>
      <div>
        <h1>Which Statement is a false statement?</h1>
      </div>
    </header>
    <section id="question-section">
      <div v-for="statement in results" :key="statement.ID">
        <List>
          <ListItem>
            <h2>{{ statement.Statement1.Content }}</h2>
            <Button type="primary" @click="handleSelect(statement.Statement1.IsLie)">Select</Button>
          </ListItem>
          <ListItem>
            <h2>{{ statement.Statement2.Content }}</h2>
            <Button type="primary" @click="handleSelect(statement.Statement2.IsLie)">Select</Button>
          </ListItem>
          <ListItem>
            <h2>{{ statement.Statement3.Content }}</h2>
            <Button type="primary" @click="handleSelect(statement.Statement3.IsLie)">Select</Button>
          </ListItem>
        </List>
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
    },
    methods: {
      handleSelect(isLie) {
        if(isLie) {
          alert("Correct!");
        } else {
          alert("Incorrect!");
        }
      }
    }
  }
</script>

<style scoped>
  * {
    text-align: center;
  }
</style>
