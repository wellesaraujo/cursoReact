import React from 'react';

const Equipe = (props) => {
    return (
        <div>
            <Sobre
                nome={props.nome}
                cargo={props.cargo}
                idade={props.idade} />
            <Social fb={props.fb}/>
            <hr/>
        </div>
    );
}

const Sobre = (props) => {
    return (
        <div>
            <h2>Olá, eu sou {props.nome}</h2>
            <h2>Idade: {props.idade} anos</h2>
            <h2>Cargo: {props.cargo}</h2>
        </div>
    );
}

const Social = (props) => {
    return(
        <div>
            <a href={props.fb}>Facebook </a>
            <a>Instagram </a>
            <a>GitHub </a>
        </div>
    )
}
function App() {
    return (
        <div>
            <h1>Conheça nossa equipe:</h1>
            <hr/>
            <Equipe
                nome="Wellington"
                cargo="Dev"
                idade="26"
                fb="https://www.facebook.com/WellesAraujo/"
            />
            <Equipe
                nome="Kawany"
                cargo="Design"
                idade="23"
            />
        </div>

    );

}

export default App;