import React, { useCallback, useReducer } from 'react'
import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button'
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators'
import "./NewPlace.css"

const formReducer = (state, action) => {
  switch(action.type) {
    case 'INPUT_CHANGE':
      let formIsValid = true;
      // go through all the form inputs and see if valid
      for (const input in state.inputs) {
        if(input === action.input) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[input].isValid
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.input] : { value: action.value, isValid: action.isValid}
        },
        isValid: formIsValid
      };
    default:
      return state;
  }
}

const NewPlace = () => {
  // Reducer to manage state. 2nd arg is the initial state, which we need to update in the Reducer above
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      },
    },
    isValid: false
  });

  const InputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: 'INPUT_CHANGE',
      value: value,
      isValid: isValid,
      inputId: id});
  }, [dispatch]);


  return (
    <form className='place-form'>
      <Input
        id='title'
        element='input'
        type='text'
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please enter a valid title.'
        onInput={InputHandler}
      />
      <Input
        id='description'
        element='textarea'
        label="Description"
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
        errorText='Please enter a valid description of at least 5 characters.'
        onInput={InputHandler}
      />
      <Button type='submit' disabled={!formState.isValid}>ADD PLACE</Button>
    </form>
  )
}

export default NewPlace
