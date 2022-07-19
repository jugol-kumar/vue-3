export default {
    template:`
        <form @submit.prevent="add">
            <input type="text" v-model="newLang" placeholder="Enter New Language..." class="text-gray-800 px-3 py-2">
            <button type="submit" class="bg-gray-600 text-white px-4 py-2">Add New</button>
        </form>
    `,
    data(){
      return {
          newLang:"",
      }
    },
    methods:{
        add(){
            this.$emit("add", this.newLang)
            this.newLang = ""
        }
    },

}
