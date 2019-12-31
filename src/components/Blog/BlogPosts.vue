<template>
    <div class="post-box">
        <span class="post-views">{{ views }}</span>
        <h3 class="post-title">{{ title | reverser }}</h3>
        <span class="post-date">{{ date }}</span>
        <p>{{ content | shorten(10, "...") | reverser }}</p>
        <div class="row">
            <div class="col-sm-6">
                <span class="post-author">{{ author }}</span>
            </div>
            <div class="col-sm-6 text-right">
                <span class="post-category">{{ category }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["views", "title", "date", "content", "author", "category"],
    name: "post"
};
</script>

<style lang="scss" scoped>
.post-box {
    padding: 20px;
    background-color: #ffffff;
    box-shadow: 0 0 10px #dddddd;
    position: relative;
    text-align: left;
    margin-bottom: 20px;
    .post-views {
        position: absolute;
        top: 5px;
        right: 5px;
        background-color: #17a2b8;
        color: #ffffff;
        text-align: center;
        font-weight: bold;
        border-radius: 4px;
        padding: 1px 5px;
    }
    .post-date {
        display: block;
        padding: 0 0 5px;
        color: #888888;
        font-size: 14px;
    }
    .post-content {
        line-height: 1.8;
        color: #666666;
    }
    .post-author {
        background-color: #607d8b;
        padding: 6px 10px;
        border-radius: 4px;
        color: #ffffff;
    }
    .post-category {
        background-color: #28a745c7;
        padding: 6px 10px;
        border-radius: 4px;
        color: #ffffff;
    }
}
</style>
