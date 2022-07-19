export default {
    template: `
        <li class="p-3">
            <label class="flex justify-between">
                {{program.lang}}
                <input type="checkbox" v-model="program.learn">
            </label>
        </li>
    `,
    props:{
        program:Object,
    }
}