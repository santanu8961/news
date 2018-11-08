

// console.log("Tets!!")

function savepost(){
   var name = $('#name').val() ;
      var email = $('#email').val();
    var   phone = $('#phone').val();
      var msg = CKEDITOR.instances.msg.getData();
      var short_msg = $('#short-msg').val();
      var blogtitle = $('#blogtitle').val();

      data = { 
        'name':name,
        'email':email,
        'phone':phone,
        'msg':msg,
        'short_msg':short_msg,
        'blogtitle':blogtitle
    }
    console.log(data);
    if(data.name ==`` || data.email==`` || data.msg==`` || data.short_msg == `` || data.blogtitle == ``){   
        
        alert("Please Enter valid details!")
    }else{
        $.ajax({
            type: 'POST',
            data: data,
                 url: '/savepost',
            datatype: 'JSON',
        }).done(
            alert("Post Saved Successfully"),
            location.reload()
        ); 
        
    }
   
    
    // alert("Successful!")
}



  


