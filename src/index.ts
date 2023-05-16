console.log("Siemka js")

interface Artist {
    name: string,
    avatar_img: string,
    background_img: string,
    about_artist: string,
    
}

const favouriteArtist: Artist[] = [ 
    {
        name: "Alexandroo",
        avatar_img: "https://images.unsplash.com/photo-1550560888-7bd784b8ebec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
        background_img: "",
        about_artist: "",
    },
    {
        name: "Pedro Moreno",
        avatar_img: "https://images.unsplash.com/photo-1576409372120-ffc3d5c260e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80",
        background_img: "",
        about_artist: "",
    },
    {
        name: "NOMO",
        avatar_img: "https://images.unsplash.com/flagged/photo-1572482810910-9ff68908fcf8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
        background_img: "",
        about_artist: "",
    },
    {
        name: "Xenno",
        avatar_img: "https://images.unsplash.com/photo-1575426158836-0be172e108ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80",
        background_img: "",
        about_artist: "",
    },
    {
        name: "Anomaly",
        avatar_img: "https://images.unsplash.com/photo-1599839619722-39751411ea63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1588&q=80",
        background_img: "",
        about_artist: "",
    },
    {
        name: "Christian Terson",
        avatar_img: "https://images.unsplash.com/photo-1575285113814-f770cb8c796e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        background_img: "",
        about_artist: "",
    },
    {
        name: "Jon Altes",
        avatar_img: "https://images.unsplash.com/photo-1431308305062-f218b6fe520a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
        background_img: "",
        about_artist: "",
    },
    // {
    //     name: "Alexandroo",
    //     avatar_img: "",
    //     background_img: "",
    //     about_artist: "",
    // },
    // {
    //     name: "Alexandroo",
    //     avatar_img: "",
    //     background_img: "",
    //     about_artist: "",
    // },
    // {
    //     name: "Alexandroo",
    //     avatar_img: "",
    //     background_img: "",
    //     about_artist: "",
    // },
]

function renderArtist(favouriteArtist: Artist){
    const artistBottomWrapper = document.querySelector('.artist-bottom');
    const artistContent = document.createElement('div')
    artistContent.classList.add("artist-content", "relative", "cursor-pointer");

    artistContent.innerHTML = `                        <img class="wh-100" src="${favouriteArtist.avatar_img}" alt="">
    <p class="artist-name absolute padd-in-1rem padd-block-04rem color-text header-font-family white-space text-ellipsis uppercase">${favouriteArtist.name}</p>
    <div class="linear-box absolute left-0 wh-100"></div>`



    artistBottomWrapper?.appendChild(artistContent)

    

}

for (const artist of favouriteArtist) {
    renderArtist(artist);
}