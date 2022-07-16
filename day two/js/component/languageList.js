import language from "./language.js";
import langTag from "./lang-tag.js"
export default {
    components: {language,langTag},
    template:`
    <div class="container">
        <div class="row">
            <div class="col-6 offset-3">
                <section v-if="learnLang.length">
                    <h2 class="mb-4 d-inline-block">{{title}}  </h2> <span class="badge bg-primary">{{learnLang.length}}</span>
                    
                    <lang-tag :intitalTags="learnLang.map(a=>a.tag)"></lang-tag>
                    
                    <ul class="list-group">
                       <language 
                           class="list-group-item" 
                           v-for="program in filterlang" 
                           :key="program.id" 
                           :program="program"
                       ></language>   
                    </ul>
                </section>
            </div>
        </div>
    </div>
        
    `,

    props: {
        learnLang:Array,
        title:String,
    },

    data(){
        return{
            currentTag:'all'
        }
    },

    computed:{
        filterlang(){
            if (this.currentTag === 'all'){
                return this.learnLang
            }
            return this.learnLang.filter(a=>a.tag === this.currentTag);
        },
    }
}