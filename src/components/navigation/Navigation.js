import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {

        if(isSignedIn){
            return(
                <nav style={{display:'flex', justifyContent: 'flex-end'}}>
                    <p className='f3 link dim black underline pa3 pointer' onClick={() => onRouteChange('signout')} >Logi välja</p>
                </nav> 
            );

           
        }else{
            return(
                <nav style={{display:'flex', justifyContent: 'flex-end'}}>
                    <p className='f3 link dim black underline pa3 pointer' onClick={() => onRouteChange('signin')} >Logi sisse</p>
                    <p className='f3 link dim black underline pa3 pointer' onClick={() => onRouteChange('register')} >Registeeru</p>
                </nav>
            );
            
        }
}
export default Navigation;