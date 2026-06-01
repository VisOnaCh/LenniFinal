<template>
<div class="doit">
    <p class="doit__text">
        <span class="doit__text-row1">Просто делайте,</span>
        <span class="doit__text-row2">что нравится,</span>
        <span class="doit__text-row3">а мы вам поможем</span>
    </p>
</div>
</template>

<script setup>

</script>

<style lang="less">
.doit {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    text-align: right;
    white-space: nowrap;
    pointer-events: none;
    overflow: hidden;
    @media @bw1020 {

    }
    &__text{
        position: relative;
        margin: 0 0 0 -2.5vw;
        font-size: 128px;
        font-weight: 700;
        line-height: 1.2;
        font-family: @font3;
        @media @bw1020 {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin: 0 0 0 -3vw;
            font-size: 10.5vw;
        }

    &-row2 {
        @media @bw1020 {
            position: relative;
            align-items: flex-end;
            right: -9.2vw;
        }
    }
    &-row3 {
        display: block;
        position: relative;
        right: -9.2vw;
        @media @bw1020{
            position: relative;
            right: -3vw;
        }

        
    }
}
}
</style>

