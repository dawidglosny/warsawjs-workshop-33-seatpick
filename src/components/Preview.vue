<template>
  <div class="seats-preview">
    <span
      v-for="(seat, index) in selectedSeats"
      :key="index"
    >
      {{ seat }}
    </span>
    <h5
      v-if="tooManySeatsSelected"
    >
      Too many seats selected.
    </h5>
    <button
      type="buttom"
      :class="{'disabled': tooManySeatsSelected}"
      @click="startReservation"
    >
      Reserve selected seats
    </button>
  </div>
</template>

<script>
  export default {
    name: 'preview',

    props: {
      selectedSeatsProp: {
        type: Array,
        default: () => [],
        required: true,
      }
    },

    computed: {
      tooManySeatsSelected () {
        return this.selectedSeatsProp.length > this.selectedSeatsMax
      }
    },

    data () {
      return {
        selectedSeatsMax: 5,
        selectedSeats: [],
      }
    },

    created () {
      this.selectedSeats = this.selectedSeatsProp
    },

    watch: {
      selectedSeatsProp (value) {
        return this.selectedSeats = value
      }
    },

    methods: {
      startReservation () {
        this.$emit('start-reservation', true)
      }
    },
  }
</script>

<style lang="css" scoped>
  .seats-preview {
    left: 0;
    right: 0;
    top: -550px;
    width: 100%;
    color: white;
    border-radius: 5px;
    position: absolute;
    border: 1px solid #fff;
    padding: 30px 20px;
  }
  span {
    display: inline-block;
    margin: 0 10px 0 0;
  }
  h5 {
    margin: 20px 0 0;
    color: red;
  }
</style>
