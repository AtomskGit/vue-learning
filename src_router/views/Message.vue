<template>
<ul>
    <li v-for="message in messages" :key="message.id">
        <router-link :to='`/home/message/detail/${message.id}`'>{{message.title}}</router-link>
    </li>
    <hr>
    <router-view></router-view>
</ul>
</template>

<script>
    export default {
        data(){
            return{
                messages:Array,
            }
        },
        mounted() {
            setTimeout(() => {
                const messages=[
                    {id:1,title:'message01'},
                    {id:3,title:'message03'},
                    {id:4,title:'message04'},
                ]
                this.messages=messages
            },500)
        }

    }
</script>

<style scoped>

</style>
