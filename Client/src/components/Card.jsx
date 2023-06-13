import s from './styles/card.module.css';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

function Card(props) {
   const [isFav, setIsFav] = useState(false);
   const {
      id,
      name,
      gender,
      species,
      image,
      onClose,
      addFav,
      removeFav,
      myFavorites,
   } = props;

   useEffect(() => {
      myFavorites.forEach((fav) => {
         console.log('SOY CARD: ', fav.id + '    ' + props.id);
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite = () => {
      isFav ? removeFav(id) : addFav(props);
      setIsFav(!isFav);
   };

   return (
      <div className={s.div}>
         {isFav ? (
            <button className={s.fav} onClick={handleFavorite}>
               ❤️
            </button>
         ) : (
            <button className={s.fav} onClick={handleFavorite}>
               🤍
            </button>
         )}
         <button
            className={s.btn}
            onClick={() => {
               onClose(id);
            }}
         >
            X
         </button>
         <img src={image} alt='' className={s.image} />

         <Link to={`/detail/${id}`}>
            <h4 className={s.name}>{name}</h4>
         </Link>

         <div className={s.data}>
            <h4 className={s.text}>{species}</h4>
            <h4 className={s.text}>{gender}</h4>
         </div>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {
         dispatch(addFav(character));
      },
      removeFav: (id) => {
         dispatch(removeFav(id));
      },
   };
};

const mapStateToProps = (state) => {
   return { myFavorites: state.myFavorites };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
