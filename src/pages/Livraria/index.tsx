import styles from './livraria.module.scss';
import logo from '../../assets/logo.png';
import Buscador from './Buscador';
import { useState } from 'react';
import Filtros from './Filtros';

export default function Livraria() {
    const [busca, setBusca] = useState("");
    return (
    <main>
        <nav className={styles.menu}>
            <img className={styles.img} src= {logo} alt="logo" />
        </nav>
        <header className={styles.header}>
            <div className={styles.header__text}>
                A livraria mais top!!!
            </div>
        </header>

        <section className={styles.livraria}>
            <h3 className={styles.livraria__titulo}>Livros</h3>
            <Buscador busca={busca} setBusca={setBusca}/>
            <div className={styles.livraria__filtros}>
            <Filtros/>
            </div>
        </section>
        
   </main>
    );
}