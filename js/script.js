const { createApp } = Vue

createApp({
    data() {
        return {
            newtask: {
                text: '',
                done: false
            },
            hasError: false,
            listToDo: [
                {
                    text: 'ToDo1',
                    done: false
                }
            ]
        }
    },
    computed: {

    },
    methods: {
        addToDo() {
            if (this.newtask.text.length >= 3) {
                this.listToDo.unshift(this.newtask)
                this.hasError = false;
            } else {
                this.hasError = true;
            }
            // this.newtask = '';
        },
        removeToDo(i) {
            this.listToDo.splice(i, 1)
        },
        checkToDo() {
            // this.item.done = true
        }
    }
}).mount('#app')