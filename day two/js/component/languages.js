import languageList from "./languageList.js";
import addlan from "./addlan.js";
export default {
    components: {languageList,addlan},

    template: `
            <div class="container mx-auto mt-5">
                <languageList :learnLang="filter.inprogress" title="Learning Programming"></languageList>
                <languageList :learnLang="filter.completed" title="Learning Complete Programming"></languageList>
                <addlan @add="add"></addlan>
            </div>
    `,
    data() {
        return {
            programs: [
                {
                    lang: "Node Js",
                    learn: false,
                    id: 1,
                    tag:"design",
                },
                {
                    lang: "php",
                    learn: false,
                    id: 2,
                    tag:"development",
                },
                {
                    lang: "vue js",
                    learn: false,
                    id: 3,
                    tag:"seo",
                },
                {
                    lang: "React Js",
                    learn: false,
                    id: 3,
                    tag:"development",
                }

            ],
            newLanguage:"",
        }
    },
    methods:{
        add(name) {
            this.programs.push({
                lang: name,
                learn: false,
                id: this.programs.length + 1,
            });
        }
    },
    computed: {
        filter(){
            return{
                inprogress:this.programs.filter( a => ! a.learn),
                completed:this.programs.filter(a => a.learn),

            }
        }
    },

}