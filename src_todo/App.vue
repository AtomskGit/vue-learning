<template>
    <div class="todo-container">
        <div class="todo-wrap">
            <Header @addTodo="addTodo"/>
            <List :todos="todos"/>
            <Footer :todos="todos" :deleteAll="deleteAll" :selectAll="selectAll"/>
        </div>
    </div>
</template>

<script>
    import PubSub from 'pubsub-js'
    import TodoHeader from "@/components/TodoHeader";
    import TodoList from "@/components/TodoList";
    import TodoFooter from "@/components/TodoFooter";
    import storageUtils from "@/utils/storageUtils";

    export default {
        data() {
            return {
                todos:storageUtils.readTodos()
            }
        },
        mounted(){
            PubSub.subscribe('deleteTodo', (msg,index) => {
                this.deleteTodo(index)
            })
        },
        components: {
            Header: TodoHeader,
            List: TodoList,
            Footer: TodoFooter
        },
        methods: {
            addTodo(title){
                const todo={
                    title:title,
                    complete:false
                }
                this.todos.unshift(todo)
            },
            deleteTodo(index){
                this.todos.splice(index,1)
            },
            deleteAll(){
                this.todos=this.todos.filter(todo => !todo.complete)
            },
            selectAll(isCheck){
                this.todos.forEach(todo => todo.complete=isCheck)
            }
        },
        watch: {
            todos:{
                deep:true,
                /*handler:function (value) {
                    //将最新的值保存到localStorage里
                    window.localStorage.setItem('todos_key',JSON.stringify(value))
                }*/
                handler:storageUtils.saveTodos
            }
        }
    }
</script>

<style>
    /*app*/
    .todo-container {
        width: 600px;
        margin: 0 auto;
    }

    .todo-container .todo-wrap {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
</style>
