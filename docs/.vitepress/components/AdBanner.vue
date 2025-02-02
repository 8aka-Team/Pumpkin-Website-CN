<!-- .vitepress/theme/AdBanner.vue -->
<script setup>
import { ref, onMounted } from 'vue'

const ads = ref([])
const isLoading = ref(true)

onMounted(async () => {
    try {
        const response = await fetch('https://ad-api.8aka.org/ads')
        const data = await response.json()
        ads.value = data
    } catch (error) {
        console.error('Failed to fetch ads:', error)
    } finally {
        isLoading.value = false
    }
})
</script>

<template>
    <div class="ad-container">
        <template v-if="!isLoading">
            <a
                v-for="(ad, index) in ads"
                :key="index"
                :href="ad.url"
                class="ad-link"
                target="_blank"
                rel="noopener noreferrer"
            >
                {{ ad.name }}
            </a>
        </template>
    </div>
</template>

<style scoped>
.ad-container {
    margin-left: auto;
    padding-right: 1rem;
    display: flex;
    gap: 1.5rem;
}

.ad-link {
    color: var(--vp-c-text-1);
    font-size: 0.9rem;
    transition: color 0.25s;
    margin-left: 1rem !important;
    font-weight: 500;
    display: inline-flex !important;
    align-items: center;
}

.ad-link:hover {
    color: var(--vp-c-brand);
    opacity: 0.8;
    text-decoration: none !important;
}

.ad-link::before {
    content: "🔹";
    margin-right: 0.3em;
    opacity: 0.7;
}

</style>
