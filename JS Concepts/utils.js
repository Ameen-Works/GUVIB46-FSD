const sum=(...arr)=>{
    return arr.reduce((accumulator, currentValue)=> accumulator+currentValue);
};

const average=(...arr)=>{
    return sum(...arr)/arr.length;
};

export {sum, average};