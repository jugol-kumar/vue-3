import Assinment from "./Assinment.js";
import AssinmentTags from "./AssinmentTags.js";
export default {
    components: {
        Assinment,
        AssinmentTags
    },
    template: `
         <section v-if="learnLang.length" class="space-y-6 mb-8">
            <h2 class="font-medium text-3xl">
                <slot/>
                <span>({{ learnLang.length }})</span>
            </h2>
            
            <assinment-tags 
            :initial-tags="learnLang.map(a => a.tag)" 
            @updateTag="currentTag = $event"
            :current-tag="currentTag"
            />
            
            <ul class="border border-gray-600 divide-y divide-gray-600 rounded">
                <Assinment v-for="program in tagsLangs" :key="program.id" :program="program"/>
            </ul>
        </section>
    `,

    props: {
        learnLang: Array,
        title:String,
    },

    data(){
        return {
            currentTag: 'ALL'
        }
    },
    // methods: {
    //     updateCahngeTag(tag){
    //         this.currentTag = tag;
    //     }
    // },

    computed: {
        tagsLangs(){
            if (this.currentTag === 'ALL'){
                return this.learnLang;
            }
            return this.learnLang.filter(a =>  a.tag === this.currentTag.toLowerCase());
        }
    }
}
