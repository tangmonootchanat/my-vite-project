<template>
  <v-list select-strategy="classic">
    <div v-for="task in tasks" :key="task.id">
      <v-list-item :class="{'grey lighten-1': task.done}">
        <template v-slot:prepend>
          <v-list-item-action start>
            <v-checkbox-btn :model-value="task.done" @change="toggleDone(task)"></v-checkbox-btn>
          </v-list-item-action>
        </template>

        <v-list-item-title :class="{ 'text-decoration-line-through' : task.done }">
          {{ task.text }} - {{ task.date }}
        </v-list-item-title>

        <template v-slot:append>
          <v-list-item-action>
            <v-btn 
              v-if="editingTaskId !== task.id" 
              @click.stop="startEditing(task)" 
              color="orange-lighten-2" 
              icon="mdi-pencil" 
              variant="text">
            </v-btn>
            <v-btn
                v-else
                @click.stop="cancelEditing"
                color="primary"
                icon="mdi-check"
                variant="text"
              >
              </v-btn>
            <v-btn @click.stop="deleteTask(task.id)" color="red-lighten-1" icon="mdi-delete" variant="text"></v-btn>
          </v-list-item-action>
        </template>
      </v-list-item>
    </div>
  </v-list>
</template>

<script>
export default {
  name: 'TaskList',
  props: {
     tasks: {
      type: Array,
      required: true
    },
    editingTaskId: {
      type: Number,
      required: false
    }
  },
  methods: {
    toggleDone(task) {
      task.done = !task.done;
    },
    deleteTask(id) {
      this.$emit('delete-task', id);
    },
    startEditing(task) {
      this.$emit('start-editing', task);
    },
    cancelEditing() {
      this.$emit('cancel-editing');
    }
  }
}
</script>
