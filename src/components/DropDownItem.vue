<template>
  <div @click="opClick()">
    <span class="r-span">
      <font-awesome-icon v-if="state === true" :icon="['fas', 'angle-down']" fixed-width />
      <font-awesome-icon  v-else :icon="['fas', 'angle-up']" fixed-width />
    </span>
    <span>{{message}}</span>
  </div>
</template>

<script>

export default {
  name: 'DropDownItem',
  props: ["message"],
  data() {
		return {
			state: true,
		};
	},
	methods: {
		opClick() {
			this.state = !this.state;
		},
	},
}

</script>

<style scoped lang="scss">
.r-span{
   padding-left: 1rem;
   padding-right: 0.5rem;
  }

</style>
