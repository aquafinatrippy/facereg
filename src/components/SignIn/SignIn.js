import React from 'react';

const SignIn = ({onRouteChange}) => {
    return(
        <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0 center">Face recognition app</legend>
            <p>Detects faces on picture, all done using React.js. Purpose was to learn React.</p>
            
          </fieldset>
          <div className="">
            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Start using" onClick={() => onRouteChange('home')} />
          </div>
        </div>
      </main> 
      </article> 
    );
}
export default SignIn;