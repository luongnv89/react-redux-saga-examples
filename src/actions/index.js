import {
  IMAGES,
  STATS
} from '../constants';

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

const loadImageStats = (id) => ({
  type: STATS.LOAD,
});

const setImageStats = (id, downloads) => ({
  type: STATS.LOAD_OK,
  id,
  downloads,
});

const setImageStatsError = (id) => ({
  type: STATS.LOAD_FAILED,
  id,
});

export {
  loadImages,
  setImages,
  setError,
  loadImageStats,
  setImageStats,
  setImageStatsError
};
