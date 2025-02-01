import './Input.css'
import { classNames } from '../../lib/classNames/classNames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

type IInputSize = 'sm' | 'md' | 'lg'
type IInputRadius = 'sm' | 'md' | 'lg'

type IInputProps = {
  placeholder?: string
  name?: string
  label?: string
  error?: string
  withAsterisk?: boolean
  size?: IInputSize
  radius?: IInputRadius
  type?: React.HTMLInputTypeAttribute
  icon?: IconDefinition
}

const SIZE: Record<IInputSize, string> = {
  sm: '1rem',
  md: '1.5rem',
  lg: '1.9rem',
}

const RADIUS: Record<IInputRadius, string> = {
  sm: '5px',
  md: '10px',
  lg: '15px',
}

export function Input({
  name,
  label,
  error,
  placeholder,
  size = 'sm',
  radius = 'sm',
  type = 'text',
  withAsterisk = false,
  icon,
}: IInputProps) {
  const inputClasses = classNames('input-element', {
    error: Boolean(error),
    'with-icon': Boolean(icon),
  })

  const labelClasses = classNames('input-label', {
    required: withAsterisk,
  })

  return (
    <div className='input-wrapper '>
      {label && <label className={labelClasses}>{label}</label>}
      <div className='with-icon-wrapper'>
        {icon && <FontAwesomeIcon className='icon' icon={icon} />}
        <input
          className={inputClasses}
          type={type}
          name={name}
          placeholder={placeholder}
          style={{
            fontSize: SIZE[size],
            borderRadius: RADIUS[radius],
          }}
          required={withAsterisk}
        />
      </div>
      {error && <div className='error-text'>{error}</div>}
    </div>
  )
}
