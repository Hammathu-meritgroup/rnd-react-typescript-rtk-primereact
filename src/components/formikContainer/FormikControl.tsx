import { InputText, InputTextarea } from 'primereact'
import React from 'react'
import { ControlProps, Keyvalue } from '.'
import Input from './Input'

type PrimeReactControlProps=React.ComponentProps<typeof InputText>
|React.ComponentProps<typeof InputTextarea>|React.ComponentProps<typeof InputTextarea>

type FormControlProps=ControlProps &PrimeReactControlProps

function FormikControl(props:Partial<FormControlProps>) {
  const {control,...rest}=props
 switch(control){
  case 'input':
    return <Input {...rest as React.ComponentProps<typeof InputText>} />
  // case 'textarea':
  //   return <Textarea {...rest} />
  // case 'select':
  //   return <Select {...rest} />
  // case 'radio':
  //   return <RadioButtons {...rest} />
  // case 'checkbox':
  //   return <CheckboxGroup {...rest} />
  // case 'date':
  //   return <DatePicker {...rest} /> 
  default:
    return null
 }
}

export default FormikControl