const { createApp } = Vue

createApp({
    data() {
        return {
            newtask: '',
            hasError: false,
            item: 0,
            listToDo: [
                {
                    text: 'ToDo1',
                    done: false
                },
                {
                    text: 'ToDo2',
                    done: false
                }
            ]
        }
    },
    computed: {

    },
    methods: {
        addToDo() {
            if (this.newtask.length >= 3) {
                this.listToDo[item].text.unshift(this.newtask)
                this.hasError = false;
            } else {
                this.hasError = true;
            }
            this.newtask = ''
        },
        removeToDo() {

        }
    }
}).mount('#app')