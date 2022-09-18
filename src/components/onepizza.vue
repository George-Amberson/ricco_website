<template>
    <b-card class="crd">
         <b-modal ref="adress" hide-footer title="Укажите куда доставить">
            <div class="d-block text-center">
               <b-form-input placeholder="Адрес" v-model="client.adress" style="margin-bottom:1em;"/>
               <b-form-input placeholder="Телефон" v-model="client.phone" style="margin-bottom:1em;"/>
                <b-form-input placeholder="Ваше имя" v-model="client.name" style="margin-bottom:1em;"/>
            </div>
            <b-button class="mt-2" variant="outline-warning" block @click="SendAdress">Доставляйте!</b-button>
        </b-modal>
        <b-modal ref="commentLink" hide-footer title="Оставьте свое мнение о доставке">
            <router-link to="/clientscomment">Тыкни на меня</router-link>
        </b-modal>
        <b-card-body>
        <b-row>
            <b-col class="cl">
                <div @click="showModalWindow()">
                    <img :src="this.photo" width="90%" height="90%" >
                </div>
             <div class="d-flex justify-content-center">
             {{this.pizza.price}}
             </div>
             </b-col>
            <b-col class="ccl">
                    <span class="text">
                        {{this.pizza.name}}
                        <br>
                        Состав: {{this.pizza.str}}
                    </span>
                    <br>
                
            </b-col>
        </b-row>
        <b-button class="b" @click="addSub(item.price, i)" v-for="(item, i ) in getAddsArray" :key="i">{{item.name}}</b-button>
        </b-card-body>
        
    </b-card>
</template>

<script>
import { BCard, BRow, BButton, BFormInput } from 'bootstrap-vue'
export default {
    props:[
    'pizza',
    'photo'
    ], 
  components: {
      BCard,
      BRow,
      BButton,
      BFormInput
  },
    computed:{
        getAddsArray(){
            return [].concat(this.pizza.addone,this.pizza.addtwo)
        }
    },
  methods: {
    addSub(addprice, i){
        this.pizza.price+=addprice
        this.client.addNums+=String(i)
    }, 
    showModalWindow(){
        this.client.price=this.pizza.price
         this.client.pizzaName=this.pizza.name
        this.$refs['adress'].show()  
    },
    async SendAdress(){
        await fetch('/newOrder',{
            method: 'POST',
             headers: {
                  'Content-Type': 'application/json;charset=utf-8'
             },
             body: JSON.stringify(this.client)
        })
         this.$refs['adress'].hide()  
          this.$refs['commentLink'].show()  
    },
  },
  data(){
      return {
          client:{
            adress:'',
            phone:'',
            name:'',
            pizzaName:'',
            addNums:'',
            price:0,
          },
          comment:'',
          ref:'/clientscomment',
          id:0
      }
  }
}
</script>

<style scoped>
.text{
    margin-top:0 !important;
}
.b{
  margin-right:1em;  
  border-color:black;
  background-color:white;
  color:black;
  margin-top:1em;
}
.crd{
    max-width:40%;
    margin-right:1em;
    margin-top:1em;
    margin-left:5em;
    display: inline-block;
    min-width:15%
}
.cl{
    padding-right: 0;
}
.ccl{
    padding-left: 0;
}
</style>

