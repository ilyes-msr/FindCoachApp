<template>
  <section>
    <base-card>
    <header>
    <h1>Requests Received</h1>

    </header>
    <ul v-if="hasRequests">      
      <request-item v-for="request in recievedRequests" :key="request.id" :email="request.email" :message="request.message"></request-item>
    </ul>

    <h3 v-else>You got not requests haha</h3>

    </base-card>
  </section>
  
</template>

<script>
import requestItem from '../../components/requests/requestItem.vue';

export default {
  components: {
    requestItem
  },
  computed: {
    recievedRequests() {
      return this.$store.getters['requests/requests'];
    },
    hasRequests() {
      return this.$store.getters['requests/requestsCount'] > 0;
    }
  }
}
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
