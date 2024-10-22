<template>
  <div>
          <base-dialog :show="!!error" title="An error occurred!" @close="handleError">
          <p>{{ error }}</p>
        </base-dialog>

  <section>
    <header>
      <h1>Requests Received</h1>
    </header>
    <base-card>
    <base-spinner v-if="isLoading"></base-spinner>

      <ul v-else-if="hasRequests">      
        <request-item v-for="request in recievedRequests" :key="request.id" :email="request.email" :message="request.message"></request-item>
      </ul>
      <h3 v-else>You got not requests..</h3>
    </base-card>
  </section>
</div>  
</template>

<script>

import requestItem from '../../components/requests/requestItem.vue';

export default {
  components: {
    requestItem
  },
  data() {
    return {
      isLoading: false,
      error : null
    }
  },
  computed: {
    recievedRequests() {
      return this.$store.getters['requests/getRequests'];
    },
    hasRequests() {
      return this.$store.getters['requests/requestsCount'] > 0;
    }
  },
  methods: {
    async loadRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('requests/loadRequests');
      } catch(error) {
        this.error = error.message || 'Something went wrong'
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    }
  },
  created() {
    this.loadRequests();
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
