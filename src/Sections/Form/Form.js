import React, { useState } from "react";
import Container from "../../Components/Container/Container";
import {
  Input,
  Select,
  RadioGroup,
  CheckboxGroup,
  Wrapper,
  FormContainer,
  FormList,
  FormField,
  Label,
  ButtonContainer,
  Button,
} from "./Form.styled";

const Forms = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    option: "",
    radio: "",
    checkboxs: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        checkboxs: checked
          ? [...prevData.checkboxs, value]
          : prevData.checkboxs.filter((checkbox) => checkbox !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  const formFields = [
    {
      label: "Name:",
      input: (
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      ),
    },
    {
      label: "Company:",
      input: (
        <Input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
      ),
    },
    {
      label: "Email:",
      input: (
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      ),
    },
    {
      label: "Select Field:",
      input: (
        <Select
          id="option"
          name="option"
          value={formData.option}
          onChange={handleChange}
        >
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      ),
    },
    {
      label: "Radio Field:",
      input: (
        <RadioGroup>
          {["Selection 1", "Selection 2", "Selection 3", "Selection 4"].map(
            (value) => (
              <label key={value}>
                <input
                  type="radio"
                  name="radio"
                  value={value}
                  checked={formData.radio === value}
                  onChange={handleChange}
                />
                {value}
              </label>
            )
          )}
        </RadioGroup>
      ),
    },
    {
      label: "Checkbox Field:",
      input: (
        <CheckboxGroup>
          {["Selection 1", "Selection 2", "Selection 3", "Selection 4"].map(
            (value) => (
              <label key={value}>
                <input
                  type="checkbox"
                  name="checkbox"
                  value={value}
                  checked={formData.checkboxs.includes(value)}
                  onChange={handleChange}
                />
                {value}
              </label>
            )
          )}
        </CheckboxGroup>
      ),
    },
  ];

  return (
    <Container>
      <Wrapper>
        <h1>Form</h1>
        <FormContainer>
          <form onSubmit={handleSubmit}>
            <FormList>
              {formFields.map(({ label, input }) => (
                <FormField key={label}>
                  <Label>{label}</Label>
                  {input}
                </FormField>
              ))}
            </FormList>
            <ButtonContainer>
              <Button type="submit">Submit</Button>
            </ButtonContainer>
          </form>
        </FormContainer>
      </Wrapper>
    </Container>
  );
};

export default Forms;
