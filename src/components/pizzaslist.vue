<template>
    <div>
    <pizza v-for="(item, i) in this.pizzaList" :key="i" :pizza="item" :photo="pizzaPhotoLost[i]"/>
    </div>
</template>

<script>
import pizza from './onepizza.vue'
export default {
 components:{
     pizza
 },
  async created(){
   for(let j =1; j<7;j++){
     let photo = await (await fetch('/pizzaPhoto',{
       method:"POST",
       headers: {
        'Content-Type': 'application/json;charset=utf-8'
       },
       body: JSON.stringify({num:j})
     })).blob()
     this.pizzaPhotoLost.push(URL.createObjectURL(photo))
   }
},
 data(){
    return {
      pizzaList:[{name: 'русская', price: 750, str: '12314'}],
      pizzaPhotoLost: []
    }
  },

}
</script>