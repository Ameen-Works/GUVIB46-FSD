var xhr= new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.responseType= 'json';

xhr.send();

xhr.onload=function(){
    var responseObj=xhr.response;
    // for(var values of responseObj){
    //     console.log(values.name.common);
    // }
    let Currencies=responseObj.filter((item)=>{
        return item.currencies;
    });
    console.log(Currencies);
    let usdCurrencies=Currencies.filter((item)=>{
        return item.currencies.USD;
    });
    console.log(usdCurrencies);
    let finalOutput=usdCurrencies.map((item)=>{
        return item.name.common;
    });
    console.log(finalOutput);
}
