import _ from "lodash";
import { BaseSyntheticEvent } from "react";

export const formData = (form: any): any => {
  if (form) {
    form.classList.add("formData");

    const inputs: never[] = Array.from(
      document.querySelectorAll(
        ".formData input, .formData select, .formData textarea"
      )
    );

    if (form && inputs && _.isArray(inputs)) {
      const formData = {};

      inputs.forEach((input) => {
        formData[input["name"]] = input["value"];
      });

      return formData;
    } else {
      return {};
    }
  } else {
    return {};
  }
};

export const verifyInputedData = async (
  event: BaseSyntheticEvent,
  [
    { useValidFields, setValidFields },
    { useLastValidatedFields, setLastValidatedFields },
  ]
): Promise<void> => {
  event.preventDefault();

  const element = event.target;
  console.log(useValidFields)
  if (element.value != useLastValidatedFields[element.name]) {
    const result = await (
      await fetch(`/api/validate/user?${element.name}=${element.value}`)
    ).json();

    setValidFields({
      ...useValidFields,
      [element.name]: result.isValid,
    });

    setLastValidatedFields({
      ...useLastValidatedFields,
      [element.name]: element.value,
    });

    if (!result.isValid) {
      setValidityInput(element, result.isValid, `${element.name} já cadastrado.`)
    } else {
      setValidityInput(element, result.isValid);
    }
  } else {
    if (
      _.isBoolean(useValidFields[element.name]) &&
      !useValidFields[element.name]
    ) {
      setValidityInput(element, useValidFields[element.name], `${element.name} já cadastrado.`)
    } else {
      setValidityInput(element, useValidFields[element.name])
    }
  }
};

export const setValidityInput = (element:any, isValid:boolean, message?: string) => {
  if (_.isBoolean(isValid) && !isValid) {
    element.setCustomValidity(message);
    element.reportValidity();
  } else if (isValid === null){
    element.setCustomValidity('Campo Obrigatório');
    element.reportValidity();
  } else {
    element.setCustomValidity('');
    element.reportValidity();
  }
};

export const getVerifiedInputClass = (validInput: boolean | null): string => {
  if (validInput === null) {
    return "";
  };

  return !validInput && validInput != null ? "invalidInput" : "validInput";
};
