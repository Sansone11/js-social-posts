// console.log('JS ok');
// CONSEGNA
// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
// Milestone 1
// Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// id del post, numero progressivo da 1 a n
// nome autore,
// foto autore,
// data in formato americano (mm-gg-yyyy),
// testo del post,
// immagine (non tutti i post devono avere una immagine),
// numero di likes.
// Non è necessario creare date casuali
// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. loremPicusm o Unsplash (https://unsplash.it/300/300?image=<id>)
// Milestone 2
// Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
// Milestone 3
// Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
// BONUS
// Formattare le date in formato italiano (gg/mm/aaaa)
// Gestire l’assenza dell’immagine profilo con un elemento di fallback che contiene le iniziali dell’utente (es. Luca Formicola > LF).
// Al click su un pulsante “Mi Piace” di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.


// PSEUDOCODICE

// creo un array di oggetti(già presente)
// recupero glI elementi del dom con un document.getElementById(container)
// ciclo gli elementi delle array con un forEach
// faccio un console.log con notazione dot per verificare che gli elementi siano presenti
// attacco gli elementi in html con innerHtml
// crea dal bottone dell html un addEventListner ('click')
// cambia il display.style.color

// PSEUDOCODICE

// RECUPERO CONTAINER 
// CREO ARRAY VUOTO PER LIKES

// CICLO FOREACH POSTS
// CREO VAR BTN-LIKEHELL = TEMPLATE LIT DEL PULSANTE
// AGGIUNGI GUARDONE AL BOTTONE 
// INCREMENTARE NUM LIKES 
// idpost = this.dataset.postid
// const postElement = queryselector('#post-' + idpost + ' .js-likes-counter')
// postElement.innerhtml++

// CAMBIARE COLORE DEL TESTO BOTTONE
// this.classList.add('active')
// this.innerHtml = 'you like this'




const posts = [
    {
        id: 1,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/300?image=171",
        author: {
            name: "Phil Mangione",
            image: "https://unsplash.it/300/300?image=15"
        },
        likes: 80,
        created: "2021-06-25"
    },
    {
        id: 2,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=112",
        author: {
            name: "Sofia Perlari",
            image: "https://unsplash.it/300/300?image=10"
        },
        likes: 120,
        created: "2021-09-03"
    },
    {
        id: 3,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=234",
        author: {
            name: "Chiara Passaro",
            image: "https://unsplash.it/300/300?image=20"
        },
        likes: 78,
        created: "2021-05-15"
    },
    {
        id: 4,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=24",
        author: {
            name: "Luca Formicola",
            image: null
        },
        likes: 56,
        created: "2021-04-03"
    },
    {
        id: 5,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=534",
        author: {
            name: "Alessandro Sainato",
            image: "https://unsplash.it/300/300?image=29"
        },
        likes: 95,
        created: "2021-03-05"
    }
];

const cardElement = document.getElementById('container');

posts.forEach((element) => {
    let image = element.author.image;
    let buttonlikesEL = `<a class="like-button  js-like-button" href="#" data-postid="${element.id}">
<i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
<span class="like-button__label">Mi Piace</span>
</a>`;

    if (image === null) {
        image = 'https://unsplash.it/300/300?image='
    }

    cardElement.innerHTML += `<div class="post" id="post-${element.id}">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="${image}" alt="Phil Mangione">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${element.author.name}</div>
                <div class="post-meta__time">${element.created}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${element.content}</div>
    <div class="post__image">
        <img src="${element.media}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                ${buttonlikesEL}
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-1" class="js-likes-counter">80</b> persone
            </div>
        </div> 
    </div>`;
});

// mi creo una variabile button,con query sel all.
const buttonLike = document.querySelectorAll('.likes__cta');
// faccio un forEach sulla variabile stessa
buttonLike.forEach((element) => {
    // per ogni elemento applico l'add event.l
    element.addEventListener("click", function () {
        this.style.color = "red";
        idpost = this.dataset.postid
        const postElement = document.querySelector('#post-' + idpost + ' .js-likes-counter');
        postElement.innerhtml++
        this.classList.add('active');
        this.innerHtml = 'you like this';
    });
    

});


