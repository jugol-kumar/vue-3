export default {
    template: `
        <li>
            <label>
                {{program.lang}}
                <input type="checkbox" v-model="program.learn">
            </label>
        </li>
    `,
    props:{
        program:Object,
    }

}