import { React, useState } from 'react'
import data from './listiteam.json'
function ListData(props) {

    const filteredData = data.filter((el) => {
        if (props.input === '') {
            return el;
        }
        else {
            return el.text.toLowerCase().includes(props.input)
        }
    })
    return (
        <div className='container'>
            <div className='row'>
                {filteredData.map((item) => (
                    <div className='col-md-4'>
                        <div className='card p-5 mt-3 mx-2'>
                            <h3>{item.text}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListData