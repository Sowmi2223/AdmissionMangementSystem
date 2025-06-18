let time=0;
        let timer=setInterval(function(){
            time+=3;
            document.getElementById("load").innerHTML="loading..."+time+"completed";
            if(time>=20){
                clearInterval(timer);
                document.getElementById("load").innerHTML="page loaded";
            }
        },3000)