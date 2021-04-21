import React, { Component } from 'react';

class App extends Component{

    constructor (props){
        super(props);
        this.state ={
            form:{
                nome:'',
                email:'',
                senha:'',
                sexo:''
            }
        } ;
        this.updateForm=this.updateForm.bind(this);

    }

    updateForm(e){
        let form=this.state.form;
        form[e.target.id] = e.target.value;
        this.setState({form:form});
    }

    render(){
        return(
            <div>
             <h1>Login</h1>
                 Nome:
                 <input type='text' id='nome' value={this.state.form.nome} placeholder='Insira seu nome'
                    onChange={this.updateForm}/><br/>
                Email:
                 <input type='email' id='email' value={this.state.form.email} placeholder='email@email.com.br'
                    onChange={this.updateForm}/><br/>
                Senha:
                 <input type='password' id='senha'value={this.state.form.senha} placeholder='**********'
                    onChange={this.updateForm}/><br/>
                Sexo:
                <select name='sexo' id='sexo' value={this.state.form.sexo} onChange={this.updateForm}>
                    <option value='masculino'>Masculino</option>
                    <option value='feminino'>Feminino</option>
                </select>

                <h3>{this.state.form.nome}</h3>
                <h3>{this.state.form.email}</h3>
                <h3>{this.state.form.senha}</h3>
                <h3>{this.state.form.sexo}</h3>


              

            </div>
        );
    }
    
}

export default App;