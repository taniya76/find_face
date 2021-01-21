import React from 'react';
import './ILF.css';

const ImageLinkForm = ({onInputChange,onButtonSubmit}) => {
    return (
        <div className='f3 tc' >
            <p >
                {'Holla! Enter link and find the faces'}
            </p>
            <div className='center tc flex '>
                <div className='pa3 br2 shadow-5 w-75 pattern'>
                    <input className='f4 pa2 w-70 ' type='tex' onChange={onInputChange}></input>
                    <button className='w-20 grow f4 link ph3 pv2 dib white bg-light-purple pointer hover-black'
                    onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
        </div>
    )
}
export default ImageLinkForm;