import { IMAGES } from '../constants';

const loadImages = () => ({
  type: IMAGES.LOAD,
});

const setImages = images => ({
  type: IMAGES.LOAD_OK,
  images,
});

const setError = error => ({
  type: IMAGES.LOAD_FAILED,
  error,
});

export { loadImages, setImages, setError };
