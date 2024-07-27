import styled from "styled-components";
import BREAKPOINTS from "../../Themes/Breakpoints";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
  padding: 0 20px;
`;

export const FormContainer = styled.div`
  width: 100%;
  box-sizing: border-box;

  ${BREAKPOINTS.MOBILE} {
    border: none;
  }
`;

export const FormField = styled.div`
  display: flex;
  gap: 12px;

  ${BREAKPOINTS.MOBILE} {
    flex-direction: column;
    gap: 0;
  }
`;

export const FormList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${BREAKPOINTS.MOBILE} {
    gap: 0;
  }
`;

export const Label = styled.label`
  background-color: #f1f1f1;
  padding: 12px;
  width: 100%;
  max-width: 170px;
  display: block;
  font-weight: bold;

  ${BREAKPOINTS.MOBILE} {
    max-width: 100%;
    box-sizing: border-box;
  }
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  width: 100%;

  ${BREAKPOINTS.MOBILE} {
    margin: 14px 0;
    padding: 14px 0;
  }
`;

export const Select = styled.select`
  border: 1px solid #ccc;
  background-color: white;
  font-size: 16px;
  width: 250px;

  ${BREAKPOINTS.MOBILE} {
    width: 100%;
    margin: 14px 0;
    padding: 14px 0;
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;

  ${BREAKPOINTS.MOBILE} {
    margin: 12px 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 16px;

  ${BREAKPOINTS.MOBILE} {
    margin: 12px 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 38px;
`;

export const Button = styled.button`
  width: 200px;
  padding: 14px 28px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1em;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  ${BREAKPOINTS.MOBILE} {
    width: 100%;
  }
`;
