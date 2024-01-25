// import request from 'umi-request';

// const API_KEY = ' 3702bc79d55f4f1099be2ceacd8db842';
// const API_BASE_URL = `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`;

// export const fetchUserData = async (userId: string) => {
//   try {
//     const response = await request(API_BASE_URL);
//     return response; // Modify this based on the actual structure of the Spoonacular API response
//   } catch (error) {
//     console.error('Error fetching data from Spoonacular API', error);
//     throw error; // Rethrow the error to be caught by the calling code
//   }
// };
// src/services/api.ts

import request from 'umi-request';
const API_KEY = '3702bc79d55f4f1099be2ceacd8db842'
const API_BASE_URL = 'https://api.spoonacular.com/recipes/random?number=10';

export const fetchUserData = async (userId: string) => {
  try {
    const response = await request(`${API_BASE_URL}?apiKey=${API_KEY}&query=${userId}`);
   return response;
  } catch (error) {
    console.error('Error fetching data from Spoonacular API', error);
    throw error;  
  }
};
