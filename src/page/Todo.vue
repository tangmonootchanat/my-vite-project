<template>
  <div class="home">
    <v-text-field 
      v-model="newTaskText" 
      @click:append="addTask"
      @keyup.enter="addTask"
      class="pa-4"
      append-inner-icon="mdi-plus"
      label="Add Task"
      variant="outlined"
      hide-details
      clearable
    ></v-text-field>

    <v-list select-strategy="classic">
      <div 
        v-for="task in filteredTasks"
        :key="task.id"
        :value="task.text"
      >
        <v-list-item :class="{'grey lighten-1': task.done}">
          <template v-slot:prepend>
            <v-list-item-action start>
              <v-checkbox-btn :model-value="task.done" @change="toggleDone(task)"></v-checkbox-btn>
            </v-list-item-action>
          </template>

          <v-list-item-title
            v-if="editingTaskId !== task.id"
            :class="{ 'text-decoration-line-through' : task.done }"
          >
            {{ task.text }} - {{ task.date }}
          </v-list-item-title>

          <v-text-field
            v-else
            v-model="editedTaskText"
            @keyup.enter="saveTask(task.id)"
            @blur="saveTask(task.id)"
            class="edit-task-input"
            dense
            hide-details
          ></v-text-field>

          <template v-slot:append>
            <v-list-item-action>
              <v-btn
                v-if="editingTaskId !== task.id"
                @click.stop="startEditing(task)"
                color="grey-lighten-1"
                icon="mdi-pencil"
                variant="text"
              >
              </v-btn>
              <v-btn
                v-else
                @click.stop="cancelEditing"
                color="primary"
                icon="mdi-check"
                variant="text"
              >
              </v-btn>
              <v-btn
                @click.stop="deleteTask(task.id)"
                color="grey-lighten-1"
                icon="mdi-delete"
                variant="text"
              >
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
      </div>
    </v-list>
    <div
      v-if="filteredTasks.length === 0"
      class="no-tasks"
    >
      <v-icon
        color="primary"
        icon="mdi-check"
        size="100"
      ></v-icon>
      <div class="text-h5 text-primary">
        No tasks
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    searchQuery: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      newTaskText: '',
      tasks: [
        {
          id: 1,
          text: 'นัดกินข้าวกับเพื่อน',
          date: '7/6/2567',
          done: false
        },
        {
          id: 2,
          text: 'ไปเที่ยวทะเล',
          date: '9/6/2567',
          done: false
        },
        {
          id: 3,
          text: 'ซื้อของเข้าห้องตอนเช้า',
          date: '11/6/2567',
          done: false
        }
      ],
      editingTaskId: null,
      editedTaskText: ''
    }
  },
  computed: {
    filteredTasks() {
      return this.tasks.filter(task => task.text.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
  },
  methods: {
    addTask() {
      if (this.newTaskText.trim() === '') {
        return;
      }
      const newTask = {
        id: this.tasks.length + 1,
        text: this.newTaskText,
        date: new Date().toLocaleDateString('th-TH'),
        done: false
      };
      this.tasks.push(newTask);
      this.newTaskText = ''; // Clear the input field
      console.log(newTask);
    },
    toggleDone(task) {
      task.done = !task.done;
      console.log('id:', task.id, 'done:', task.done);
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id);
    },
    startEditing(task) {
      this.editingTaskId = task.id;
      this.editedTaskText = task.text;
    },
    saveTask(id) {
      const task = this.tasks.find(task => task.id === id);
      if (task) {
        task.text = this.editedTaskText;
        this.cancelEditing();
      }
    },
    cancelEditing() {
      this.editingTaskId = null;
      this.editedTaskText = '';
    }
  }
}
</script>

<style>
.grey {
  background-color: #eeeeee !important; /* ตัวอย่างสีเทาอ่อน */
}

.text-decoration-line-through {
  text-decoration: line-through;
}

.text-primary {
  color: #1976D2 !important; /* ตัวอย่างสีฟ้า */
}

.no-tasks {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(50%, -50%);
  opacity: 0.5;
}

.edit-task-input {
  width: 100%;
}
</style>
