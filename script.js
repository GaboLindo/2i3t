escrever = msg=> alert(msg);
soma = (a,b) => a + b;
sub= (a,b) => a - b;
mult = (a,b) => a * b;
raiz = a => Math.sqrt(a);
equacao2grau =(a,b,c) =>{

   let delta = sub(mult(b,b),mult(4,mult(a,c)));
   if(delta< 0 ) return "nao possui raiz real.";
   if(delta == 0 ) return "X1 = X2 =." + div(-b,mult(2,a));
   return "X1 = " + div (soma (-b,raiz(delta)),mult(2,a)) + " X2 ="
     + div (sub (-b,raiz(delta)),mult(2,a))
   
     }
     escrever(equacao2grau(3,2,1))
    ]function desliga_calculadora(){






     
     
     
     
     
     
     
     
     
      desliga = !desliga;

      if(desliga){
        zerar();
      }
      else{
        zerar();
        mostrar_resultado();
        valor="";
      }
      }
      function porcentenagem () {  
        if (executar ="mult"){

         b=valor;
         valor = div (mult(a,b),100);
        }
        
      }











    }

    











}