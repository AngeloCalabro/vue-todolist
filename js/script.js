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
                    text: 'ToDo',
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
                let taskToAdd = Object.assign({}, this.newtask)
                // let taskToAdd = {...this.newtask} {*altro modo per farlo*}
                this.listToDo.unshift(taskToAdd)
                this.hasError = false;
            } else {
                this.hasError = true;
            }
            this.newtask.text = '';
        },
        removeToDo(i) {
            this.listToDo.splice(i, 1)
        },
        checkToDo() {
            // this.listToDo.done = !this.listToDo.done
        }
    },
    mounted() {
        console.log('mounted')
    }
}).mount('#app')