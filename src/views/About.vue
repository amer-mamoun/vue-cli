<template>
    <div class="about">
        <h1>{{ pageName }}</h1>
        <p v-font="60">{{ pageDescription }}</p>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            pageName: "About us",
            pageDescription: "This is about us page"
        };
    },
    name: "about"
};
</script>
