<template>
  <div class="keyboard">
    <button class="reset" @click="reset">C</button>
    <button class="operator changeSign" @click="changeSign">+/−</button>
    <button class="operator percent" @click="percent">%</button>
    <button class="operator divide" @click="divide">/</button>
    <button class="operator multiply" @click="multiply">×</button>

    <button class="operand n7" @click="append('7')">7</button>
    <button class="operand n8" @click="append('8')">8</button>
    <button class="operand n9" @click="append('9')">9</button>
    <button class="operator add" @click="add">+</button>
    <button class="operator subtract" @click="subtract">-</button>

    <button class="operand n4" @click="append('4')">4</button>
    <button class="operand n5" @click="append('5')">5</button>
    <button class="operand n6" @click="append('6')">6</button>
    <button class="operator exchange" @click="exchangeEuroToDollar">€ → $</button>

    <button class="operand n1" @click="append('1')">1</button>
    <button class="operand n2" @click="append('2')">2</button>
    <button class="operand n3" @click="append('3')">3</button>
    <button class="operator exchange" @click="exchangeDollarToEuro">$ → €</button>

    <button class="operand n0" @click="append('0')">0</button>
    <button class="operand point" @click="append('.')">,</button>
    <button class="operator equals" @click="calculate">=</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import {
  APPEND_TO_CURRENT_OPERAND,
  APPLY_OPERATOR, CALCULATE,
  RESET,
} from '@/store/actions/types';
import add from '@/operations/add';
import subtract from '@/operations/subtract';
import multiply from '@/operations/multiply';
import divide from '@/operations/divide';
import changeSign from '@/operations/change-sign';
import exchange from '@/operations/exchange';
import { HAS_DECIMAL_POINT } from '@/store/getters/types';
import percent from '@/operations/percent';

export default {
  name: 'CalculatorKeyboard',
  ...mapGetters({
    hasDecimalPoint: HAS_DECIMAL_POINT,
  }),
  methods: {
    ...mapActions({
      reset: RESET,
      calculate: CALCULATE,
      applyOperator: APPLY_OPERATOR,
      append: APPEND_TO_CURRENT_OPERAND,
    }),
    add() {
      this.applyOperator(add);
    },
    subtract() {
      this.applyOperator(subtract);
    },
    multiply() {
      this.applyOperator(multiply);
    },
    divide() {
      this.applyOperator(divide);
    },
    changeSign() {
      this.applyOperator(changeSign);
    },
    percent() {
      this.applyOperator(percent);
    },
    exchangeEuroToDollar() {
      this.applyOperator(exchange('EUR', 'USD'));
    },
    exchangeDollarToEuro() {
      this.applyOperator(exchange('USD', 'EUR'));
    },
  },
};
</script>

<style scoped lang="scss">
  ::selection {
    background: none;
  }
  .keyboard {
    display: grid;
    grid-template-rows: repeat(5, minmax(3rem, auto));
    grid-template-columns: repeat(5, 3rem);
    grid-gap: 0.5rem;
    font-weight: 300;
    font-size: 1.1rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    border-color: #484848;
    border-width: 0.2rem;
  }

  .reset {
    color: #fff;
    background: linear-gradient(#ef0000, #b70202);
    &:hover {
      background: linear-gradient(#b70202, #860101);
    }
  }

  .operand {
    color: #484848;
    background: linear-gradient(#eee, #aaa);

    &:hover {
      background: linear-gradient(#ccc, #999);
    }

    &.n0 {
      grid-column: 1 / 3;
    }
  }

  .operator {
    color: #fff;
    background: linear-gradient(#ef6c00, #943e01);

    &:hover {
      background: linear-gradient(#d26002, #6b2d01);
    }

    &.equals, &.exchange {
      grid-column: 4 / 6;
    }

    &.equals {
      background: linear-gradient(#01ac01, #017301);
    }
  }
</style>
