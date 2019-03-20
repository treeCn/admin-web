<template>
  <div>
    <!-- quill-editor插件标签 分别绑定各个事件-->
    <quill-editor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @change="onEditorChange($event)"
    ></quill-editor>
    <!-- 参考文档
    https://blog.csdn.net/senmage/article/details/82388728
    -->
  </div>
</template>

<script>
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
export default {
  data() {
    return {
      content: "", // 文章内容
      editorOption: {}, // 编辑器选项
      addRange: [],
      uploadData: {},
      photoUrl: "", // 上传图片地址
      uploadType: "", // 上传的文件类型（图片、视频）
      fullscreenLoading: false
    };
  },
  methods: {
    onEditorBlur() {},
    onEditorFocus() {},
    onEditorChange() {}
  }
};
</script>

<style scoped>
.quill-editor {
  height: 745px;
}
.ql-container {
    height: 680px;
  }
.limit {
  height: 30px;
  border: 1px solid #ccc;
  line-height: 30px;
  text-align: right;
}
span {
  color: #ee2a7b;
}
.ql-snow .ql-editor img {
  max-width: 480px;
}

.ql-editor .ql-video {
  max-width: 480px;
}
</style>