// interface Artist {
//     name: string,
//     avatar_img: string,
//     background_img: string,
//     about_artist: string,
    
// }

// const favouriteArtist: Artist[] = [ 
//     {
//         name: "Alexandroo",
//         avatar_img: "https://images.unsplash.com/photo-1550560888-7bd784b8ebec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
//         background_img: "https://images.unsplash.com/photo-1682685797277-f2bf89b24017?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3870&q=80",
//         about_artist: "",
//     },
//     {
//         name: "Pedro Moreno",
//         avatar_img: "https://images.unsplash.com/photo-1576409372120-ffc3d5c260e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80",
//         background_img: "",
//         about_artist: "",
//     },
//     {
//         name: "NOMO",
//         avatar_img: "https://images.unsplash.com/flagged/photo-1572482810910-9ff68908fcf8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
//         background_img: "",
//         about_artist: "",
//     },
//     {
//         name: "Xenno",
//         avatar_img: "https://images.unsplash.com/photo-1575426158836-0be172e108ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80",
//         background_img: "",
//         about_artist: "",
//     },
//     {
//         name: "Anomaly",
//         avatar_img: "https://images.unsplash.com/photo-1599839619722-39751411ea63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1588&q=80",
//         background_img: "",
//         about_artist: "",
//     },
//     {
//         name: "Christian Terson",
//         avatar_img: "https://images.unsplash.com/photo-1575285113814-f770cb8c796e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
//         background_img: "",
//         about_artist: "",
//     },
//     {
//         name: "Jon Altes",
//         avatar_img: "https://images.unsplash.com/photo-1431308305062-f218b6fe520a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
//         background_img: "",
//         about_artist: "",
//     },
//     // {
//     //     name: "Alexandroo",
//     //     avatar_img: "",
//     //     background_img: "",
//     //     about_artist: "",
//     // },
//     // {
//     //     name: "Alexandroo",
//     //     avatar_img: "",
//     //     background_img: "",
//     //     about_artist: "",
//     // },
//     // {
//     //     name: "Alexandroo",
//     //     avatar_img: "",
//     //     background_img: "",
//     //     about_artist: "",
//     // },
// ]



// ====================================================

// function renderArtist(favouriteArtist: Artist){
//     const artistBottomWrapper = document.querySelector('.artist-bottom');
//     const artistContent = document.createElement('div')
//     artistContent.classList.add("artist-content", "relative", "cursor-pointer");

//     artistContent.innerHTML = `                        <img class="wh-100" src="${favouriteArtist.avatar_img}" alt="">
//     <p class="artist-name absolute padd-in-1rem padd-block-04rem color-text header-font-family white-space text-ellipsis uppercase">${favouriteArtist.name}</p>
//     <div class="linear-box absolute left-0 wh-100"></div>`



//     artistBottomWrapper?.appendChild(artistContent)

    

// }





// function renderArtistModal(artist: Artist) {
//     const artistModalContainer = document.querySelector('.artis-module-container') as HTMLElement | null;
//     const modalWrapper = document.querySelector('.artis-module-wrapper') as HTMLElement | null;
    
//     if (modalWrapper !== null) {
//       const scrollPosition = window.scrollY;
//       const topPosition = scrollPosition + 16;
//       modalWrapper.style.top = `${topPosition}px`;
//     }
    
//     if (artistModalContainer !== null) {
//       const backgroundModal = document.createElement('div');
//       backgroundModal.className = 'background-modal';
    
//       const artistModal = document.createElement('div');
//       artistModal.classList.add('artist-module-wrapper');
    
//       artistModalContainer.appendChild(backgroundModal);
//       artistModalContainer.appendChild(artistModal);

    

//     artistModal.innerHTML = `<div class="previewModal--avatar wh-100">
//     <img class="previewModal--avatar-img wh-100 object-cover" src="${artist.background_img}" alt="">
// </div>
// <div class="previewModal--close wh-100 cursor-pointer">
//     X
// </div>
// <div class="previewModal--info wh-100 padd-1rem flex flex-direction-column">
//         <h1 class="artist-title mar">${artist.name}</h1>
//         <div class="flex justify-between align-center">
//             <div class="">
//                 <h2 class="margin-top-1rem">Next concert</h2>
//                 <span>SOMEWHERE</span>
//             </div>
//             <div class="">
//                 <h2 class="margin-top-1rem">Last concert</h2>
//                 <span>SOMEWHERE</span>
//             </div>
//         </div>
//         <p class="border-top margin-block-2rem padd-block-1rem">
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, non id veritatis impedit sequi ex possimus perferendis consequatur, animi hic accusamus beatae omnis voluptatibus ab libero explicabo eveniet, itaque consequuntur!
//         </p>
//         <div class="flex flex-direction-column gap-1rem">
//             <h3>Music</h3>
//             <div class="flex flex-direction-column gap-04rem">
//                 <div class="flex gap-1rem">
//                     <div class="single-avatar">
//                         <img class="wh-100" src="${artist.avatar_img}" alt="">
//                     </div>
//                     <div class="flex align-center justify-between w-100">
//                         <div class="flex flex-direction-column gap-04rem">
//                             <span class="single-title">SOMETHIN</span>
//                             <span class="single-artist">${artist.about_artist}</span>
//                         </div>
//                         <div class="flex flex-direction-column gap-04rem">
//                             <span class="single-title">03:12</span>
                            
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>

// </div>

// </div>`
// }
// }


// for (const artist of favouriteArtist) {
//     renderArtist(artist);
//     // renderArtistModal(artist)
// }

// const artistContentBtn = document.querySelectorAll('artist-content');


// artistContentBtn.forEach((btn, index) => {
//     btn.addEventListener("click", () => {
//       renderArtistModal(favouriteArtist[index]);
//     });
//   });



// ========================













function renderArtist(favouriteArtist: Artist) {
    const artistBottomWrapper = document.querySelector('.artist-bottom');
    const artistContent = document.createElement('div');
    artistContent.classList.add("artist-content", "relative", "cursor-pointer");
  
    artistContent.innerHTML = `
      <img class="wh-100" src="${favouriteArtist.avatar_img}" alt="">
      <p class="artist-name absolute padd-in-1rem padd-block-04rem color-text header-font-family white-space text-ellipsis uppercase">${favouriteArtist.name}</p>
      <div class="linear-box absolute left-0 wh-100"></div>`;
  
    artistBottomWrapper?.appendChild(artistContent);
  }
  
  
  interface Artist {
    name: string;
    avatar_img: string;
    background_img: string;
    about_artist: string;
    music:{
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
    }
  }
  
  const favouriteArtist: Artist[] = [
    {
      name: "Alexandroo",
      avatar_img: "https://images.unsplash.com/photo-1550560888-7bd784b8ebec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
      background_img: "https://images.unsplash.com/photo-1550560888-7bd784b8ebec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
      about_artist: "",
      music:{
        1: "string",
        2: "string",
        3: "string",
        4: "string",
        5: "string",
        6: "string",
      }
    },
    {
      name: "Pedro Moreno",
      avatar_img: "https://images.unsplash.com/photo-1576409372120-ffc3d5c260e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80",
      background_img: "https://images.unsplash.com/photo-1576409372120-ffc3d5c260e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80",
      about_artist: "",
      music:{
        1: "string",
        2: "string",
        3: "string",
        4: "string",
        5: "string",
        6: "string",
      }
    },
    {
      name: "Xenno",
      avatar_img: "https://images.unsplash.com/photo-1575426158836-0be172e108ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80",
      background_img: "https://images.unsplash.com/photo-1575426158836-0be172e108ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80",
      about_artist: "",
      music:{
        1: "string",
        2: "string",
        3: "string",
        4: "string",
        5: "string",
        6: "string",
      }
    },
    {
      name: "Anomaly",
      avatar_img: "https://images.unsplash.com/photo-1599839619722-39751411ea63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1588&q=80",
      background_img: "https://images.unsplash.com/photo-1599839619722-39751411ea63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1588&q=80",
      about_artist: "",
      music:{
        1: "string",
        2: "string",
        3: "string",
        4: "string",
        5: "string",
        6: "string",
      }
    },
    {
      name: "Christian Terson",
      avatar_img: "https://images.unsplash.com/photo-1575285113814-f770cb8c796e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      background_img: "https://images.unsplash.com/photo-1575285113814-f770cb8c796e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      about_artist: "",
      music:{
        1: "string",
        2: "string",
        3: "string",
        4: "string",
        5: "string",
        6: "string",
      }
    },
    {
      name: "Jon Altes",
      avatar_img: "https://images.unsplash.com/photo-1431308305062-f218b6fe520a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
      background_img: "https://images.unsplash.com/photo-1431308305062-f218b6fe520a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
      about_artist: "",
      music:{
        1: "string",
        2: "string",
        3: "string",
        4: "string",
        5: "string",
        6: "string",
      }

    },
  ];
  




  
  function renderArtistModal(artist: Artist) {
    // const artistModalContainer = document.querySelector('.artist-module-container') as HTMLDivElement;
    // const modalWrapper = document.querySelector('.artist-module-wrapper') as HTMLDivElement;
    const artistBottomWrapper = document.querySelector('.artist-bottom') as HTMLDivElement;
    const artistModalContainer = document.createElement('div') as HTMLDivElement;
    artistModalContainer.className = 'artist-module-container';
    // const artistModalContainer = document.querySelector('.artist-module-container') as HTMLDivElement;



    const backgroundModal = document.createElement('div') as HTMLDivElement;
    backgroundModal.className = 'background-modal';

    artistModalContainer.appendChild(backgroundModal);
    artistBottomWrapper.appendChild(artistModalContainer)




    if (artistModalContainer !== null) {
      // artistModalContainer.style.display = 'block';
  
      const artistModal = document.createElement('div');
      artistModal.classList.add('artist-module-wrapper');
      // artistModal.style.backgroundImage = `url(${artist.background_img})`;

      const artistBox = document.createElement('div');
      artistBox.classList.add('artist-box');
      artistBox.style.backgroundImage = `url(${artist.background_img})`;
  
    //   artistModalContainer.appendChild(backgroundModal);
    artistModalContainer.appendChild(artistModal);
    artistModal.appendChild(artistBox);
  
    artistBox.innerHTML = `
        <div class="previewModal--avatar wh-100">

        </div>
        <div class="previewModal--close wh-100 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 20.953 20.953">
        <path id="close" d="M28.477,9.619l-2.1-2.1L18,15.9,9.619,7.523l-2.1,2.1L15.9,18,7.523,26.381l2.1,2.1L18,20.1l8.381,8.381,2.1-2.1L20.1,18Z" transform="translate(-7.523 -7.523)" fill="#fff"/>
      </svg>      
        </div>
        <div class="previewModal--info wh-100 padd-1rem flex flex-direction-column">
          <h1 class="artist-title mar">${artist.name}</h1>
          <div class="flex justify-between align-center">
            <div class="">
              <h2 class="margin-top-1rem">Next concert</h2>
              <span>SOMEWHERE</span>
            </div>
            <div class="">
              <h2 class="margin-top-1rem">Last concert</h2>
              <span>SOMEWHERE</span>
            </div>
          </div>
          <p class="border-top margin-block-2rem padd-block-1rem">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, non id veritatis impedit sequi ex possimus perferendis consequatur, animi hic accusamus beatae omnis voluptatibus ab libero explicabo eveniet, itaque consequuntur!
          </p>
          <div class="flex flex-direction-column gap-1rem">
            <h3>Music</h3>
            <div class="flex flex-direction-column gap-04rem">
              <div class="flex gap-1rem">
                <div class="single-avatar">
                  <img class="wh-100" src="${artist.avatar_img}" alt="">
                </div>
                <div class="flex align-center justify-between w-100">
                  <div class="flex flex-direction-column gap-04rem">
                    <span class="single-title">SOMETHIN</span>
                    <span class="single-artist">${artist.about_artist}</span>
                  </div>
                  <div class="flex flex-direction-column gap-04rem">
                    <span class="single-title">03:12</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;
      const topPosition: number = window.scrollY;
    artistModal.style.setProperty('--scroll-y', `${topPosition}px`);

    
  }
  document.body.addEventListener('wheel', preventScroll, {passive: false});
    function preventScroll(e: any){
        e.preventDefault();
        e.stopPropagation();

        return false;
      }
      // document.body.style.overflow = "hidden"
  const closeModalBtn = document.querySelectorAll('.previewModal--close');
  // const backgroundModal = document.querySelector('.background-modal') as HTMLDivElement;
  backgroundModal.style.display = "block"
  closeModalBtn.forEach(btn => 
    btn.addEventListener("click", () =>{
      document.body.removeEventListener('wheel', preventScroll);
          const artistModal = document.querySelector('.artist-module-wrapper') as HTMLDivElement;
          if(artistModalContainer)
          artistModalContainer.remove()
          artistModalContainer.style.display = 'none';
          backgroundModal.style.display = "none"
        }))
            backgroundModal?.addEventListener('click', () => {
              document.body.removeEventListener('wheel', preventScroll);
                const artistModal = document.querySelector('.artist-module-wrapper') as HTMLDivElement;
                artistModalContainer.remove()
                    if(artistModalContainer)
                    artistModalContainer.style.display = 'none';
                    backgroundModal.style.display = "none"
    });
  }

  
  // Example usage:
  favouriteArtist.forEach((artist) => {
    renderArtist(artist);
  });
  
  const artistContentElements = document.querySelectorAll('.artist-content');
  artistContentElements.forEach((element, index) => {
    element.addEventListener('click', () => {
      renderArtistModal(favouriteArtist[index]);
    });
  });
  







// function renderArtist(favouriteArtist: Artist) {
//     const artistBottomWrapper = document.querySelector('.artist-bottom');
//     const artistContent = document.createElement('div');
//     artistContent.classList.add("artist-content", "relative", "cursor-pointer");
  
//     artistContent.innerHTML = `
//       <img class="wh-100" src="${favouriteArtist.avatar_img}" alt="">
//       <p class="artist-name absolute padd-in-1rem padd-block-04rem color-text header-font-family white-space text-ellipsis uppercase">${favouriteArtist.name}</p>
//       <div class="linear-box absolute left-0 wh-100"></div>`;
  
//     artistBottomWrapper?.appendChild(artistContent);
  
//     artistContent.addEventListener('click', () => {
//       const artistModalContainer = document.querySelector('.artis-module-container') as HTMLDivElement;
//       if(artistModalContainer)
//       artistModalContainer.innerHTML = '';
//       renderArtistModal(favouriteArtist);
//       if(artistModalContainer)
//       artistModalContainer.style.display = 'block';
//     });
//   }
  
//   function renderArtistModal(artist: Artist) {
//     const artistModalContainer = document.querySelector('.artis-module-container');
//     const modalWrapper = document.querySelector('.artis-module-wrapper');
  
//     if (modalWrapper !== null) {
//       const scrollPosition = window.scrollY;
//       const topPosition = scrollPosition + 16;
//       modalWrapper.style.top = `${topPosition}px`;
//     }
  
//     if (artistModalContainer !== null) {
//       const backgroundModal = document.createElement('div');
//       backgroundModal.className = 'background-modal';
  
//       const artistModal = document.createElement('div');
//       artistModal.classList.add('artist-module-wrapper');
  
//       artistModalContainer.appendChild(backgroundModal);
//       artistModalContainer.appendChild(artistModal);
  
//       artistModal.innerHTML = `
//         <div class="previewModal--avatar wh-100">
//           <img class="previewModal--avatar-img wh-100 object-cover" src="${artist.background_img}" alt="">
//         </div>
//         <div class="previewModal--close wh-100 cursor-pointer">
//           X
//         </div>
//         <div class="previewModal--info wh-100 padd-1rem flex flex-direction-column">
//           <h1 class="artist-title mar">${artist.name}</h1>
//           <div class="flex justify-between align-center">
//             <div class="">
//               <h2 class="margin-top-1rem">Next concert</h2>
//               <span>SOMEWHERE</span>
//             </div>
//             <div class="">
//               <h2 class="margin-top-1rem">Last concert</h2>
//               <span>SOMEWHERE</span>
//             </div>
//           </div>
//           <p class="border-top margin-block-2rem padd-block-1rem">
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, non id veritatis impedit sequi ex possimus perferendis consequatur, animi hic accusamus beatae omnis voluptatibus ab libero explicabo eveniet, itaque consequuntur!
//           </p>
//           <div class="flex flex-direction-column gap-1rem">
//             <h3>Music</h3>
//             <div class="flex flex-direction-column gap-04rem">
//               <div class="flex gap-1rem">
//                 <div class="single-avatar">
//                   <img class="wh-100" src="${artist.avatar_img}" alt="">
//                 </div>
//                 <div class="flex align-center justify-between w-100">
//                   <div class="flex flex-direction-column gap-04rem">
//                     <span class="single-title">SOMETHIN</span>
//                     <span class="single-artist">${artist.about_artist}</span>
//                   </div>
//                   <div class="flex flex-direction-column gap-04rem">
//                     <span class="single-title">03:12</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>`;
  
//       const closeModalBtn = artistModal.querySelector('.previewModal--close');
//       closeModalBtn?.addEventListener('click', () => {
//         artistModalContainer.style.display = 'none';
//       });
  
//       backgroundModal.addEventListener('click', () => {
//         artistModalContainer.style.display = 'none';
//       });
//     }
//   }
  
//   interface Artist {
//     name: string;
//     avatar_img: string;
//     background_img: string;
//     about_artist: string;
//   }
  
//   const favouriteArtist: Artist[] = [
//     {
//       name: "Alexandroo",
//       avatar_img: "https://images.unsplash.com/photo-1550560888-7bd784b8ebec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
//       background_img: "https://images.unsplash.com/photo-1682685797277-f2bf89b24017?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3870&q=80",
//       about_artist: "",
//     },
//     {
//       name: "Pedro Moreno",
//       avatar_img: "https://images.unsplash.com/photo-1576409372120-ffc3d5c260e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80",
//       background_img: "",
//       about_artist: "",
//     },
//     {
//       name: "NOMO",
//       avatar_img: "https://images.unsplash.com/flagged/photo-1572482810910-9ff68908fcf8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
//       background_img: "",
//       about_artist: "",
//     },
//     {
//       name: "Xenno",
//       avatar_img: "https://images.unsplash.com/photo-1575426158836-0be172e108ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80",
//       background_img: "",
//       about_artist: "",
//     },
//     {
//       name: "Anomaly",
//       avatar_img: "https://images.unsplash.com/photo-1599839619722-39751411ea63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80",
//       background_img: "",
//       about_artist: "",
//     },
//   ];
  
//   const artistBottomWrapper = document.querySelector('.artist-bottom');
//   artistBottomWrapper?.classList.add('flex', 'flex-wrap', 'gap-1rem');
  
//   favouriteArtist.forEach(artist => {
//     renderArtist(artist);
//   });
  


  



