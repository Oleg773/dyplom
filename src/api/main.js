import { neruhomostiData as a } from './data';
const neruhomostiData = [...a];

export function getNeruhomistByNameId(nameId) {
  return neruhomostiData.find((n) => n.nameId === nameId);
}

export function getSimilarNeruhomistByNameId(nameId) {
  const others = neruhomostiData.filter((n) => n.nameId !== nameId);

  return shuffleArray(others).slice(0, 4);
}

export function getNeruhomostiByStatus(status) {
  return neruhomostiData.filter((n) => n.status === status);
}

export function getNeruhomostiByType(type) {
  return neruhomostiData.filter((n) => n.type === type);
}

export function getNeruhomostiByLocation(location) {
  return neruhomostiData.filter((n) => n.location === location);
}

export function getNeruhomostiForMainPage() {
  return neruhomostiData;
}

export function getNeruhomostiBySearch(data) {
  let currentData = [...neruhomostiData];

  if (data['key-word'])
    currentData = currentData.filter((n) => n.name.includes(data['key-word']));
  if (data.place)
    currentData = currentData.filter((n) => n.address.includes(data.place));
  // if (data.distance) currentData = currentData.filter(n => n.. === data.distance)
  if (data.city)
    currentData = currentData.filter((n) => n.location === data.city);
  if (data.type) currentData = currentData.filter((n) => n.type === data.type);
  if (data.status)
    currentData = currentData.filter((n) => n.status === data.status);

  return currentData;
}

export function getNeruhomostiRecomended() {
  return neruhomostiData.slice(0, 4);
}

export function getCategories() {
  return [...new Set(neruhomostiData.map((n) => n.type))];
}

export function getLocations() {
  return [...new Set(neruhomostiData.map((n) => n.location))];
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
