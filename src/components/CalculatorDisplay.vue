<template functional>
  <div class="display">{{ props.value }}</div>
</template>

<script>
export default {
  name: 'CalculatorDisplay',
  props: {
    value: String,
  },
};
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');
.display {
  font-family: 'Orbitron', sans-serif;
  font-size: 2rem;
  line-height: 2rem;
  color: #222;
  padding: 0.2rem 0.4rem;
  text-align: right;

  background: #bbb;
  border-radius: 0.2rem;
  border-width: 0.2rem;
  border-style: solid;
  border-color: #222222 #777 #777 #222222;
  overflow: hidden;
  width: 16rem;
  margin-bottom: 2rem;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
