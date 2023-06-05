var xhr= new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.responseType= 'json';

xhr.send();

xhr.onload=function(){
    var responseObj=xhr.response;
    for(var values of responseObj){
        console.log(values.name.common);
    }
}
