/* __placeholder__ */
export default (await import('vue')).defineComponent({
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    increment() {
      this.$store.commit('INCREMENT');
    }
  }
});
