import './Input.css'
import { classNames } from '../../lib/classNames/classNames'

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
}: IInputProps) {
  const inputClasses = classNames('', {
    error: error,
  })

  const labelClasses = classNames('input-label', {
    required: withAsterisk,
  })

  return (
    <div className='input-wrapper '>
      {label && <label className={labelClasses}>{label}</label>}
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
      {error && <div className='error-text'>{error}</div>}
    </div>
  )
}
