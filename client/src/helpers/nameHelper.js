export const nameToId = (name) => name.toLowerCase().split(' ').join('-');
export const idToName = (id) => id.split('-').map(word => word[0].toUpperCase() + word.substr(1)).join(' ');
