import Card from './Card';
import s from './styles/cards.module.css';

export default function Cards(props) {
   const { characters, onClose } = props;

   return (
      <div className={s.div}>
         {characters.map((char) => {
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
                  onClose={onClose}
               />
            );
         })}
      </div>
   );
}
