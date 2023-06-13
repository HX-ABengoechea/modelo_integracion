import s from './styles/form.module.css';
import logo from './styles/logo.jpg';
import { useState } from 'react';
import validation from './validation';

const Form = (props) => {
   const { login } = props;
   const [userData, setUserData] = useState({ email: '', password: '' });
   const [errors, setErrors] = useState({});

   const handleChange = (e) => {
      setErrors(validation({ ...userData, [e.target.name]: e.target.value }));
      setUserData({ ...userData, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      login(userData);
   };

   return (
      <div className={s.div}>
         <form className={s.form}>
            <img className={s.logo} src={logo} alt='' />
            <div className={s.dataBox}>
               <label className={s.text}>EMAIL</label>
               <input
                  className={s.input}
                  placeholder='Email...'
                  value={userData.email}
                  onChange={handleChange}
                  name='email'
               />
               {errors.e1 ? (
                  <p className={s.error}>{errors.e1}</p>
               ) : errors.e2 ? (
                  <p className={s.error}>{errors.e2}</p>
               ) : (
                  <p className={s.error}>{errors.e3}</p>
               )}
            </div>
            <div className={s.dataBox}>
               <label className={s.text}>PASSWORD</label>
               <input
                  className={s.input}
                  type='password'
                  value={userData.password}
                  onChange={handleChange}
                  name='password'
               />
               {errors.p1 ? (
                  <p className={s.error}>{errors.p1}</p>
               ) : (
                  errors.p2 && <p className={s.error}>{errors.p2}</p>
               )}
            </div>
            <button onClick={handleSubmit} className={s.btn}>
               SUBMIT
            </button>
         </form>
      </div>
   );
};

export default Form;
