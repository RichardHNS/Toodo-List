import React from "react";
import { useState } from "react";
import { Container, TodoList, Input, Button, Item, List, H1 } from "./styles";

function App() {
  //Estados
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState();

  //Funções
  function inputChange(event) {
    setInputValue(event.target.value);
    console.log(event)
  }

  function buttonClick() {
    setTasks([...tasks, inputValue]);
  }

  return (
    <Container className="backDiv">
      
      <TodoList>
      <H1>Minha Lista de Tarefas</H1>
        <Input
          placeholder="Digite Sua Tarefa"
          type="text"
          onChange={inputChange}
        />
        <Button onClick={buttonClick}>Adicionar Tarefa</Button>

        <List>
          {tasks.map((item, index) => (
            <Item key={index}> {item}</Item>
          ))}
        </List>
      </TodoList>
    </Container>
  );
}

export default App;
