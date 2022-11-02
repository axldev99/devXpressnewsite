//Force le scroll pour 2 secondes
history.scrollRestoration = "manual";

setTimeout(()=> document.body.classList.remove('no-scroll') ,2000);
//Fin du force scroll