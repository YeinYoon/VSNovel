<template>
    <div class="con">
        <div class="font">결제 완료</div>
        <div class="btn_1">보관함</div>
        <div class="btn_store" @click="$emit('close')">스토어</div>
    </div>

</template>

<script>
export default {

}
</script>

<style>
.con{
    position: relative;
    display: table;
    color: white;
}
.font{
    font-size: 2em;
    width: 100%;
    text-align: center;
    transform: translate(250%, 550%);
}
.btn_1{
    background-color: #2872f9;
    display: table-cell;
    vertical-align: middle;
    padding: 0 10px;
    transform: translate(280%, 1100%);
}
.btn_store{
    background-color: red;
    display: table-cell;
    vertical-align: middle;
    padding: 0 10px;
    transform: translate(300%, 1100%);
}
</style>