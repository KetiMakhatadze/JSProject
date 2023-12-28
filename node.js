// let currentIndex = 0;
//         const slides = document.querySelectorAll('.slide');

//         function showSlide(index) {
//             slides.forEach((slide, i) => {
//                 slide.style.transform = `translateX(${(i - index) * 100}%)`;
//             });
//         }

//         function nextSlide() {
//             currentIndex = (currentIndex + 1) % slides.length;
//             showSlide(currentIndex);
//         }

//         function prevSlide() {
//             currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//             showSlide(currentIndex);
//         }

const sliders = [
    {
        id: 1,
        title: "Haikyuu Season 6",
        image: "./Images/Haikyuu.png",
        imdb: "8.7",
        releaseNote: "Releases February 16th 2024",
        description: "After three years away, we now know exactly when Haikyu is returning. Unfortunately for fans of Hinata’s attempts to make it to the top, it’s not long until the volleyball anime steps off the court for good. Haikyu the Movie: Decisive Battle at the Garbage Dump brings together two long-time rival schools in Karasuno and Nekoma to do battle once more. The Nationals will seemingly bring to an end a show that’s captivated us for nearly a decade. To help get you prepared, we’ll run the rule over what exactly to expect from Haikyu’s return. That includes the movie’s release date, first trailer, cast, and which manga chapters it’s likely to adapt."
    },
    {
        id: 2,
        title: "Demon Slayer Season 4",
        image: "./Images/demonslayer.jpg",
        imdb: "8.6",
        releaseNote: "Releases Spring 2024",
        description: "We finally know more about Demon Slayer season 4, AKA the Hashira Training arc. With 2024 just around the corner, animation  studio Ufotable has unveiled its plans for next year - including a release window for the new season, and an upcoming movie. The Demon Slayer season 4 release date window is Spring 2024. We'd expect the first episode to land in April 2024. Why? The first and third Demon Slayer seasons both premiered in April, so it makes for the anime to continue that tradition. Animes spring season also typically begins in April, so it's a safe bet that Tanjiro will return then."
    },
    {
        id: 3,
        title: "Jujutsu Kaisen Season 2",
        image: "./Images/jujutsukaiseni.jpg",
        imdb: "8.6",
        releaseNote: "Releases Every Thursday",
        description: "Yuji Itadori is a boy with tremendous physical strength, although he lives a completely ordinary high school life. One day, to save a classmate who has been attacked by curses, he eats the finger of Ryomen Sukuna, taking the curse into his own soul. From then on, he shares one body with Ryomen Sukuna. Guided by the most powerful of sorcerers, Satoru Gojo, Itadori is admitted to Tokyo Jujutsu High School, an organization that fights the curses... and thus begins the heroic tale of a boy who became a curse to exorcise a curse, a life from which he could never turn back."
    },
    {
        id: 4,
        title: "One Piece",
        image: "./Images/onepiece.jpg",
        imdb: "8.9",
        releaseNote: "Releases Every Sunday",
        description: "Eiichiro Oda’s One Piece is an insanely popular anime that has captivated audiences worldwide since its debut in 1999.Known for its vast universe and lovable characters, this long-running series has amassed over 20 seasons and an astounding 1,000 episodes. In addition to the regular episodes, One Piece offers a treasure trove of supplementary content, including TV specials, original video animations (OVAs), animated shorts, spin-offs, crossovers, and movies."
    }
]

let activeSlide = 0;

const renderSlider = () => {
    let _sliderContent = ``
    sliders.forEach((item, index)=>{
        _sliderContent += `
            <div class="slide ${index === activeSlide ? 'active' : ''}" id="anime1">
                <img src="${item.image}" alt="Anime 1" class="img1">
                <div class="anime-info">
                    <h1 class="satauri">${item.title}</h1>
                    <h2 class="imdb1">IMDB: ${item.imdb} </h2>
                    <p class="releases1">Release Date: ${item.releaseNote} </p>
                    <p class="info1">${item.description}</p>
                </div>
            </div>
        `
    })

    document.querySelector('.slider-content').innerHTML = _sliderContent
}

renderSlider()

const nextSlide = () => {
    if(activeSlide + 1 === sliders.length)return
    activeSlide++
    renderSlider()
}

const prevSlide = () => {
    if(activeSlide < 1)return
    activeSlide--
    renderSlider()
}