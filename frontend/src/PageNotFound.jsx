import styles from './PageNotFound.module.css';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <img
                src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
                alt="404 Not Found"
                className={styles.image}
            />
            <h1 className={styles.title}>404 - Page Not Found</h1>
            <p className={styles.message}>The page you're looking for doesn't exist.</p>
            <button className={styles.button} onClick={() => navigate('/')}>
                Go to Homepage
            </button>
        </div>
    );
}

export default PageNotFound;
