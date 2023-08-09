<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from "@/components/coaches/CoachForm.vue";

export default {
  components: {
    CoachForm,
  },

  methods: {
    saveData(data) {
      this.$store.dispatch("coaches/registerCoach", data);
      this.$router.replace("/coaches"); // push와 똑같은 기능을 하지만 이동 후에는 이전 페이지로 돌아갈 수 없다는 차이점이 있다.
    },
  },
};
</script>
