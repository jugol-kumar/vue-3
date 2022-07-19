export default {
    template: `
         <div class="flex gap-2">
            <button 
            class="border rounded px-2 py-px border-gray-600 text-xs" 
            :class="{'border-blue-500 text-blue-500' : currentTag == tag.toUpperCase()}"
            @click="$emit('updateTag', tag)"
            v-for="tag in tags">
                {{ tag }}
            </button>
        </div>
    `,

    props:{
        initialTags:Array,
        currentTag:String,
    },
    // data(){
    //     return{
    //         currentTag: "ALL"
    //     }
    // },

    // methods:{
    //     changeTag(tag){
    //         this.currentTag  = tag
    //         this.$emit('updateTag', tag)
    //     }
    // },

    computed:{
        tags(){
            return ["all", ...new Set(this.initialTags)].map(single => single.toUpperCase())
        },
    }
}
