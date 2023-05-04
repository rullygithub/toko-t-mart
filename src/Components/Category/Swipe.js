// import React, { useState } from 'react'
// // import SwipeableViews from 'react-swipeable'

// const Swipe = ({kategori}) => {

//   const [currentKategoriIndex, setCurrentKategoriIndex] = useState(0);

//   const handleSwipe = (deltaX) => {
//     if (deltaX > 0 && currentKategoriIndex > 0) {
//       setCurrentKategoriIndex(currentKategoriIndex - 1);
//     } else if (deltaX < 0 && currentKategoriIndex < kategori.length - 1) {
//       setCurrentKategoriIndex(currentKategoriIndex + 1);
//     }
//   };

//   const currentKategori = kategori[currentKategoriIndex];

//   return (
//     <SwipeableViews onSwipedLeft={() => handleSwipe(-1)} onSwipedRight={() => handleSwipe(1)}>
//       <div>
//         <img src={currentKategori.image} alt={currentKategori.name} />
//         <h3>{currentKategori.name}</h3>
//         <p>{currentKategori.description}</p>
//       </div>
//     </SwipeableViews>
//   )
// }

// export default Swipe