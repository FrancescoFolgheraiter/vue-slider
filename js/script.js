const { createApp } = Vue;

createApp({
    data(){
        return{
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],
            counter: 0,
            autoplay: null,  
        };
    },

    methods: {
        slidePrev(){
            if ( this.counter > 0){
        
                this.counter--;
            }
            else{
        
                this.counter = this.slides.length -1;
            }
        },
        slideNext(){
            if ( this.counter < (this.slides.length - 1) ){
                this.counter++;
            }
            else{
                this.counter = 0;
            }
        },
        slideActive(number){
            if (this.counter == number){
                return "active";
            }
            else{
                return "";
            }
        },
        selectSlide(number){
            this.counter = number
        },
        mouseEnterSlider(){
            console.log("sei entrato nello slider")
            clearInterval(this.autoplay);
            //svuotamento variabile autplay
            this.autoplay = null;
        },
        mouseLeaveSlider(){
            console.log("hai lasciato lo slider")
            this.autoplay = setInterval(this.slideNext, 1000);
        }
    },
    mounted(){
        /*primo modo di scrivere setInterval tramite arrow function
        setInterval(() => {
            this.slideNext()
        }, 500)
        */
        //secondo modo, tramite definizione di funzione nominata
        this.autoplay = setInterval(this.slideNext, 1000);
        /*
        -non posso usare la scrittura di una function anonima perchè this fa riferimento
        alla window
        si può ovviare "sporcando il codice" in questa maniera
        const self = this;  -- permette di salvare in varialbile il this

        setInterval (function () {
            self.slideNext()
        }, 3000)
        */
    }
}).mount("#app");

/*
correzione

*/