import style from './Tags.module.css';

export default function Tags({ className, tags = [] }) {
    console.log('Tags:', tags);

    return (
        <ul className={`${style.tags} ${className}`}>
            {tags.map((tag) => (
                <li
                    className={`${style.item} ${style[tag.toLowerCase()]}`}
                    key={tag}
                >
                    {tag}
                </li>
            ))}
        </ul>
    );
}