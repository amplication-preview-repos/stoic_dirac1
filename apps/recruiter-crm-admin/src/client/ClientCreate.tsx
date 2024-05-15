import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { JobOpeningTitle } from "../jobOpening/JobOpeningTitle";

export const ClientCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" multiline source="address" />
        <TextInput label="email" source="email" type="email" />
        <ReferenceArrayInput
          source="jobOpenings"
          reference="JobOpening"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={JobOpeningTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <TextInput label="phone" source="phone" />
      </SimpleForm>
    </Create>
  );
};
