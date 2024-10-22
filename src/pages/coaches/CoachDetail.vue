<template>
  <div>
    <section>
      <base-card>
        <h2>{{ fullName }}</h2>
        <h3>${{ rate }}/hour</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <div class="mb-3">{{ description }}</div>
        <base-badge v-for="area in areas" :key="area" :title="area" :type="area"></base-badge>
        <p>Intersted? <base-button link :to="coachContactLink" mode="outline">Contact this coach</base-button></p>
        <router-view></router-view>
      </base-card>
    </section>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedCoach: null
    }
  },
  created() {
    this.selectedCoach = this.$store.getters['coaches/coaches'].find(coach => coach.id === this.id);
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    description() {
      return this.selectedCoach.description
    },
    areas() {
      return this.selectedCoach.areas
    },
    coachContactLink() {
      return `${this.$route.path}/contact`
    }
  }
}
</script>

<style scoped>
.mb-3 {
  margin-bottom: 1.5rem;
}
</style>