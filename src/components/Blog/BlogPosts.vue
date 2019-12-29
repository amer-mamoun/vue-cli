<template>
    <div class="post-box">
        <span class="post-views">10</span>
        <h3 class="post-title">Blog Post Title</h3>
        <span class="post-date">25-01-2020</span>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
            repellendus, natus delectus quas, voluptas, voluptate possimus modi
            dolores explicabo impedit iste aspernatur ratione laudantium totam
            adipisci! Quod veritatis animi velit.
        </p>
        <div class="row">
            <div class="col-sm-6">
                <span class="post-author">Post Author</span>
            </div>
            <div class="col-sm-6 text-right">
                <span class="post-category">Category Name</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
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
