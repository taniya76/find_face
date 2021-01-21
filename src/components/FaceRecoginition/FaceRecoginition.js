import React from 'react';
import './FaceRecoginition.css';
const FaceRecoginition = ({ box,imageUrl }) => {
    return (
        <div className='center ma'>
            <div className='absolute mt4'>
                <img id='inputImage' src={imageUrl} alt='' width='500px' height='auto'></img>
                <div className='boundingBox' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left:box.leftCol}}></div>
            </div>
        </div>
    )
}
export default FaceRecoginition;