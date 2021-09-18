import { useEffect, useReducer } from "react"

export const Login = () => {

    interface AuthState {
        validating: boolean;
        token: string | null;
        username: string;
        name: string;
    }

    const initialState:AuthState = {
        validating: true,
        token: null,
        username: '',
        name: ''
    }

    type LoginPayload = {
        name: string;
        username: string;
    };

    type AuthAction = 
        | { type: 'logout' }
        | { type: 'login', payload: LoginPayload };

    const authReducer = (state: AuthState, action: AuthAction):AuthState => {
        switch (action.type) {
            case 'logout':
                return {
                    validating: false,
                    token: null,
                    name: '',
                    username: ''
                };
            case 'login':
                const { username, name } = action.payload;  
                return {
                    validating: false,
                    token: 'dfdfrr45gh323',
                    name,
                    username,
                };
            default:
                return state;
        }
    }

    const [{ validating, token, name }, dispatch] = useReducer(authReducer, initialState)

    useEffect(() => {
        setTimeout(()=> {
            dispatch({ type: 'logout' })
        }, 1500);
    }, []);

    const login = () => {
        dispatch(
            { 
                type: 'login', 
                payload: { 
                    name: 'Pablo Rodríguez',
                    username: 'prodrigu'
                }
            }
        );
    }

    const logout = () => {
        dispatch(
            {
                type: 'logout'
            }
        );
    }

    if (validating) {
        return (
            <>
                <h3>Login</h3>
                <div className="alert alert-info">
                    Validating...
                </div>
            </>
        );
    }

    return (!token) ?
        (<>
            <h3>Login</h3>
            <div className="alert alert-danger">Unauthenticated</div>
            <button className="btn btn-primary w-100" onClick={ login }>Login</button>
        </>)
    :
        (<>
            <h3>Login</h3>
            <div className="alert alert-success">Welcome { name }, you have been successfully authenticated</div>
            <button className="btn btn-danger w-100" onClick={ logout }>Logout</button>
        </>);
}