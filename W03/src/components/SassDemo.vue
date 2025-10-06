<template>
    <section>
        <h3>Variables</h3>
        <div style="display:flex;">
            <div class="box box1">Primary</div>
            <div class="box box2">Secondary</div>
            <div class="box box3">Accent</div>
        </div>

        <h3>Mixin Example</h3>
        <div style="display:flex;">
            <div class="card-blue">Blue Card</div>
            <div class="card-yellow">Yellow Card</div>
            <div class="card-green">Green Card</div>
        </div>

        <h3>Extend Example</h3>
        <button class="button-primary">Primary</button>
        <button class="button-warning">Warning</button>
    </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../styles/main.scss";
</style>
