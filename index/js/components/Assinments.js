import AssinmntList from "./AssinmntList.js";
import programs from "../FakeDb.js";
import CreateNewLang from "./CreateNewLang.js";
export default {
    components: {AssinmntList, CreateNewLang},
    template: `
        <assinmnt-list title=""  :learnLang="filters.completed">Learning...</assinmnt-list>
        <AssinmntList title=""  :learnLang="filters.inProgress">Completed.</AssinmntList>
        <CreateNewLang @add="add"/>
        
    `,
    data() {
        return {
            programs: programs,
        }
    },
    computed: {
        filters(){
            return{
                inProgress: this.programs.programs.filter(a => a.learn),
                completed: this.programs.programs.filter( a=> ! a.learn),
            }
        }
    },
    methods:{
        add(name){

            console.log(this.programs.programs.length)

            this.programs.programs.push({
                lang:  name,
                learn: false,
                id:    this.programs.programs.length + 1,
                tag: 'frontend'
            });
        }
    }


}
