<template>
<div class="editor">
  <!-- <component v-if="dynamicComponent" :is="dynamicComponent"></component> -->
  <quill-editor
    v-model:value="state.content"
    :options="state.editorOption"
    :disabled="state.disabled"
    @blur="$emit('up', state._content)"
    @focus="onEditorFocus($event)"
    @ready="onEditorReady($event)"
    @change="onEditorChange($event)"
  />
</div>
</template>

<script>
import { reactive } from "vue";
import { quillEditor } from "vue3-quill";

export default {
  name: "App",
  data(){
    return{
    }
  },
  components: {
    quillEditor,
  },
  props:{
    noticeData:Object,
    writeModify:Boolean,
  },
  mounted(){
    if(this.writeModify)
      this.state.content = this.noticeData.content;
  },
  setup() {
    const state = reactive({
    //   dynamicComponent: null,
      content: "<p>이곳에 글을 쓰세요</p>",
      _content: "",
      editorOption: {
        placeholder: "core",
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
            [{ header: 1 }, { header: 2 }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ direction: "rtl" }],
            // [{ size: ["small", false, "large", "huge"] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ color: [] }, { background: [] }],
            [{ font: [] }],
            [{ align: [] }],
            ["clean"],
            ["link", "image", "video"],
          ],
          // other moudle options here
        },
        // more options
      },
      disabled: false,
    });
    // 다른 곳을 클릭할 때
    const onEditorBlur = (quill) => {
      console.log("editor blur!", quill);
    };
    // 에디터를 클릭할 때
    const onEditorFocus = (quill) => {
      console.log("editor focus!", quill);
    };
    // 에디터 준비 완료
    const onEditorReady = (quill) => {
      console.log("editor ready!", quill);
    };
    // 에디터 내용이 바뀔 때
    const onEditorChange = ({ quill, html, text }) => {
      console.log("editor change!", quill, html, text);
      state._content = html;
    };
    return {
      state,
      onEditorBlur,
      onEditorFocus,
      onEditorReady,
      onEditorChange,
    };
  },
};
</script>
<style>
.editor{
  width: 100%;
  height: 99.8%;
}
.ql-toolbar.ql-snow {
  background-color: #ffffff;
  width: 100%;
  border-radius: 18px;
  border: none;
}
.ql-container.ql-snow {
  border: none;
  height: calc(100% - 70px);
}
</style>