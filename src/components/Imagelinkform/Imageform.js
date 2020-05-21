import React from 'react';
import './imageform.css';

const Imageform = ({ OnInputChange, onButtonSubmit }) => {
    return(
        <div>
            <p className='f3 '>
                {'See maagiline leht tuvastab nägusi, proovi järgi'}
                

            </p>
            <div className='center'>
            <div className='form center pa4 br3 shadow-5'>
                <input type="text" name="" id="" className='f4 pa2 w-70 center' onChange={OnInputChange} /><br/>
                <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onButtonSubmit} >Tuvasta</button>
            </div>
            </div>
            {'Enter picture url to use face recognition'}
        </div>
    );
}
export default Imageform;