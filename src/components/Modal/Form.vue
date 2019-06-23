<template>
  <div>
    <div
      v-if="submited"
      class="success"
    >
      <h4>Greart! Your tickets have been reserved.</h4>
    </div>
    <form
      @submit.prevent="submit"
      v-else
    >
      <input
        type="text"
        placeholder="your name"
        v-model="name"
      >
      <input
        type="text"
        placeholder="your surname"
        v-model="surname"
      >
      <select v-model="payment">
        <option
          v-for="option in paymentTypes"
          :key="option"
        >
          {{ option }}
        </option>
      </select>
      <button
        type="submit"
        class="reversed"
        :class="{'disabled': validate}"
      >
        Reserve seats
      </button>
    </form>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
  export default {
    name: 'reservation-from',

    data () {
      return {
        name: '',
        surname: '',
        payment: '',
        paymentTypes: [
          'cash',
          'credit card',
        ],
        submited: false,
      }
    },

    computed: {
      validate () {
        return !this.name || !this.surname || !this.payment
      },
    },

    methods: {
      submit () {
        if (!this.validate) {
          this.$nextTick( () => {
            this.submited = !this.submited
            setTimeout(() => {
              this.$emit('close-modal', false)
            }, 3000)
          });
        }
      },
    },
  }
</script>

<style lang="css" scoped>
 input, select {
    width: 100%;
    margin: 8px 0;
    color: black;
    font-size: 20px;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    background-color: white;
    border-radius: 5px;
    appearance: none;
  }
  select::after {
    content: '';
    top: 10px;
    right: 10px;
    width: 20px;
    height: 20px;
    position: absolute;
    display: inline-block;
    background-repeat: no-repeat;
    background-image: url('/assets/arrow.png')
  }
  h4 {
    color: green;
    /* text-align: center; */
  }
</style>
