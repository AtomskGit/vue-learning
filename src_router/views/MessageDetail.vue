<template>
<ul>
   <li> ID：{{detail.id}}</li>
    <li>标题：{{detail.title}}</li>
    <li>内容：{{detail.content}}</li>
</ul>
</template>

<script>
    export default {
        data(){
            return{
                detail: {},
            }
        },
        mounted() {
            setTimeout(() => {
                const messageDetails=[
                    {id:1,title:'message01',content:'message01 content'},
                    {id:3,title:'message03',content:'message03 content'},
                    {id:4,title:'message05',content:'message04 content'},
                ]
                this.messageDetails=messageDetails
                const id =this.$route.params.id
                this.detail=this.messageDetails.find(data => data.id===id*1)
            },500)
        },
        watch:{
            $route:function (value) {
                const id =value.params.id
                this.detail=this.messageDetails.find(data => data.id===id*1)
            }
        }
    }
</script>

<style scoped>

</style>
