import { useState } from 'react';
import { useHistory } from 'react-router-dom';


const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Jaber');
    const blog = {title, body, author };
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault();
        setIsPending(true);
        fetch ('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        })
        .then(()=>{
            console.log('New blog added')
            setIsPending(false);
            history.push('/');
        })

        
    
    };
    return ( 

        <div className='create'>
            <h1>Add a new blog</h1>
            <form onSubmit={handleSubmit}>
                <label>Title: </label>
                <input
                type="text"
                required
                value = {title}
                onChange ={(e)=>setTitle(e.target.value)}
                />
                <label> Body: </label>
                    <textarea
                    required 
                    value ={body}
                    onChange = {(e)=> setBody(e.target.value)}
                    >
                    </textarea>
                <label>Author: </label>
                <select
                value ={author}
                onChange={(e)=> setAuthor(e.target.value)}>
                    <option value="Jaber">Jaber</option>
                    <option value="Asad">Asad</option>
                    <option value="Saber">Saber</option>
                    <option value="Kabir">Kabir</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button>Loading....</button>}
                

            </form>
        </div>


     );
}
 
export default Create;