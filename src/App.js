import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Markdown from "react-markdown";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      response: "",
      submittedQuestion: "",
    };
  }

  handleQuestionChange = (e) => {
    this.setState({ question: e.target.value });
  };

  handleFormSubmit = async (e) => {
    e.preventDefault();
    const question = this.state.question;
    this.setState({ submittedQuestion: question });
    console.log(question);

    try {
      const res = await axios.post("http://localhost:5000/", {
        query: question,
      });
      console.log("ok");
      console.log(res.data.response);
      this.setState({
        response: res.data.response,
      });
    } catch (error) {
      console.error("Error posting data:", error);
    }
    this.setState({ question: "" });
  };

  render() {
    return (
      <div className="app-container">
        <h1 className="title">
          ChatBot de Génération des Histoires des Jeux Vidéo :
        </h1>
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
              <button className="send-button" type="submit">
                Envoyer
              </button>
            </div>
          </form>
          {this.state.submittedQuestion && (
            <div className="question-container">
              {this.state.submittedQuestion}
            </div>
          )}
          {this.state.response && (
            <Markdown className="response-container">
              {this.state.response}
            </Markdown>
            // <div className="response-container">{this.state.response}</div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
