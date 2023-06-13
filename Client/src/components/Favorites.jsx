import { connect } from 'react-redux';
import Card from './Card';
import s from './styles/favorites.module.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { orderCards, filterCards } from '../redux/actions';

const Favorites = (props) => {
   const [aux, setAux] = useState(false);
   const dispatch = useDispatch();
   const { myFavorites } = props;

   const handleOrder = (e) => {
      dispatch(orderCards(e.target.value));
      setAux(!aux);
   };

   const handleFilter = (e) => {
      dispatch(filterCards(e.target.value));
   };

   return (
      <div className={s.div}>
         <div className={s.box}>
            <select className={s.select} onChange={handleOrder}>
               <option value='A'>Ascendente</option>
               <option value='D'>Descendente</option>
            </select>
            <select className={s.select} onChange={handleFilter}>
               <option value='Male'>Male</option>
               <option value='Female'>Female</option>
               <option value='Genderless'>Genderless</option>
               <option value='unknown'>unknown</option>
            </select>
         </div>
         <div className={s.cards}>
            {myFavorites.length &&
               myFavorites.map((char) => {
                  return (
                     <Card
                        id={char.id}
                        key={char.id}
                        name={char.name}
                        status={char.status}
                        species={char.species}
                        gender={char.gender}
                        origin={char.origin.name}
                        image={char.image}
                     />
                  );
               })}
         </div>
      </div>
   );
};

const mapStateToProps = (state) => {
   return { myFavorites: state.myFavorites };
};

export default connect(mapStateToProps, null)(Favorites);
