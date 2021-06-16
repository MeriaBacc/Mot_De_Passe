
function afficher()
{
        var divContenu = document.getElementById("myTable");

        if(divContenu.style.display == 'none' ) {
            divContenu.style.display = 'block';   
        } else {
            divContenu.style.display = 'none';
        }
}

function affiche(valeur){
    document.getElementById("output").value += valeur ;
}


function test(){
    var ch = document.getElementById("output").value;
    

	if (ch == "")
    {
        alert("remplit le mot de passe");
        return false; 
    }
             /* nombre numerique */

    if (isNaN(ch) == true)
    {
        alert("c est n'a pas un numreo");
        document.getElementById("output").value= "";
        return false;
    }

            /* max length 6 et min 6 */

    if ((ch.length > 6) || (ch.length < 6))
    {
        alert("il faut egale a 6 ");
        document.getElementById("output").value= "";
        return false;
    }



    var arrayLignes = document.getElementById("myTable").rows; //on récupère les lignes du tableau
    var longueur = arrayLignes.length;//on peut donc appliquer la propriété length
    
    

    var Tab1 =["00", "01", "02", "10", "11", "12", "20", "21", "22", "30", "31", "32"];
    var Tab2 =["23","22", "21", "20", "13", "12", "11", "10", "03", "02", "01", "00"];
    if (longueur == 4)
    {   
        for(var i=0; i<ch.length; i++)
        {   
            for(var x=0; x<Tab1.length; x++)
            { 
                if(ch.charAt(i) == x)
                    document.write( "l'index est :"+Tab1[x]+ "<br>" );
            }
        }
    }
    else
    {
        for(var i=0; i<ch.length; i++)
        {   
            for(var x=0; x<Tab2.length; x++)
            { 
                if(ch.charAt(i) == x)
                    document.write( "l'index est :"+Tab1[x]+ "<br>" );
            }
        }
    
    }



    return true;
}
    


