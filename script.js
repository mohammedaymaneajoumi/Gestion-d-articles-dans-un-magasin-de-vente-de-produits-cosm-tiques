var i = 0;
function AddProduct() {
    let nom = document.getElementById('Nom').value;
    let option = document.getElementById('select1').value;
    let Prix = document.getElementById('prix').value;
    let date = document.getElementById('Date').value;
    let type = document.getElementById('select2').value;
    let ProOui  = document.getElementById('Oui').value;
    let proNom = document.getElementById('Non').value;
    let ResRadio = document.createTextNode(ProOui);
    let ResRadio2 = document.createTextNode(proNom);
    let chekbox = document.getElementById('Oui').checked;  // to know when you select
    let chekboxx = document.getElementById('Non').checked; // to know when you select
    let table = document.getElementById('Table');          // declare table
    i++;

    let MyNewElement = document.createElement('tr');        // creat what appear when press button 
    let MyNewChild1 = document.createElement('td');         // creat what appear when press button 
    let MyNewChild2 = document.createElement('td');         // creat what appear when press button 
    let MyNewChild3 = document.createElement('td');         // creat what appear when press button 
    let MyNewChild4 = document.createElement('td');         // creat what appear when press button 
    let MyNewChild5 = document.createElement('td');         // creat what appear when press button 
    let MyNewChild6 = document.createElement('td');         // creat what appear when press button 
    let MyNewChild7 = document.createElement('td'); 
    MyNewElement.id="tr"+i;        

    let MyNewChild8 = document.createElement('button');     // creat BUTTONS SUP AND MODIF when press button 
    let MyNewChild9 = document.createElement('button');
    MyNewChild8.setAttribute("onclick","MODIFIER()");       //ONCLICK TO BUTTONS
    MyNewChild9.setAttribute("onclick",'SUPRIMER('+i+')');



    let TextNom = document.createTextNode(nom);             ////////put input value in variable
    let textOption = document.createTextNode(option);
    let textPrix = document.createTextNode(Prix);
    let textDate = document.createTextNode(date);
    let textType = document.createTextNode(type);
    let buttonM = "🖍️​";
    let buttonS = "❌​";
    let ButtonNameM = document.createTextNode(buttonM);
    let ButtonNames = document.createTextNode(buttonS);    //// CREAT TEXT NODE  AJOUTER TEXT TO ELEMENT


    
    MyNewChild1.appendChild(TextNom);                       ////////put this variable in td
    MyNewChild2.appendChild(textOption);
    MyNewChild3.appendChild(textPrix);
    MyNewChild4.appendChild(textDate);
    MyNewChild5.appendChild(textType);

    MyNewElement.appendChild(MyNewChild1);                  /////////// put td inside tR FOR 4 INPUTS
    MyNewElement.appendChild(MyNewChild2);
    MyNewElement.appendChild(MyNewChild3);
    MyNewElement.appendChild(MyNewChild4);
    MyNewElement.appendChild(MyNewChild5);

    if(chekbox==true){                                      // put td inside th RADIO BUTTON
        MyNewChild6.appendChild(ResRadio);                  //put declare to td
        MyNewElement.appendChild(MyNewChild6);              //td inside tr
    }
    else if(chekboxx==true){
        MyNewChild6.appendChild(ResRadio2);
        MyNewElement.appendChild(MyNewChild6);
    }
    
    MyNewChild8.appendChild(ButtonNameM);                   //////////////////CONTENU DU BUTTON
    MyNewChild9.appendChild(ButtonNames); 
    MyNewChild7.appendChild(MyNewChild8);                   ////////// put BUTTOMNS INSIDE TD
    MyNewChild7.appendChild(MyNewChild9);
    MyNewElement.appendChild(MyNewChild7);                  ////////// put td inside th FULL LIGNE


    table.appendChild(MyNewElement);                        //////////////tr OR FUL LIGNE inside table 
    document.getElementById('Oui').checked= "";  
    document.getElementById('Non').checked = "";
    document.getElementById('Nom').value = "";
    document.getElementById('select1').value = "";
    document.getElementById('prix').value = "";
    document.getElementById('Date').value = "";
    document.getElementById('select2').value = "";
    
}

function SUPRIMER(i){
    document.getElementById('tr'+i).remove();
    
}

let table = document.getElementById('Table'),rIndex; 
function MODIFIER(){
    document.getElementById('btnAjouter').style.display="none";
    document.getElementById('btnModifier').style.display="block";

    for (let i = 0 ; i<=table.rows.length ; i++){
        table.rows[i].onclick = function(){
            rIndex = this.rowIndex;
            document.getElementById('Nom').value = this.cells[0].innerHTML;
            document.getElementById('select1').value = this.cells[1].innerHTML;
            document.getElementById('prix').value = this.cells[2].innerHTML;
            document.getElementById('Date').value = this.cells[3].innerHTML;
            document.getElementById('select2').value = this.cells[4].innerHTML;
            document.getElementById('Oui').checked = this.cells[5].innerHTML;
            document.getElementById('Non').checked = this.cells[5].innerHTML;
        };

    }

}
function ModProduct(){
    document.getElementById('btnAjouter').style.display="block"
    document.getElementById('btnModifier').style.display="none"
    let chekbox = document.getElementById('Oui').checked; 
    let chekboxx = document.getElementById('Non').checked;
    table.rows[rIndex].cells[0].innerHTML = document.getElementById('Nom').value;
    table.rows[rIndex].cells[1].innerHTML = document.getElementById('select1').value;
    table.rows[rIndex].cells[2].innerHTML = document.getElementById('prix').value;
    table.rows[rIndex].cells[3].innerHTML = document.getElementById('Date').value;
    table.rows[rIndex].cells[4].innerHTML =document.getElementById('select2').value;
    if(chekbox==true){                                 
        table.rows[rIndex].cells[5].innerHTML = document.getElementById('Oui').value;
    }
    if(chekboxx==true){
        table.rows[rIndex].cells[5].innerHTML = document.getElementById('Non').value;
    }
    
}