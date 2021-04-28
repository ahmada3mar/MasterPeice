<template>
     <div class="accordion p-2 mb-5" role="tablist">
   <ckeditor :editor="editor" ... ></ckeditor>
    </div>
</template>



<script src="../node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js"></script>
<script src="../node_modules/@ckeditor/ckeditor5-vue2/dist/ckeditor.js"></script>
<script>

   
export default {
     name: 'app',
        components: {
            // Use the <ckeditor> component in this view.
            ckeditor: CKEditor.component
        },
        data() {
            return {
                editor: ClassicEditor,

                // ...
            };
        }
}
</script>