<template>
    <ul class="todo-main">
        <Item v-for="(todo,index) in todos" :key="index" :todo="todo"
         :index="index" :deleteTodo="deleteTodo" />
    </ul>
</template>

<script>
    import TodoItem from "@/components/TodoItem";

    export default {
        props: {
            todos: Array,
        },
        components: {Item: TodoItem},
        name: "TodoList"
    }
</script>

<style scoped>
    /*main*/
    .todo-main {
        margin-left: 0px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding: 0px;
    }

    .todo-empty {
        height: 40px;
        line-height: 40px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding-left: 5px;
        margin-top: 10px;
    }
</style>
