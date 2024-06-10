<template>
  <div class="home">
    <CreateTask v-model:newTaskText="newTaskText" @add-task="addTask" />
    <TaskList 
      :tasks="filteredTasks" 
      :editingTaskId="editingTaskId"
      @delete-task="deleteTask"
      @start-editing="startEditing" 
      @cancel-editing="cancelEditing" 
    />
    <edit-task
      v-if="editingTaskId !== null"
      :editedTaskText="editedTaskText"
      @save-task="saveTask"
    ></edit-task>
    <div v-if="filteredTasks.length === 0" class="no-tasks">
      <v-icon color="primary" icon="mdi-check" size="100"></v-icon>
      <div class="text-h5 text-primary">No tasks</div>
    </div>
  </div>
</template>

<script>
import CreateTask from '@/components/CreateTask.vue';
import TaskList from '@/components/TaskList.vue';
import EditTask from '@/components/EditTask.vue';

export default {
  name: 'Home',
  components: {
    CreateTask,
    TaskList,
    EditTask
  },
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
     addTask(newTaskText) {
      const newTask = {
        id: this.tasks.length + 1,
        text: newTaskText,
        date: new Date().toLocaleDateString('th-TH'),
        done: false
      };
      this.tasks.push(newTask);
    },
    toggleDone(task) {
      task.done = !task.done;
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id);
    },
    startEditing(task) {
      this.editingTaskId = task.id;
      this.editedTaskText = task.text;
    },
    saveTask(editedText) {
      const task = this.tasks.find(task => task.id === this.editingTaskId);
      if (task) {
        task.text = editedText;
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
