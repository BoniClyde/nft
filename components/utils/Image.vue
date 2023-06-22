<template>
    <div>
        <div class="card is-loading">
            <div :class="class" class="card is-loading image" v-show="loading"></div>
        </div>
        <nuxt-img
        loading="lazy"
        preload
        
        v-show="!loading" @load="handleImageLoad" :class="class" :sizes="sizes" :src="imgUrl"
            placeholder="nft/deafaultErrorImage.png" />
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    url: {
        type: String,
        required: true,
    },
    sizes: {
        type: String,
        default: "sm:100vw md:50vw lg:400px",
    },
    class: {
        type: String,
        default: "",
    },
});


const loading = ref(true);

const imgUrl = ref("");

const handleImageLoad = () => {
    console.log("image loaded");
    loading.value = false;
};

imgUrl.value = props.url;
</script>

<style scoped>
.cards {
    display: flex;
}

.card {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.622);

    .image {
        max-width: 100%;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
}

.card.is-loading {
    .image {
        background-size: 200% 100%;
        animation: 1.5s shine linear infinite;
        @apply bg-gradient-to-r from-secondary-800 via-secondary-600 to-secondary-800;
    }
}

@keyframes shine {
    to {
        background-position-x: -200%;
    }
}
</style>
