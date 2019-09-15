import { leaderboards } from '../helpers/firebase';
const maxRetries = 10;

const animalNames = [
  'Monkey',
  'Bear',
  'Panda',
  'Zebra',
  'Turtle',
  'Frog',
  'Fish',
  'Dog',
  'Cat',
  'Spider',
  'Donkey',
  'Shrek'
];

const colors = [
  'Green',
  'Red',
  'Blue',
  'Yellow',
  'Orange',
  'Black',
  'White',
  'Cyan',
  'Grey',
  'Brown',
  'Purple',
  'Pink',
  'Rainbow'
];

export const getRandomName = async () => {
    let retries = 0;
    const snapshot = await leaderboards.once('value');
    const value = snapshot.val();
    let leaderboardName = 'Guest';
    while(retries < maxRetries){
        let unique = true;
        const randomName = `${colors[Math.floor(Math.random() * colors.length)]} ${animalNames[Math.floor(Math.random() * animalNames.length)]}`;
        Object.keys(value).forEach(key => {
            if(value[key].name === randomName){
                unique = false;
            }
        });
        if(unique){
            leaderboardName = randomName;
            break;
        }else{
            ++retries;
        }
    }
    return leaderboardName;
};
