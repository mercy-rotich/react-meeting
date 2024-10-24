import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
const Alumni = () => {
    const {id}= useParams()
    const navigate =useNavigate();

 const navigateToAlumni =(id)=>{
    
    navigate(`/alumni/${id}`)

}

  const [users, setUsers] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );

      setUsers(response.data);
    } catch (error) {
      console.log(`Internal server error => ${error.message}`);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="">
        <Navbar />
        <p className="text-3xl">ALUMNI</p>

        
      <table className="w-full border-collapse shadow-md">
        <thead className="bg-neutral-500">
          <tr>
            <td className="p-2">Id</td>
            <td className="p-2">Name</td>
            <td className="p-2">Username</td>
            <td className="p-2">Email</td>
            <td className="p-2">Phone</td>
            <td className="p-2 " >View</td>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <tr key={user.id} className="border-b border-neutral-500">
              <td className="p-2">{user.id}</td>
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.username}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.phone}</td>
              <td>
                <button className="bg-gradient-to-tr from bg-orange-500 to orange-800 text-white px-[2rem] py-[0.5rem" onClick={()=> navigateToAlumni(user.id)}>view</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Alumni;