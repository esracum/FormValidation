$("#formValidation").validate({
    rules:{
        ad:{
            minlength: 2
        },
        soyad:{
            minlength: 2
        },
        email:{
            email: true
        },
        telefonNo:{
            number:true,
            minlength:10,
            maxlenght:10
        },
        password: {
            required: true,
            minlength: 8  // Minimum password length
        },
        passwordAgain: {
            equalTo: "#password"
        }

    },
    messages: {
        name:{
            required: "Please enter name",
            minlength:"Name at least 2 characters"
        },
        surname:{
            required: "Please enter surname",
            minlength:"Surame at least 2 characters"
        },
        email:{
            required: "Please enter email",  
        },
        number:{
            required: "Please enter telephone number",
            
        },
        password: {
            required: "Please enter a password",
            minlength: "Your password must be at least 8 characters long"
        },
       
       
    },


    submitHandler: function(form) {
      form.submit();
    }
});
