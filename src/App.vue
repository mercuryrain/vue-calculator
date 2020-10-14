<template>
  <div id="app">
    <div id="container">
      <calculator-display :value="screenContents" />
      <calculator-keyboard />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CalculatorDisplay from '@/components/CalculatorDisplay.vue';
import { SCREEN_CONTENTS } from '@/store/getters/types';
import CalculatorKeyboard from '@/components/CalculatorKeyboard.vue';

export default {
  name: 'App',
  components: {
    CalculatorKeyboard,
    CalculatorDisplay,
  },
  computed: {
    ...mapGetters({ screenContents: SCREEN_CONTENTS }),
  },
};
</script>

<style lang="scss">
body, html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  background: #fff;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
}

#container {
  background: linear-gradient(#666, #222);
  border-radius: 1rem;
  box-shadow: 0 3px 6rem -1rem rgba(20, 20, 20, 0.9);
  padding: 2rem;
}
</style>
