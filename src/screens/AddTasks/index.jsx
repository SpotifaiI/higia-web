import React, { useState } from "react";
import { Save } from "react-feather";
import { AppWrapper } from "../../components/AppWrapper/index.jsx";
import { FormFieldInput } from "../../components/FormFieldInput/index.jsx";
import { TaskMap } from "../../components/TaskMap/index.jsx";
import { GradientActionButton } from "../../components/GradientActionButton/index.jsx";
import {
  MapBox,
  TaskForm,
  TaskFormContainer,
  TaskFormFooter,
  TaskFormRowAddress,
  TaskFormRowGeneral,
  TaskFormRowLocation,
  TaskFormRowRef,
} from "./styles.js";
import { createTask } from "../../api/tasks/index.jsx";

export function AddTasks() {
  const [formData, setFormData] = useState({
    title: "",
    urgencyLevel: 0,
    status: 0,
    coordinates: { latitude: "", longitude: "" },
    collaboratorsId: [""],
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMapClick = (lat, lng) => {
    setFormData({
      ...formData,
      coordinates: { latitude: lat, longitude: lng },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTask(formData);
      alert("Tarefa criada com sucesso!");
    } catch (error) {
      alert("Erro ao criar tarefa.");
    }
  };

  return (
    <AppWrapper backTo="/tasks" title="Criar Tarefa">
      <TaskFormContainer>
        <TaskForm onSubmit={handleSubmit}>
          <TaskFormRowGeneral>
            <FormFieldInput
              label="Título"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
            <FormFieldInput
              label="Nível de Urgência"
              name="urgencyLevel"
              type="number"
              value={formData.urgencyLevel}
              onChange={handleInputChange}
            />
            <FormFieldInput
              label="Status"
              name="status"
              type="number"
              value={formData.status}
              onChange={handleInputChange}
            />
          </TaskFormRowGeneral>

          <TaskFormRowAddress>
            <FormFieldInput
              label="CEP"
              name="cep"
              value={formData.cep}
              onChange={handleInputChange}
            />
            <FormFieldInput
              label="Endereço"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
            <FormFieldInput
              label="Número"
              name="number"
              value={formData.number}
              onChange={handleInputChange}
            />
          </TaskFormRowAddress>

          <TaskFormRowRef>
            <FormFieldInput
              label="Referência"
              name="reference"
              value={formData.reference}
              onChange={handleInputChange}
            />
          </TaskFormRowRef>

          <TaskFormRowLocation>
            <FormFieldInput
              label="Latitude"
              name="latitude"
              value={formData.coordinates.latitude}
              readOnly
            />
            <FormFieldInput
              label="Longitude"
              name="longitude"
              value={formData.coordinates.longitude}
              readOnly
            />
            <FormFieldInput
              label="Bairro"
              name="neighborhood"
              value={formData.neighborhood}
              onChange={handleInputChange}
            />
            <FormFieldInput
              label="Cidade"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
            />
            <FormFieldInput
              label="Estado"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
            />
          </TaskFormRowLocation>

          <TaskFormRowGeneral>
            <FormFieldInput
              label="ID do Colaborador"
              name="collaboratorsId"
              value={formData.collaboratorsId[0]}
              onChange={(e) =>
                setFormData({ ...formData, collaboratorsId: [e.target.value] })
              }
            />
            <FormFieldInput
              label="Descrição"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </TaskFormRowGeneral>

          <TaskFormFooter>
            <GradientActionButton type="submit">
              <Save size={24} />
              Salvar
            </GradientActionButton>
          </TaskFormFooter>
        </TaskForm>

        <MapBox>
          <TaskMap tasks={[]} onMapClick={handleMapClick} />
        </MapBox>
      </TaskFormContainer>
    </AppWrapper>
  );
}
