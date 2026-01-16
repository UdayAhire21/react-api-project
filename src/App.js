import react,{useEffect, useState} from "react";

function App(){
    const [users, setusers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          if(!res.ok) throw new Error("Failed to fetch users!");
          return res.json();
        })
        .then((data)=>{
          setusers(data);
          setLoading(false);
        })
        .catch((err)=>{
          setError(err.message);
          setLoading(false);
        });
    }, []);

    if(loading) return <h2>Loading...</h2>;
    if(error) return <h2>Error:{error}</h2>;

  return(
    <div>
        <h1>User List (API Project)</h1>;
        <ul>
         { users.map((users)=>(
            <li key = {users.id}>
              {users.name} - {users.email}
            </li>
         ))}
        </ul>
    </div>
  );
}
export default App;