interface Person {
    completedName: string;
    age: number;
    address: Address;
}

interface Address {
    country: string;
    homeNo: number;
}

export const LiteralsObjects = () => {
    const person:Person = {
        completedName: 'Pablo',
        age: 35,
        address: {
            country: 'Chile',
            homeNo: 3531
        }
    }
    return (
        <>
          <h3>Literals Objects</h3> 
          <code>
            { JSON.stringify(person, null, 2) }
          </code> 
        </>
    )
}
