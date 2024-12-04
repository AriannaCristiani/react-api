import Card from "../Card/Card";
import Tags from '../Tags/Tags.jsx';
//import initialPosts from '../../posts.jsx';
import { useEffect, useState } from "react";
import axios from 'axios'

const initialFormData = {
    title: '',
    image: '',
    content: '',
    category: '',
    tags: '',
    published: true
};

const API_BASE_URI = 'http://localhost:3000/'

export default function Main() {

    const [formData, setFormData] = useState([]);
    const [posts, setPosts] = useState(initialPosts);
    const [publishedPosts, setPublishedPosts] = useState([]);
    const [tags, setTags] = useState([]);


    useEffect(() => {
        setPublishedPosts(posts.filter((post) => post.published))

        const tagsItems = []
        posts.forEach(post => {
            const postTags = post.tags
            console.log(postTags)

            postTags.forEach((tag) => {
                if (!tagsItems.includes(tag)) {
                    tagsItems.push(tag)
                }
            })
        })
        setTags(tagsItems)

    }, [posts])



    function addPost(event) {
        event.preventDefault()

        const post = {
            id: Date.now(),
            ...formData,
            tags: formData.tags.split(',').map(tag => tag.trim())
        }
        setPosts([...posts, post])
        setFormData(initialFormData)

    }

    function deletePost(id) {
        setPublishedPosts(publishedPosts.filter(post => post.id !== id))

    }

    function fetchPosts() {
        axios.get(`${API_BASE_URI}posts`)
            .then(res => {
                console.log('posts response:', res)
            })
            .catch(err => {
                console.error(err)
            })
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    function handleFormData(event) {
        const { name, value, type, checked } = event.target

        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        })
    }


    return (
        <main>
            <section>
                <div className="container_sm">
                    <form onSubmit={addPost} className="form">
                        <h1 className="form_title">Aggiungi un nuovo Post</h1>
                        <input
                            className="formText"
                            name="title"
                            type="text"
                            placeholder="Inserisci il titolo del Post"
                            value={formData.title}
                            onChange={handleFormData}
                        />
                        <input
                            className="formText"
                            name="image"
                            type="text"
                            placeholder="Inserisci l'URL dell'immagine"
                            value={formData.image}
                            onChange={handleFormData}
                        />
                        <input
                            className="formText"
                            name="content"
                            type="text"
                            placeholder="Inserisci il contenuto del post"
                            value={formData.content}
                            onChange={handleFormData}
                        />
                        <select
                            className="formSelect"
                            name="category"
                            value={formData.category}
                            onChange={handleFormData}
                        >
                            <option value="">Seleziona una categoria</option>
                            <option value="Dolci">Dolci</option>
                            <option value="Snacks">Snacks</option>
                            <option value="Primi">Primi</option>
                        </select>
                        <input
                            className="formText"
                            name="tags"
                            type="text"
                            placeholder="Inserisci i tags separati da virgola"
                            value={formData.tags}
                            onChange={handleFormData}
                        />
                        <input
                            onChange={handleFormData}
                            type="checkbox"
                            checked={formData.published}
                            id='published'
                            name='published' />
                        <input
                            className="formBtn"
                            type="submit"
                            value={'INVIA'} />
                    </form>
                </div>
                <div className="container">
                    <Tags className='page_tags' tags={tags} />
                </div>
                <div className="container">
                    <div className="row">
                        {publishedPosts.map((post) => (
                            <div key={post.id} className="col">
                                <Card post={post} onDelete={deletePost} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}