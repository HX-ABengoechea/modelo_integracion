import SearchBar from './SearchBar';
import s from './styles/nav.module.css';
import { Link } from 'react-router-dom';

export default function Nav(props) {
   const { onSearch } = props;

   return (
      <div className={s.div}>
         <Link to='/home'>
            <button className={s.btn}>Home</button>
         </Link>
         <Link to='/about'>
            <button className={s.btn}>About</button>
         </Link>
         <Link to='/favorites'>
            <button className={s.btn}>Favorites</button>
         </Link>
         <SearchBar onSearch={onSearch} />
      </div>
   );
}
