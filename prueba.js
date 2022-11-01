let formu = document.getElementById("formu");

formu.addEventListener('click', (event) => {
    //Objeto de evento
    if(event.target.className === 'formu'){
        if(event.target.children[0].style.display === "block"){
            event.target.children[0].style.display = "none";
        } else {
            event.target.children[0].style.display = "block";
        }
    }
});    

let almacenados = new Array ();
almacenados.push(new tecnico('carlos','carlos@gmail.com','1234'));

let gen_id = 1 ;

let flag = true ;

alert("Bienvenido, presione aceptar para ingresar");



while (flag){

    let mensaje = "Estas Registrado? Indique la opcion correcta: ";
    mensaje +=    "\n1) Si, estoy registrado ";
    mensaje +=    "\n2) No! deseo registrarme ";
    mensaje +=    "\n3) Soy el administrador y quiero ver todos los usuarios ingresados " ;
    mensaje +=    "\n4) Salir " ;
   

    let resp = prompt(mensaje) ;

    switch (resp){

        case "1" : 
                validarusuario();
                break;
        case "2" :          
                crearusuario();
                break;
        case "3" :
                if(existen_tecnicos){ 
                    mostrarusuarios()};
                break;
        case "4" : 
                alert("Gracias por utilizar nuestra pagina :) ");
                flag=false;
                break;        
        case null : 
                alert("Gracias por utilizar nuestra pagina :) ");
                flag=false;
                break;
        default : 
                alert ("No ingreso una opcion valida") ;                     


    }

}

/*function deseavolver(){

    let volvermenu = confirm ('Desea volver al menu anterior?');
    if (volvermenu) {
        prompt (mensaje);
    }
}*/

function validarusuario(){
    
     
    let usuario = prompt ( ' Ingrese su usuario');
    let user = buscar_usuario(usuario);
    
  
    if (user != false) {
        let usuario_recuperado = new tecnico (user)
  
      alert("Bienvenido "+usuario_recuperado.getDatos() );
  
    }else{
  
      alert("El usuario no existe !");
    }
}

function buscar_usuario(usuario){
  
    if ( !localStorage.getItem("listaUsuarios") ){
      return false;
    }
  
    let almacenados = JSON.parse(localStorage.getItem("listaUsuarios"));
    let encontrado = false;
    let i = 0;
   
    while (!encontrado && i != almacenados.length ){
  
      if (almacenados[i].usuario == usuario) {
  
        encontrado = almacenados[i];
  
      }
  
      i++;
      return encontrado;
  
    }
  
    
  
  }

function crearusuario(){

     let tecnico_nuevo = pedirdatos();
    
     if (tecnico_nuevo) {
     
   
       let almacenados = JSON.parse(localStorage.getItem("listaUsuarios"));
       almacenados.push(tecnico);
       localStorage.setItem("listaUsuarios",almacenados);
       tecnico.set_id(gen_id);
       gen_id ++;
   
     }else{
   
       let almacenados = new Array();
       almacenados.push(tecnico);
       localStorage.setItem("listaUsuarios",almacenados);
       tecnico.set_id(gen_id);
       gen_id ++;
   
   
     }
   }

    

function pedirdatos(){
    let check = true ;
    

    while (check){
        let msj = "" ;
        let usuario = prompt("Ingrese su nombre de usuario").trim();
        let mail = prompt ("ingrese su email").trim();
        let pass = prompt ("Ingrese su contraseña").trim(); 
        


        if (!usuario){

            msj += "\nDebe ingresar usuario";

        }

        if (!mail){

            msj += "\nDebe ingresar mail" ;
        }
        if (!pass){

            msj += "\nDebe ingresar Contraseña" ;
        }

        

        if (msj != ""){

            alert(msj);
            check = confirm ("Desea cargar de nuevo los datos");

        }else {
            
  
            alert('Usuario creado con exito');
            check=confirm('desea cargar un nuevo usuario?');
            if(check){
                return check = true;
                
            } else {

                return new tecnico(usuario,mail,pass);
            
        }}
    }

        return true ;
        

    }

function existen_tecnicos(){

        if (almacenados.length == 0) {    
        alert("No hay tecnicos registrados");
            
                    return false ;
                }
            
            
                return true ;
            
            }
    
    

function mostrarusuarios(){

    
    let mensaje = 'Los tecnicos registrados son:';

        almacenados.forEach(tecnico => {
        mensaje += '\n' + tecnico.mostrar_descripcion();
        
     });

    alert(mensaje);
}
