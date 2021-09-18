import { useEffect } from 'react'
import { reqResApi } from '../api/reqRes';
import { ReqResList } from '../interfaces/reqRes';

export const Users = () => {
    //const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        reqResApi.get<ReqResList>('/users')
            .then(resp => {
                console.log(resp.data.data);
            })
            .catch(console.error);
    }, []);

    return (
        <>
           <h3>Users</h3> 
           <table className="table">
               <thead>
                   <tr>
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>Email</th>
                   </tr>
               </thead>
               <tbody>
               </tbody>
           </table>
        </>
    )
}