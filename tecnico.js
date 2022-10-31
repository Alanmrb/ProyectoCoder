class tecnico {

    
        constructor (usuario,mail,pass){
    
            this.usuario = usuario ;
            this.mail = mail ;
            this.pass = pass;
            this.id = 1;
        }
    
    
       
    
        mostrar_descripcion(){
    
            return (this.id + " - " +this.usuario + " - " + this.mail) ;
    
    
    
        }
    
      
       
        set_id(nuevo_id){
    
    
            this.id = nuevo_id ;
        }
    
    
    }