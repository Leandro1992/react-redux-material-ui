import React, { useState, useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import { TextField, InputAdornment } from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import IconButton from '@material-ui/core/IconButton'
import InputMask from 'react-input-mask'

import styles from './styles.css'
import useStyles from './use-styles'

const inputType = { PASSWORD: 'password', TEXT: 'text', CPF: 'cpf', PHONE: 'phone' }
const defaultInputStyle = {
  textField: {
    width: '100%',
  },
  input: {
    paddingLeft: 30,
  },
  label: {
    fontSize: 10,
  },
}

const Input = ({
  style,
  type,
  placeholder,
  autoComplete,
  value,
  onChange,
  name,
  error,
  leftIcon,
  rightIcon,
  helperText,
  inputStyle,
  multiline,
  disabled
}) => {
  const [input, setInput] = useState(type)
  const [showPassword, setShowPassword] = useState(false)
  const labelEffectStyle = useStyles()

  const isPasswordField = useMemo(() => type === inputType.PASSWORD, [type])
  const isCpf = useMemo(() => name === inputType.CPF, [name])
  const isPhone = useMemo(() => name === inputType.PHONE, [name])

  const handleClickShowPassword = useCallback(() => {
    if (input === inputType.PASSWORD) {
      setInput(inputType.TEXT)
      setShowPassword(true)
    } else {
      setInput(inputType.PASSWORD)
      setShowPassword(false)
    }
  }, [input])

  const labelProps = useMemo(
    () => ({
      style: inputStyle.label ? inputStyle.label : defaultInputStyle.label,
      classes: labelEffectStyle,
    }),
    [inputStyle.label, labelEffectStyle]
  )

  const inputProps = useMemo(
    () => ({
      style: inputStyle.input ? inputStyle.input : defaultInputStyle.input,
      endAdornment: isPasswordField ? (
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            edge="end"
          >
            {showPassword ? <Visibility color="primary" /> : <VisibilityOff color="primary" />}
          </IconButton>
        </InputAdornment>
      ) : (
        rightIcon.id && (
          <InputAdornment position="end">
            <svg aria-hidden="true" viewBox={rightIcon.viewBox} className={styles.icon}>
              <use xlinkHref={`#${rightIcon.id}`} />
            </svg>
          </InputAdornment>
        )
      ),
    }),
    [
      handleClickShowPassword,
      inputStyle.input,
      isPasswordField,
      rightIcon.id,
      rightIcon.viewBox,
      showPassword,
    ]
  )
  return (
    <div className={styles.input}>
      {leftIcon.id && (
        <svg aria-hidden="true" viewBox={leftIcon.viewBox} className={styles['left-icon']}>
          <use xlinkHref={`#${leftIcon.id}`} />
        </svg>
      )}
      {isCpf ? (
        <InputMask
          mask="999.999.999-99"
          onChange={onChange}
          value={value}
          maskPlaceholder={'\u2000'}
          disabled={disabled}
        >
          <TextField
            style={inputStyle.textField ? inputStyle.textField : defaultInputStyle.textField}
            type={input}
            error={error}
            label={placeholder}
            autoComplete={autoComplete}
            name={name}
            variant={style}
            helperText={helperText}
            InputLabelProps={labelProps}
            InputProps={inputProps}
          />
        </InputMask>
      ) : isPhone ? (
        <InputMask
          mask="(99) 99999-9999"
          onChange={onChange}
          value={value}
          disabled={disabled}
        >
          <TextField
            style={inputStyle.textField ? inputStyle.textField : defaultInputStyle.textField}
            type={input}
            error={error}
            label={placeholder}
            autoComplete={autoComplete}
            name={name}
            variant={style}
            helperText={helperText}
            InputLabelProps={labelProps}
            InputProps={inputProps}
          />
        </InputMask>
      ) : (
        <TextField
          style={inputStyle.textField ? inputStyle.textField : defaultInputStyle.textField}
          type={input}
          error={error}
          label={placeholder}
          autoComplete={autoComplete}
          name={name}
          disabled={disabled}
          onChange={onChange}
          value={value}
          variant={style}
          helperText={helperText}
          InputLabelProps={labelProps}
          InputProps={inputProps}
        />
      )}
    </div>
  )
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'tel', 'password', 'email', 'date']),
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  error: PropTypes.bool,
  style: PropTypes.string,
  leftIcon: PropTypes.shape({ id: PropTypes.string, viewBox: PropTypes.string }),
  rightIcon: PropTypes.shape({ id: PropTypes.string, viewBox: PropTypes.string }),
  helperText: PropTypes.string,
  inputStyle: PropTypes.shape({}),
}

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  autoComplete: '',
  error: false,
  style: 'outlined',
  leftIcon: {},
  rightIcon: {},
  helperText: '',
  inputStyle: {},
  value: undefined,
  onChange: () => {},
}

export default React.memo(Input)
