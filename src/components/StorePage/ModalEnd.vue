<template>
  <div class="con">
    <div class="font">결제 완료</div>
    <div class="btn_areas">
      <div class="btn_1"><span>보관함</span></div>
      <div class="btn_store" @click="$emit('close')"><span>스토어</span></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.con {
  text-align: center;
  width: 97%;
  height: 93%;
  position: absolute;
  color: white;
  z-index: 11;
}
.font {
  font-size: 2em;
  width: 100%;
  text-align: center;
  position: relative;
  display: flex;
  justify-content: center;
  top: 40%;
}
.btn_areas {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 93%;
}
.btn_areas .btn_1 {
  display: table;
  background-color: #2872f9;
  padding: 0 10px;
  width: 100px;
  height: 40px;
  border-radius: 20px;
}
.btn_areas .btn_1 span {
  display: table-cell;
  vertical-align: middle;
}
.btn_areas .btn_store {
  display: table;
  background-color: red;
  padding: 0 10px;
  margin: 0 0 0 20px;
  width: 100px;
  height: 40px;
  border-radius: 20px;
}
.btn_areas .btn_store span {
  display: table-cell;
  vertical-align: middle;
}
</style>