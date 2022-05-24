import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import {useState, useEffect, useCallback} from 'react'

const storageFormKey = 'inputValue';
interface InputFormProps {defaultValue?: string;}
export const InputForm = (props?: InputFormProps) => {
    const [displayError, setDisplayError] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>('empty value')
    const [errorMessage, setErrorMessage] = useState<string>('')

    const formReadyToSubmit = !(displayError || !inputValue);

    const handleInputChange = (event: any) => {
        const messageLength = event.target.value.length;
        setInputValue(event.target.value);
        if (messageLength < 3 || messageLength > 20) {
            if (messageLength < 3) {
                setErrorMessage('User name are to short')
            }

            if (messageLength > 20) {
                setErrorMessage('User name are to long')
            }

            setDisplayError(true)
        } else {
            setDisplayError(false)
            setErrorMessage('')
        }
    }

    const handleSubmit = useCallback(() => {
        if (formReadyToSubmit) {
            localStorage.setItem(storageFormKey, inputValue)
        }
    }, [formReadyToSubmit, inputValue])

    useEffect(() => {
        let valueToSet = '';
        const localStorageData = localStorage.getItem(storageFormKey)
        if (!!localStorageData) {
            valueToSet = localStorageData;
        } else {
            if (!!props?.defaultValue) {
                valueToSet = props?.defaultValue;
            }
        }

        setInputValue(valueToSet);
    }, [props?.defaultValue])

    return <div className='data' >
        {displayError && <div className='error-data' >{errorMessage}</div>}
        <div>What is your user name ? </div>
        <TextField id="standard-basic" variant="standard"  onInput={handleInputChange} value={inputValue} type="text"/>
        <br/>
        <Button onClick={handleSubmit} disabled={!formReadyToSubmit}>submit data</Button>
        
    </div>
}