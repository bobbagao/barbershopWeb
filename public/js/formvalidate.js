//FORM VALIDATION AND SUBMISSION

validate = function(field){
    fieldname=field.attr("name");
    fielderror=$("#"+fieldname+">.error");
    valid=true;
    switch(fieldname){
        case "name":
            break;
        case "email":
            if(field.val() && field.val().match(/.+@.+/)){
                fielderror.hide();
            }else{
                fielderror.show();
                valid=false;
            }
            break;
        case "subject":
            break;
        case "message":
            if(field.val()){
                fielderror.hide();
            }else{
                fielderror.show();
                valid=false;
            }
            break;
    }
    return valid;
};

validForm = function(){
    valid=true;
    $(".form-control").each(function(){valid&=validate($(this))});
    return valid;
};

$(document).on("change", ".form-control", function() {
    validate($(this));
});

$(document).on("click","button#submitform",function(){

    if(validForm()){
        var data = {};
        $('form.contact').serializeArray().map(function(x){data[x.name] = x.value;}); 
        $.ajax({
            type: "POST",
            url: "/message",
            data: data,
            success: function(msg){
                    console.log("success "+ msg);
            },
            error: function(err){
                    console.log("fail ajax post: "+ String(err)); 
            }
        });
        $("form.contact>#button").html("<p>Thank You. Your message has been sent.</p>");
    }else{
    }
});