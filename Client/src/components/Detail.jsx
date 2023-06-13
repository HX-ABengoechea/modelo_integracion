import s from './styles/detail.module.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Detail = () => {
   const { id } = useParams();
   const [character, setCharacter] = useState({});
   const { name, origin, gender, status, species, image } = character;

   useEffect(() => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
         ({ data }) => {
            if (data.name) {
               setCharacter(data);
            } else {
               window.alert('No hay personajes con ese ID');
            }
         }
      );
      return setCharacter({});
   }, [id]);

   return (
      <div className={s.div}>
         <div className={s.data}>
            <h1 className={s.name}>{name && name}</h1>
            <div>
               <h3 className={s.text}>STATUS | {status && status}</h3>
               <h3 className={s.text}>GENDER | {gender && gender}</h3>
               <h3 className={s.text}>SPECIE | {species && species}</h3>
               <h3 className={s.text}>
                  ORIGIN | {origin?.name && origin?.name}
               </h3>
            </div>
         </div>
         <div className={s.imgBox}>
            {image && <img className={s.img} src={image} alt='' />}
         </div>
      </div>
   );
};

export default Detail;
