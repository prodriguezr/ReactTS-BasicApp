import { useCounter } from '../hooks/useCounter';

export const CounterWithHook = () => {
    const { value, accumulate } = useCounter(20);

    return (
        <>
           <h3>
               Counter With Hook: <small>{ value }</small>
           </h3> 
           <button className="btn btn-primary" onClick={ () => accumulate(1) }>
            +1
           </button>
           &nbsp;
           <button className="btn btn-primary" onClick={ () => accumulate(-1) }>
            -1
           </button>
        </>
    )
}
