function AddProduct() {
    let nom = document.getElementById('Nom').value;
    let option = document.getElementById('select1').value;
    let Prix = document.getElementById('prix').value;
    let date = document.getElementById('Date').value;
    let type = document.getElementById('select2').value;
    let ProOui  = document.getElementById('Oui').value;
    let proNom = document.getElementById('Non').value;
    let chekbox = document.getElementById('Oui').checked;  // to know when you select
    let chekboxx = document.getElementById('Non').checked; // to know when you select
    let table = document.getElementById('Table');          // declare table


    let MyNewElement = document.createElement('tr');        // creat what appear when press button 
    let MyNewChild1 = document.createElement('td');         // creat what appear when press button 
    let MyNewChild2 = document.createElement('td');         // creat what appear when press button 
    let MyNewChild3 = document.createElement('td');         // creat what appear when press button 
    let MyNewChild4 = document.createElement('td');         // creat what appear when press button 
    let MyNewChild5 = document.createElement('td');         // creat what appear when press button 
    let MyNewChild6 = document.createElement('td');         // creat what appear when press button 
    let MyNewChild7 = document.createElement('td');         // creat what appear when press button 

    let MyNewChild8 = document.createElement('button');     // creat BUTTONS SUP AND MODIF when press button 
    let MyNewChild9 = document.createElement('button');
    MyNewChild8.setAttribute("onclick","MODIFIER()");       //ONCLICK TO BUTTONS
    MyNewChild9.setAttribute("onclick","SUPRIMER()");



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
        let resRadio = document.createTextNode(ProOui);     //declare 
        MyNewChild6.appendChild(resRadio);                  //put declare to td
        MyNewElement.appendChild(MyNewChild6);              //td inside tr
    }
    if(chekboxx==true){
        let resRadio = document.createTextNode(proNom );
        MyNewChild6.appendChild(resRadio);
        MyNewElement.appendChild(MyNewChild6)
    }
    
    MyNewChild8.appendChild(ButtonNameM);                   //////////////////CONTENU DU BUTTON
    MyNewChild9.appendChild(ButtonNames); 
    MyNewChild7.appendChild(MyNewChild8);                   ////////// put BUTTOMNS INSIDE TD
    MyNewChild7.appendChild(MyNewChild9);
    MyNewElement.appendChild(MyNewChild7);                  ////////// put td inside th FULL LIGNE


    table.appendChild(MyNewElement);                        //////////////tr OR FUL LIGNE inside table 

}