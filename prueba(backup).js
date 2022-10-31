
/*let usuario = 'carlos'
let email = 'carlos@gmail.com'
let pass = 1234


let saludo = confirm( 'esta usted registrado como cliente?')

    if (saludo) {
                  validar(email,usuario);

            }else{
            
            let confirmacion = confirm( 'desea registrarse');
                if(confirmacion){
                    tecnico();
                }else{
                    alert('debe crear un ususario para ver los precios')
                }
            }


function validar(email,usuario){

    let email_ingresado =  prompt( 'Ingrese su email');
    let usuario_ingresado = prompt ( ' Ingrese su usuario');
    
     if((email_ingresado == email) && (usuario_ingresado == usuario)) 
     alert (' bienvenido ' + usuario_ingresado);
       
     if((email_ingresado == email) && (usuario_ingresado != usuario))
     alert ( 'debe ingresar un usuario valido para continuar') ;

     if((email_ingresado != email) && (usuario_ingresado == usuario))
     alert ( 'debe ingresar un email valido para continuar') ;

     if((email_ingresado != email) && (usuario_ingresado != usuario))
     alert ( 'debe ingresar un email valido para continuar') ;

}    

function crearcliente(email,usuario){  

    let nuevousuario = promt('ingrese usuario a registrar');
    let nuevomail = promt('ingrese nuevo mail a registrar');
    
    if ((nuevousuario != usuario)&&(nuevomail != email)) {
      alert(' Usario creado')
    }else{
      alert('el usuario ya existe')
    }
     }  

*/

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

let arreglo_tecnico = new Array ();
arreglo_tecnico.push(new tecnico('carlos','carlos@gmail.com','1234'));

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
    
    
    let usuario = 'carlos';
    let email = 'carlos@gmail.com'; 
    let email_ingresado =  prompt( 'Ingrese su email');
    let usuario_ingresado = prompt ( ' Ingrese su usuario');
    
     if((email_ingresado == email) && (usuario_ingresado == usuario)) 
     alert (' bienvenido ' + usuario_ingresado);
       
     if((email_ingresado == email) && (usuario_ingresado != usuario))
     alert ( 'debe ingresar un usuario valido para continuar') ;

     if((email_ingresado != email) && (usuario_ingresado == usuario))
     alert ( 'debe ingresar un email valido para continuar') ;

     if((email_ingresado != email) && (usuario_ingresado != usuario))
     alert ( 'debe ingresar un email valido para continuar') ;
}

function crearusuario(){

     let tecnico_nuevo = pedirdatos();

     if (tecnico_nuevo) {

        tecnico_nuevo.set_id(gen_id);
        gen_id ++;

        arreglo_tecnico.push(tecnico_nuevo);
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
                return check=false;
                return new tecnico(usuario,mail,pass);
            } else{
                return new tecnico(usuario,mail,pass);
            }
           

        }
    }

        return false ;

    }

function existen_tecnicos(){

        if (arreglo_tecnico.length == 0) {    
        alert("No hay tecnicos registrados");
            
                    return false ;
                }
            
            
                return true ;
            
            }
    
    

function mostrarusuarios(){

    
    let mensaje = 'Los tecnicos registrados son:';

     arreglo_tecnico.forEach(tecnico => {
        mensaje += '\n' + tecnico.mostrar_descripcion();
        
     });

    alert(mensaje);
}
