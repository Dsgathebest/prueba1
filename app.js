
const getUser = ()=> {
    return {
        uid:'ABC123',
        username :'El_Papi1502'
    }
};

const getUser2 = ()=>({
    uid:'ABC123',
    username:'El_Papi1502'
});
console.log(getUser2());

const user = getUser();
console.log (user);
