import { IMAGES } from '../constants';

const imagesReducer = (state = [], action) => {
  if (action.type === IMAGES.LOAD_OK) {
    // const newImages = action.images.filter(img => {
    //   let found = false;
    //   for (let index = 0; index < state.length; index++) {
    //     const img2 = state[index];
    //     if (img2.id === img.id) {
    //       found = true;
    //       break;
    //     }
    //   }
    //   if (!found) return img;
    //   return null;
    // });
    return [...state, ...action.images];
  }
  return state;
};

export default imagesReducer;
