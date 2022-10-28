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
                this.listToDo.text.unshift(this.newtask.text)
                this.hasError = false;
            } else {
                this.hasError = true;
            }
            this.newtask.text = '';
        },
        removeToDo(i) {
            // this.listToDo.splice(i, 1)
        },
        checkToDo() {
            // this.item.done = true
        }
    }
}).mount('#app')