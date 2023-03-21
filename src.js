function divde(n1,n2){
    if(n2==0 ){
        throw 'cant devide by zero'
    }
    return n1/n2
}
function calc(){
    document.getElementById("calc_btn").addEventListener('click', function(){
        let number1 = document.querySelector("#number1").value;
        let number2 = document.querySelector("#number2").value;
        if (!number2 & !number1){
            throw 'the number cant by null'
        }
        try{
            let resulat = divde(Number(number1) , Number(number2));
            document.getElementById("resulat").innerHTML = resulat
        }catch(error){
            alert(error)
        }
        
        
    })
}
function handle(){
    try{
        calc() 
    }catch(error){
        prompt(error)
    }
}
handle()