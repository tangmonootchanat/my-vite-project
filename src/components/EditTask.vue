<template>
  <v-text-field
    v-model="localEditedTaskText"
    @keyup.enter="saveTask"
    @blur="saveTask"
    class="edit-task-input"
    dense
    hide-details
  ></v-text-field>
</template>

<script>
export default {
  name: 'EditTask',
  props: {
    editedTaskText: String
  },
  data() {
    return {
      localEditedTaskText: this.editedTaskText
    }
  },
  methods: {
    saveTask() {
      this.$emit('save-task', this.localEditedTaskText.trim());
    }
  },
  watch: {
    editedTaskText(newText) {
      this.localEditedTaskText = newText;
    }
  }
}
</script>

<style>
.edit-task-input {
  width: 100%;
}
</style>
