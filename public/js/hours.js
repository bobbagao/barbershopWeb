        time=new Date();
        dow=time.getDay();
        hr=time.getHours();
        if((dow==0 && hr>=9 && hr<16)||
            (dow==6 && hr>=8 && hr<=18)||
            (dow>0&&dow<6&&hr>=8&&hr<19)){
                $("ul#hours>#current").html("Shop is currently open!");
                $("ul#hours>#current").css("color","green");
        }else{
                $("ul#hours>#current").html("Shop is closed for the day. :(");
                $("ul#hours>#current").css("color","red");
        }
