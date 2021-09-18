import { useUsers } from '../hooks/useUsers';
import { User } from '../interfaces/reqRes';

export const Users = () => {
    const { users, page, nextPage, previousPage } = useUsers();

    const renderItem = ({id, first_name, last_name, email, avatar }:User) => {
        return (
            <tr key={ id.toString() }>
                <td>
                    <img src={ avatar } alt={first_name} style={{ width: 50, borderRadius: 100 }} />
                </td>
                <td>{ first_name + ' ' + last_name }</td>
                <td>{ email }</td>
            </tr>
        );
    }

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
                   {
                       users.map(renderItem)
                   }
               </tbody>
            </table>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                <button className="btn btn-primary me-md-2" type="button" onClick={ previousPage }>Previous</button>
                <span className="ml-2 mr-2">{ page }</span>
                <button className="btn btn-primary" type="button" onClick={ nextPage }>Next</button>
            </div>
        </>
    )
}
