const initialState = { myFavorites: [], allCharacters: [] };

const rootReducer = (state = initialState, { type, payload }) => {
   switch (type) {
      case 'ADD_FAV':
         return { ...state, myFavorites: payload, allCharacters: payload };

      case 'REMOVE_FAV':
         return { ...state, myFavorites: payload };

      case 'FILTER':
         let copy3 = state.allCharacters.filter((char) => {
            return char.gender === payload;
         });
         return { ...state, myFavorites: copy3 };

      case 'ORDER':
         let orderedChars;
         if (payload === 'A') {
            orderedChars = state.allCharacters.sort((a, b) => {
               return a.id > b.id ? -1 : a.id < b.id ? 1 : 0;
            });
         } else {
            orderedChars = state.allCharacters.sort((a, b) => {
               return a.id > b.id ? 1 : a.id < b.id ? -1 : 0;
            });
         }
         return { ...state, myFavorites: orderedChars };

      default:
         return state;
   }
};

export default rootReducer;
