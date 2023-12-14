import React, { useState, useEffect } from "react";

import { api } from "../../services/api";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, InputsContainer, Wrapper, Tabs, ToDoList } from "./styles";
import { Task } from "../../components/Task";
import { toast } from "react-toastify";

export function Home() {
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [isCompletedScreen, setIsCompletedScreen] = useState(false);

  const [uncompletedTasks, setUncompletedTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  async function getTasks() {
    const response = await api.get();

    let uncompleted = [];
    let completed = [];

    response?.data?.map((value) =>
      value.completed === false
        ? uncompleted.push(value)
        : completed.push(value)
    );

    setUncompletedTasks(uncompleted);
    setCompletedTasks(completed);
  }

  async function handleCreateTask() {
    const currentDate = new Date();

    const data = {
      name: newTodoTitle,
      description: newDescription,
      createdAt: currentDate.toISOString(),
      updatedAt: currentDate.toISOString(),
      completed: false,
    };

    try {
      const response = await api.post("", data);
      if (response.status === 201) {
        window.location.reload();
      }
    } catch (error) {
      toast.error("Erro ao criar Tarefa");
    }
  }

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <Container>
      <h1>Lista de tarefas</h1>

      <Wrapper>
        <InputsContainer>
          <Input
            name="Título"
            type="text"
            value={newTodoTitle}
            onChange={(e) => setNewTodoTitle(e.target.value)}
          />

          <Input
            name="Descrição"
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />

          <Button
            name="Criar"
            disabled={!newTodoTitle || !newDescription}
            onClick={() => handleCreateTask()}
          />
        </InputsContainer>

        <hr />

        <Tabs>
          <Button
            name="Tarefas"
            active={!isCompletedScreen}
            onClick={() => setIsCompletedScreen(false)}
          />
          <Button
            name="Concluídas"
            active={isCompletedScreen}
            onClick={() => setIsCompletedScreen(true)}
          />
        </Tabs>

        <ToDoList>
          {!isCompletedScreen &&
            uncompletedTasks?.map((item, index) => (
              <Task key={index} data={item} />
            ))}

          {isCompletedScreen &&
            completedTasks?.map((item, index) => (
              <Task key={index} data={item} />
            ))}
        </ToDoList>
      </Wrapper>
    </Container>
  );
}
