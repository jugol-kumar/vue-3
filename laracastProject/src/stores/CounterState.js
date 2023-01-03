import {defineStore} from "pinia";



export let useCounterState = defineStore("counter", {
    state(){
        return{
            count:0
        }
    },


    actions:{
      increments(){
          if (this.count < 10){
              this.count++
          }
      }
    },

    getters:{
        remaning(){
            return 10 - this.count;
        }
    }
})