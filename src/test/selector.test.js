import {filterCountry} from '../selector/searchSelector.js'

const  state={
    search: {
        filterData:""
    },
    state:{
        country:[{"id":"1","name":"Bangladesh","capital":"Dhaka","imageUrl":"http://localhost:3000/bangladesh.jpg"},
        {"id":"2","name":"Brazil","capital":"Brasília","imageUrl":"http://localhost:3000/brazil.jpg"},
        {"id":"3","name":"China","capital":"Beijing","imageUrl":"http://localhost:3000/china.jpg"},
        {"id":"4","name":"England","capital":"London","imageUrl":"http://localhost:3000/england.jpg"},
        {"id":"5","name":"Germany","capital":"Berlin","imageUrl":"http://localhost:3000/germany.jpg"},
        {"id":"6","name":"India","capital":"Delhi","imageUrl":"http://localhost:3000/india.jpg"}]
    }
}
describe('should handle selector',()=>{
    it('handle empty string data',()=>{
expect(filterCountry(state).length).toBe(6);
    });

    it('handle recomputations',()=>{
        const count=filterCountry.recomputations();
        filterCountry(state);
        expect(filterCountry.recomputations()).toBe(count);

    });

    it('handle search change',()=>{
        const newState=Object.assign({},state);
        newState.search ={
            filterData:"sad"
        };
        const count =filterCountry.recomputations();
        filterCountry(newState);
        expect(filterCountry.recomputations()).toBe(count+1);
    });
})





