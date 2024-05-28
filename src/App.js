import React, { Component } from 'react';
import './App.css'; // Assurez-vous d'avoir un fichier CSS pour styliser votre chatbot

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      response: ''
    };
  }

  handleQuestionChange = (e) => {
    this.setState({ question: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.setState({ response: 'Ceci est une réponse générée pour la question: ' + this.state.question });
    this.setState({ question: '' });
  };

  render() {
    return (
      <div className="app-container">
        <h1 className="title">ChatBot de Génération des Histoires des Jeux Vidéo:</h1>
        <div className="chat-container">
          <form onSubmit={this.handleFormSubmit}>
            <div className="input-container">
              <textarea
                className="input-textarea"
                value={this.state.question}
                onChange={this.handleQuestionChange}
                placeholder="Écrivez votre question ici..."
                rows="3"
              />
              <button className="send-button" type="submit">Envoyer</button>
            </div>
          </form>
          {this.state.response && <div className="response-container">{this.state.response}</div>}
        </div>
      </div>
    );
  }
}

export default App;



// import React, { useState } from 'react';
// //import './App.css';

// function App() {

  
//    const [question, setQuestion] = useState('');
//   const [response, setResponse] = useState('');

//   const handleQuestionChange = (e) => {
//     setQuestion(e.target.value);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     setResponse('Ceci est une réponse générée pour la question: ' + question);
//     setQuestion('');
//   };

//   return (
//     <div className="app-container">
//       <h1>Génération des Histoires des Jeux Vidéo</h1>
//       <div className="chat-container">
//         <form onSubmit={handleFormSubmit}>
//           <div className="input-container">
//             <textarea
//               value={question}
//               onChange={handleQuestionChange}
//               placeholder="Écrivez votre question ici..."
//               rows="3"
//             /> 
//             <button type="submit">Envoyer</button>
//           </div>
//         </form>
//         {response && <div className="response-container">{response}</div>}
//       </div>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import styled from 'styled-components';

// const AppContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;
//   background-color: #f5f5f5;
//   height: 100vh;
// `;

// const Title = styled.h1`
//   font-size: 2rem;
//   color: #333;
//   margin-bottom: 20px;
// `;

// const ChatContainer = styled.div`
//   width: 60%;
//   background: white;
//   border-radius: 10px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   padding: 20px;
// `;

// const InputContainer = styled.div`
//   display: flex;
//   margin-top: 20px;
// `;

// const TextInput = styled.textarea`
//   flex: 1;
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   font-size: 1rem;
// `;

// const SubmitButton = styled.button`
//   padding: 10px 20px;
//   margin-left: 10px;
//   background-color: #007bff;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const ResponseContainer = styled.div`
//   margin-top: 20px;
//   padding: 10px;
//   background: #e9ecef;
//   border-radius: 5px;
// `;

// function App() {
//   const [question, setQuestion] = useState('');
//   const [response, setResponse] = useState('');

//   const handleQuestionChange = (e) => {
//     setQuestion(e.target.value);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     // Vous pouvez remplacer ceci par une requête réelle à un backend ou une API de chatbot
//     setResponse('Ceci est une réponse générée pour la question: ' + question);
//     setQuestion('');
//   };

//   return (
//     <AppContainer>
//       <Title>Génération des Histoires des Jeux Vidéo</Title>
//       <ChatContainer>
//         <form onSubmit={handleFormSubmit}>
//           <InputContainer>
//             <TextInput
//               value={question}
//               onChange={handleQuestionChange}
//               placeholder="Écrivez votre question ici..."
//               rows="3"
//             />
//             <SubmitButton type="submit">Envoyer</SubmitButton>
//           </InputContainer>
//         </form>
//         {response && <ResponseContainer>{response}</ResponseContainer>}
//       </ChatContainer>
//     </AppContainer>
//   );
// }

// export default App;




// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
