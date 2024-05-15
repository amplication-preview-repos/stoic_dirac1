import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectArrayInput,
} from "react-admin";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="password" source="password" />
        <SelectArrayInput
          label="roles"
          source="roles"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
