import React from 'react';

const BemVindo = (props) => {
  return(
    <div>
        <h2>Bem-vindx: {props.nome}!</h2>
        <h3>Tenho {props.idade} anos.</h3>
    </div>
  );  
}
function App (){
    return (
        <div>
            <h1>Olá Mundo!</h1>
            <BemVindo nome="Welles" idade="23"/>
            <BemVindo nome="Amanda" idade="15"/>
        </div>
        
    );
    
}

export default App;