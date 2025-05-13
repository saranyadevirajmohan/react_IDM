// import { useState } from "react";

// export default function State() {
//     let [name, setName] = useState("saranya devi");
//     let [visible, setVisible] = useState(true);

//     return (
//         <div>
//             <button class="btn1" onClick={() => setVisible(true)}>
//                 Show Name
//             </button>
//             <button class="btn1" onClick={() => setVisible(false)}>
//                 Hide Name
//             </button>
//             {visible && <h2 class="s1">{name}</h2>}
//         </div>



//     );
// }
// import { useState } from "react";

// export default function ToggleName() {
//     const [visible, setVisible] = useState(true);

//     return (
//         <div className="flex flex-col items-center space-y-4 p-4">
//             <button 
//                 className="px-4 py-2 bg-blue-500 text-back rounded-lg" 
//                 onClick={() => setVisible(!visible)}
//             >
//                 {visible ? "Hide Name" : "Show Name"}
//             </button>
//             {visible && <h2 className="text-xl font-bold text-gray-700">Saranya Devi</h2>}
//         </div>
//     );
// // }
// import { useState } from "react";

// export default function ImageCarousel() {
//     const images = [
//         "https://via.placeholder.com/300x200/FF5733/FFFFFF?text=Image+1",
//         "https://via.placeholder.com/300x200/33FF57/FFFFFF?text=Image+2",
//         "https://via.placeholder.com/300x200/3357FF/FFFFFF?text=Image+3"
//     ];
    
//     const [index, setIndex] = useState(0);

//     const handleNextImage = () => {
//         setIndex((prevIndex) => (prevIndex + 1) % images.length);
//     };

//     return (
//         <div className="flex flex-col items-center space-y-4 p-4">
//             <img src={images[index]} alt="carousel" className="w-64 h-40 rounded-lg shadow-lg" />
//             <button 
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg" 
//                 onClick={handleNextImage}
//             >
//                 Next Image
//             </button>
//         </div>
//     );
// }
// import { useState } from "react";

// export default function ImageCarousel() {
//     const images = [
//         "https://via.placeholder.com/300x200/FF5733/FFFFFF?text=Image+1",
//         "https://via.placeholder.com/300x200/33FF57/FFFFFF?text=Image+2",
//         "https://via.placeholder.com/300x200/3357FF/FFFFFF?text=Image+3"
//     ];
    
//     const [index, setIndex] = useState(0);

//     const handleNextImage = () => {
//         setIndex((prevIndex) => (prevIndex + 1) % images.length);
//     };

//     return (
//         <div className="flex flex-col items-center space-y-4 p-4">
//             <img src={images[index]} alt="carousel" className="w-64 h-40 rounded-lg shadow-lg" />
//             <button 
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg" 
//                 onClick={handleNextImage}
//             >
//                 Next Image
//             </button>
//         </div>
//     );
// }
import { useState } from "react";

export default function Carousel() {
  const images = [
   "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
  "https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_640.png",
   "https://png.pngtree.com/thumb_back/fh260/background/20240801/pngtree-new-cb-background-images-photos-pics-wallpaper-pictures-image_16123145.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="relative w-[600px] h-[300px]">
        <img id="saran"
          src={images[currentIndex]}
          alt="carousel"
          className="saran"
        />
      </div>
      <div className="mt-4 flex gap-4">
        <button
          onClick={prevSlide}
          className="bg-primery-700 text-dark px-4 py-2 rounded"
        >
          Prev
        </button>
        <button
          onClick={nextSlide}
          className="bg-primery-700 text-dark px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}
