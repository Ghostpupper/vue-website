
<template>
  <div>
    <welcome />
    <about-me />
  </div>
</template>

<script>
export default {
  components: {
    AboutMe: () => import('@/components/AboutMe'),
    Welcome: () => import('@/components/Welcome')
  }
}
</script>