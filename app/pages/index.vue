<template>
  <div>
    <header>
      <div>
        <h1>Truth & Lie</h1>
      </div>
    </header>
    <section id="action-section">
      <div>
        <NuxtLink to="/statement">
          <Button type="success">Create Statement</Button>
        </NuxtLink>
        <NuxtLink to="/play">
          <Button type="primary">Play</Button>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script>

</script>

<style scoped>
  * {
    text-align: center;
  }
</style>
