<script setup>
import Header from "./Header.vue";
import FooterArea from "./FooterArea.vue";

useHead({

})



const title = ref('Hello World')


</script>


<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
      <!-- <Style type="text/css" children="body { background-color: green; }" /> -->
      <Link rel="icon" href="public/logo.svg" />
 
 </Head>

    
    <Header />
    <slot />
    <FooterArea />
  </div>
</template>

