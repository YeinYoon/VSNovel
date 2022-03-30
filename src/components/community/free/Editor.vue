<template>
<div class="editor">
  <!-- <component v-if="dynamicComponent" :is="dynamicComponent"></component> -->
  <quill-editor
    v-model:value="state.content"
    :options="state.editorOption"
    :disabled="state.disabled"
    @blur="onEditorBlur($event)"
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
  components: {
    quillEditor,
  },
  setup() {
    const state = reactive({
    //   dynamicComponent: null,
    //   content: "<p>2333</p>",
    //   _content: "",
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

    const onEditorBlur = (quill) => {
      console.log("editor blur!", quill);
    };
    const onEditorFocus = (quill) => {
      console.log("editor focus!", quill);
    };
    const onEditorReady = (quill) => {
      console.log("editor ready!", quill);
    };
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
     background-color: #868686;
  height: 95%;
  
}
.ql-toolbar.ql-snow {
    background-color: antiquewhite;
  border-radius: 10px;
  border: none;
}
.ql-container.ql-snow {
  border: none;
  height: calc(100% - 70px);
}
</style>