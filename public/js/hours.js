        time=new Date();
        dow=time.getDay();
        hr=time.getHours();
        min=time.getMinutes();
        if((dow==0 && hr>=10 && hr<=15)||
            (dow==6 && (hr>=9&&min>=30) && hr<=18)||
            (dow>0&&dow<6&&(hr>=9&&min>=30)&&hr<=16)){
                $("ul#hours>#current").html("Shop is currently open!");
                $("ul#hours>#current").css("color","green");
        }else{
                $("ul#hours>#current").html("Shop is closed for the day. :(");
                $("ul#hours>#current").css("color","red");
        }
