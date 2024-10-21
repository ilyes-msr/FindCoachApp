<template>
  <section>
  <base-card>
  <h1>Coach Registration</h1>
    <coach-form @save-data="saveData"></coach-form>
  </base-card>
</section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';
export default {
  components: {
    CoachForm
  },

  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/registerCoach', data);
      // this.$router.push('/coaches');
      this.$router.replace('/coaches'); // thus, you can't go back
    }
  }
}
</script>