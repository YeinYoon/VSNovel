<template>
<div class="Editor">
  <quill-editor
    v-model:value="state.content"
    :options="state.editorOption"
    :disabled="state.disabled"
    @change="onEditorChange($event)"
  />
</div>
</template>

<script>
import { reactive } from "vue";
import { quillEditor } from "vue3-quill";
export default {
  name: "App",
  data() {
    return {
      
    }
  },
  methods : {

  },

  setup(props, {emit}) {
    const state = reactive({
      content : "",
      _content: "",
      editorOption: {
        placeholder: "",
        modules: {
          toolbar: [
            // [],[],[],[],[],[],[],[],[],[],[],[], 메뉴정렬용이라는데 뺐음
            ["bold", "italic", "underline"],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ size: [false, "large", "huge"] }],
            // [{ font: [] }], // 추후 폰트 지원
            [{ align: [] }],
            ["image"],
            ["clean"],
          ],
        },
      },
      disabled: false,
    });

    const onEditorChange = ({ html }) => {
      state._content = html;
      emit("commitContent",state._content);
    };

    return {
      state,
      onEditorChange,
    };
  },

  components: {
    quillEditor,
  }
};
</script>
<style>
.Editor {
  width: 100%;
  height: 100%;
}

.ql-toolbar {
  position: sticky;
  top: 0px;
  background: white;
  z-index: 10;
  text-align: center;
  border-radius: 25px;
}
.ql-toolbar.ql-snow {
  padding: 5px;
}

.ql-container {
  overflow-x: auto;
}

.ql-editor {
  margin-top: 5px;
  height: 100%;
}

.ql-editor > * {
  cursor: text;
  /* color: black; */
  font-size: 1em;
  /* font-family: "RIDIBatang"; */
}
.ql-container.ql-snow {
  overflow: scroll;
  border: none;
}

@font-face {
  font-family: 'RIDIBatang';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/RIDIBatang.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
</style>