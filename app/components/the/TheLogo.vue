<template>
  <div class="the-logo">
    <div class="the-logo__wrapper">
        <SvgIcon name="logo_big" class="the-logo__icon" width="1920" height="325"/>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less">
.the-logo {
    width: 100%;
    overflow: hidden;
    &__wrapper {
        position: relative;
        width: 100%;
        @media @bw1660 {
            width: calc(100%+180px);
            margin-left: -90px;
        }
        @media @bw1340 {
            width: calc(100%+200px);
            margin-left: -10px;
        }
        @media @bw768 {
            width: calc(100%+120px);
            margin-left: -60px;
        }
        &::after {
            content: "";
            display: block;
            width: 100%;
            padding-top: 16.927%;
        }
    }
    &__icon {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
}
</style>