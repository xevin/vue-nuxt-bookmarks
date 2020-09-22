<template>
  <div
    class="star-checkbox"
    :class="{'star-checkbox--checked': value }"
    @click="onClick"
  >
    <svg xmlns="http://www.w3.org/2000/svg"
         width="32"
         height="32"
         stroke-linecap="butt"
         stroke-linejoin="miter"
         stroke-width=".5"
         viewBox="0 0 8.467 8.467"
         fill="transparent"
    >
      <path
        d="M-3.14 4.79l-2.206-.832-1.863 1.446.11-2.356-1.952-1.325 2.275-.624.657-2.265 1.296 1.97L-2.466.73l-1.473 1.842z"
        transform="matrix(-.72595 -.7261 .72595 -.7261 -1.505 2.214)"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    value: Boolean
  },
  methods: {
    onClick () {
      this.$emit('input', !this.$props.value)
    }
  }
}
</script>

<style lang="less">
.star-checkbox {
  display: inline-flex;

  svg {
    stroke: #555;
    width: 24px;
  }

  &--checked {
    svg {
      fill: gold;
      stroke: gold;
    }
  }
}
</style>
