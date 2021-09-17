export const BasicsTypes = () => {
    const name:string | number = 'Pablo';
    const age:number = 46;
    const isActive:boolean = true;

    const powers: string[] = ['speed', 'fly', 'breathe underwater'];
  
    return (
        <>
            <h3>Basics Types</h3>
            { name }, { age }, { (isActive) ? 'active' : 'inactive' }
            <br />
            { powers.join(', ') }
        </>
    )
}
