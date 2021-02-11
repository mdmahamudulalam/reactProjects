import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useHistory();
  const handleDelete = ()=>{
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(()=>{
      history.push('/');
    })
  }

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article className="body">
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div className='bodyText'>{ blog.body }</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;