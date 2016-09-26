/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var LoginService = {

    redirecionar:function(id) {
        
        var response;
        console.log(id);
        if(id.length>0){
            
            response={
                url:"listarUsuarios.html",
                
            }
            
        }else{
            response={
                message:"Usuario e/ou senha inválidos",                
            } 
            
        }
      return response;

    }


};
