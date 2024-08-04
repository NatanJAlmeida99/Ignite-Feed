import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover} 
            src="https://media.istockphoto.com/id/1979289147/pt/foto/data-analysis-science-and-big-data-with-ai-technology-analyst-or-scientist-uses-a-computer-and.jpg?s=1024x1024&w=is&k=20&c=D-ge0m2zVKXUcM22BvtwoR39czXKIQXyBpr9sT_xQuE=" />
            <div className={styles.profile}>

                <Avatar hasBorder={true} src="https://avatars.githubusercontent.com/u/176314343?v=4"/>
                <strong>Natan Almeida</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}