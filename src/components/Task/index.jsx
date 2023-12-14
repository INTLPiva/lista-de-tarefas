import React from "react";
import { Container } from "./styles";
import { CheckCircle, Trash } from "phosphor-react";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export function Task({ data }) {
  async function handleDeleteTask(id) {
    try {
      const response = await api.delete(`/${id}`);
      if (response.status === 200) {
        window.location.reload();
      }
    } catch (error) {
      toast.error("Erro ao excluir Tarefa");
    }
  }

  async function handleCompleteTask(id) {
    const response = await api.get(`/${id}`);

    const currentDate = new Date();
    const date = currentDate.toISOString().substring(0, 10);
    const hour = currentDate.toISOString().substring(11, 19);

    const data = {
      ...response.data,
      completed: true,
      completedOn: date + " às " + hour,
      updatedAt: currentDate.toISOString(),
    };

    try {
      const response = await api.put(`/${id}`, data);
      if (response.status === 200) {
        window.location.reload();
      }
    } catch (error) {
      toast.error("Erro ao concluir Tarefa");
    }
  }

  return (
    <Container>
      <div className="content">
        <h3>{data.name}</h3>
        <p>{data.description}</p>
        {data.completed && (
          <i>
            <p>Concluída em: {data.completedOn}</p>
          </i>
        )}
      </div>

      <div style={{ display: "flex" }}>
        <Trash
          className="icon trash"
          onClick={() => handleDeleteTask(data.id)}
        />
        {!data.completed && (
          <CheckCircle
            className="icon check"
            onClick={() => handleCompleteTask(data.id)}
          />
        )}
      </div>
    </Container>
  );
}
