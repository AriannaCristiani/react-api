import style from './Card.module.css';
import placeHolderSrc from '../../assets/placeholder.png';
import Tags from '../Tags/Tags';

export default function Card({ post, onDelete }) {
    const { id, title, image, content, tags, published, category } = post;

    console.log('Tags:', tags);

    return (
        <div className={style.card}>
            <figure className={style.figure}>
                <img className={style.image} src={image || placeHolderSrc} alt="" />
            </figure>
            <div className={style.body}>
                <h3>{title}</h3>
                <p>{content}</p>
                <p className={style.category}><strong>Categoria:</strong>{category}</p>
                <Tags tags={tags} />
                <br />
                <div className={style.btn_inline}>
                    <button className="btn">LEGGI DI PIU'</button>
                    <button
                        onClick={() => onDelete(id)}
                        className={style.deleteBtn}>
                        X
                    </button>
                </div>
            </div>
        </div>
    );
}