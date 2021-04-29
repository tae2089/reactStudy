import {React,useMemo} from 'react'

function Table({columns, data}){

    const menuList = columns.map((column) => (<td>{column.accessor}</td>));
    
    const createData =    (data) =>{

return data.map((person) => (<tr>
                                                        <td>{person.name}</td>
                                                        <td>{person.email}</td>
                                                        <td>{person.age}</td>
                                                </tr>))
    }
    const dataList = useMemo(() => createData(data),[data])
    
    return(
        <div>
        <table>
            <thead>
                <tr>
                    {menuList}
                </tr>
            </thead>
            <tbody>
                {dataList}
            </tbody>
        </table>
        </div>
    )
}


export default Table;
