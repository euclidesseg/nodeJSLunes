function saludar() {
    // simulando el tiempo de un proceso 
    setTimeout(function() { console.log(`Hi how're you?`)
    despedir() //llmando a l afuncion 2
}, 2000);

   
}

function despedir() {
    console.log(`bye`);
}

saludar(); //llmando a la funcio 1
