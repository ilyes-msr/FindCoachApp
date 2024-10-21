<template>
  <p v-if="!formIsValid" class="invalid">All fields are required</p>
  <form @submit.prevent="submitMessage">
    <div class="form-control">
      <label for="email">Email</label>
      <input type="email" id="email" v-model.trim="email">
    </div>
    <div class="form-control">
      <label for="message">Message</label>
      <textarea id="message" rows="5" v-model.trim="message"></textarea>
    </div>
    <div class="actions">
      <base-button>Send</base-button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      message: '',
      formIsValid: true
    }
  },
  methods: {
    submitMessage() {
      this.formIsValid = true;
      if(this.email === '' || this.message === '') {
        this.formIsValid = false;
        return;
      }      
      const newRequest = {
        email: this.email,
        message: this.message,
        coachId: this.$route.params.id
      }
      this.$store.dispatch('requests/addRequest', newRequest);

      // console.log(this.$store.getters['requests/requests']);
      this.$router.replace('/coaches');
    }
  }
}
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}

.invalid {
  color: red;;
  background-color: rgba(244, 55, 55, 0.5);
  padding: 1rem .33rem;
  text-align: center;
  border-radius: .25rem;
}
</style>