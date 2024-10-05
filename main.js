
import { getCollection } from './src/getCollection.js'

const teacherCard = ({ name, surname, languages, lesson_info, avatar_url, conditions, levels, lessons_done, rating, price_per_hour, experience, }) => {
  return `
  <div>
   <img src=${avatar_url} width="120"> 
  <p>Languages</p>
    <ul>
      <li>Lessons online</li>
      <li>Lessons done: ${lessons_done}</li>
      <li>Rating: ${rating}</li>
      <li>Price / 1 hour: ${price_per_hour}$</li>
    </ul>
    <h2>${name} ${surname}</h2>
    <p>Speaks: ${languages.join(', ')}</p>
    <p>Lesson Info: ${lesson_info}</p>
    <p>Conditions: ${conditions.join(' ')}</p>
    <button>Read more</button>
    <ul>
      ${levels.map(level => `<li>${level}</li>`).join('')}
    </ul >
  </div > `
};

const data = await getCollection();

const list = data.map(teacherCard).join('');

const container = document.querySelector('.js-container');

container.insertAdjacentHTML('afterbegin', list);



