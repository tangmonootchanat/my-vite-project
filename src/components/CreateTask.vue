<template>
  <v-text-field 
    v-model="localNewTaskText" 
    @click:append="addTask"
    @keyup.enter="addTask"
    class="pa-4"
    append-inner-icon="mdi-plus"
    label="Add Task"
    variant="outlined"
    hide-details
    clearable
  ></v-text-field>
</template>

<script>
export default {
  name: 'CreateTask',
  props: {
    newTaskText: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      localNewTaskText: this.newTaskText
    };
  },
  watch: {
    newTaskText(newText) {
      this.localNewTaskText = newText;
    }
  },
  methods: {
    addTask() {
      if (this.localNewTaskText.trim() === '') {
        return;
      }
      this.$emit('add-task', this.localNewTaskText.trim());
      this.localNewTaskText = ''; // Clear the input field
       this.$emit('update:newTaskText', '');
    }
  }
}
</script>
