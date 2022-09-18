<template>
    <div style="margin-left:5em; margin-right:5em; margin-top:3em;">
            <h3 style="text-align:center"> Оставьте пожалуйста о нас свое мнение</h3>
        <textarea v-model="comment" style="min-width:100%"/>
            
        <b-button class="mt-2" variant="outline-warning" block @click="sendcomment">Отправить!</b-button>
      </div>  
</template>
<script>


export default {
methods:{
    sendcomment(){
        fetch('/clientscomment',{
            method: 'POST',
            headers: {
                  'Content-Type': 'application/json;charset=utf-8'
             },
            body: JSON.stringify({client: this.client, comment:this.comment})
        })
         this.$router.replace({path: '/'})
    }
}
}
</script>
