import styles from './Livraria.module.scss';
import logo from '../../assets/logo.png';
import Buscador from './Buscador';
import { useState } from 'react';
import Filtros from './Filtros';

export default function Livraria() {
    const [busca, setBusca] = useState("");
    const [filtro, setFiltro] = useState<number | null> (null);
    return (
    <main>
        <nav className={styles.menu}>
            <img className={styles.img} src= {logo} alt="logo" />
        </nav>
        <header className={styles.header}>
            <div className={styles.header__text}>
             
            </div>
        </header>

        <section className={styles.livraria}>
            <h3 className={styles.livraria__titulo}>Livros</h3>
            <Buscador busca={busca} setBusca={setBusca}/>
            <div className={styles.livraria__filtros}>
            <Filtros filtro={filtro} setFiltro={setFiltro}/>
            </div>
        </section>
        
   </main>
    );
}