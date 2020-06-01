<template>
    <div class="todo-footer" v-show="todos.length">
        <label>
            <input type="checkbox" v-model="isAllCheck"/>
        </label>
        <span>
          <span>已完成{{completedNum}}</span> / 全部{{todos.length}}
        </span>
        <button class="btn btn-danger" v-show="completedNum" @click="deleteAllDone">清除已完成任务</button>
    </div>
</template>

<script>
    export default {
        props: {
            todos: Array,
            deleteAll: Function,
            selectAll: Function,
        },
        data() {
            return {}
        },
        computed: {
            completedNum() {
                return this.todos.reduce((preTotal, todo) => preTotal + (todo.complete ? 1 : 0), 0)
            },
            isAllCheck: {
                get() {
                    return this.completedNum === this.todos.length
                },
                set(value) {
                    this.selectAll(value)
                }
            }
        },
        methods: {
            deleteAllDone() {
                if (window.confirm(`确定删除所有已完成事项吗？`)) {
                    this.deleteAll()
                }
            }
        },
        name: "TodoFooter"
    }
</script>

<style scoped>
    /*footer*/
    .todo-footer {
        height: 40px;
        line-height: 40px;
        padding-left: 6px;
        margin-top: 5px;
    }

    .todo-footer label {
        display: inline-block;
        margin-right: 20px;
        cursor: pointer;
    }

    .todo-footer label input {
        position: relative;
        top: -1px;
        vertical-align: middle;
        margin-right: 5px;
    }

    .todo-footer button {
        float: right;
        margin-top: 5px;
    }

</style>
