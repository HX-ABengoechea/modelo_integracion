import axios from 'axios';

export const addFav = (character) => {
   try {
      const endpoint = 'http://localhost:3001/rickandmorty/fav';
      return async (dispatch) => {
         const { data } = await axios.post(endpoint, character);
         console.log('POST: ', data);
         return dispatch({
            type: 'ADD_FAV',
            payload: data,
         });
      };
   } catch (err) {
      console.log(err);
   }
};

export const removeFav = (id) => {
   try {
      const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
      return async (dispatch) => {
         const { data } = await axios.delete(endpoint);
         console.log('DELETE: ', data);
         return dispatch({
            type: 'REMOVE_FAV',
            payload: data,
         });
      };
   } catch (err) {
      console.log(err);
   }
};

export const filterCards = (gender) => {
   return {
      type: 'FILTER',
      payload: gender,
   };
};

export const orderCards = (order) => {
   return {
      type: 'ORDER',
      payload: order,
   };
};
