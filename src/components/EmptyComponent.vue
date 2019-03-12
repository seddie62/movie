<template>
<!-- When there's no data -->
    <div class="h-100 w-100 center">
        <p class="no-data">{{message}}</p>
    </div>
</template>

<script>
export default {
  name: 'EmptyComponent',
  props: ['message']
}
</script>

<style>

</style>
