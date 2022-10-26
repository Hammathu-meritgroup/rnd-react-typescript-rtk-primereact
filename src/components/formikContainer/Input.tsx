import { InputText } from 'primereact'
import React from 'react'
import { ControlProps } from '.'
import TextError from './TextError'

type InputProps =ControlProps & React.ComponentProps<typeof InputText>
function Input(props:Partial<InputProps>) {

  let clsname="field col-12 md:col-"+props.cl??12
  return (

    <div className={clsname}>
      <span className="p-float-label">
          <InputText  name={props.name} {...props as React.ComponentProps<typeof InputText>} />
          <label htmlFor="inputtext">{props.label}</label>
      </span>
    </div>

//     <div className="field">
//     <label htmlFor={props.name} className="block">{props.label}</label>
//     <InputText name={props.name}  className="p-inputtext-sm  block"/>
//     <TextError>
//      <small id="username1-help" className="block">Enter your username to reset your password.</small>
//     </TextError>
// </div>
  )
}

export default Input