'use strict'

// Packages
import classNames from 'classnames'
import PropTypes from 'prop-types'

const Input = ({
  name,
  label,
  multiline,
  type,
  placeholder,
  success,
  error,
  hint,
  size,
  value,
  autoFocus,
  onChange
}) => {
  const classnames = classNames(size)

  return (
    <div>
      <label htmlFor={name}>{label}</label>

      {multiline ? (
        <textarea
          name={name}
          id={name}
          className={classnames}
          rows="1"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoFocus={autoFocus}
        />
      ) : (
        <input
          name={name}
          id={name}
          className={classnames}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoFocus={autoFocus}
        />
      )}

      {(hint || error || success) && <p>{success || error || hint}</p>}

      <style jsx>{`
        div {
          width: 100%;
          position: relative;
          margin-bottom: 25px;
          transition: all 0.2s;
        }

        div:hover p {
          opacity: 1;
        }

        div:hover input,
        div:hover textarea {
          color: white;
        }

        div:hover input::-webkit-input-placeholder {
          color: white;
        }

        div:hover input::-moz-placeholder {
          color: white;
        }

        div:hover input:-ms-input-placeholder {
          color: white;
        }

        div:hover input:-moz-placeholder {
          color: white;
        }

        div:hover textarea::-webkit-input-placeholder {
          color: white;
        }

        div:hover textarea::-moz-placeholder {
          color: white;
        }

        div:hover textarea:-ms-input-placeholder {
          color: white;
        }

        div:hover textarea:-moz-placeholder {
          color: white;
        }

        input {
          width: 100%;
          border: none;
          font-size: 13px;
          color: #fff;
          outline: none;
          background: none;
          appearance: none;
          border-radius: 2px;
          transition: all 0.2s;
          line-height: 20px;
        }

        textarea {
          width: 100%;
          border: none;
          font-size: 13px;
          color: #fff;
          outline: none;
          background: none;
          appearance: none;
          border-radius: 2px;
          resize: none;
          min-height: 100px;
          transition: all 0.2s;
          line-height: 20px;
        }

        .large {
          padding-left: 0;
          padding-right: 0;
          font-size: 25px;
          font-weight: 600;
        }

        .medium {
          padding-left: 0;
          padding-right: 0;
          font-size: 20px;
          font-weight: 400;
        }

        input::-webkit-input-placeholder {
          color: #aaa;
        }

        input::-moz-placeholder {
          color: #aaa;
        }

        input:-ms-input-placeholder {
          color: #aaa;
        }

        input:-moz-placeholder {
          color: #aaa;
        }

        textarea::-webkit-input-placeholder {
          color: #aaa;
        }

        textarea::-moz-placeholder {
          color: #aaa;
        }

        textarea:-ms-input-placeholder {
          color: #aaa;
        }

        textarea:-moz-placeholder {
          color: #aaa;
        }

        .large::-webkit-input-placeholder {
          color: #aaa;
        }

        .large::-moz-placeholder {
          color: #aaa;
        }

        .large:-ms-input-placeholder {
          color: #aaa;
        }

        .large:-moz-placeholder {
          color: #aaa;
        }

        input:focus::-webkit-input-placeholder {
          color: white;
        }

        input:focus::-moz-placeholder {
          color: white;
        }

        input:focus:-ms-input-placeholder {
          color: white;
        }

        input:focus:-moz-placeholder {
          color: white;
        }

        textarea:focus::-webkit-input-placeholder {
          color: white;
        }

        textarea:focus::-moz-placeholder {
          color: white;
        }

        textarea:focus:-ms-input-placeholder {
          color: white;
        }

        textarea:focus:-moz-placeholder {
          color: white;
        }

        label {
          display: block;
          color: #aaa;
          font-size: 13px;
          margin-bottom: 10px;
        }

        p {
          margin-top: 10px;
          font-size: 12px;
          font-family: Helvetica Neue;
          color: #aaa;
          font-style: italic;
          opacity: 0.75;
        }
      `}</style>
    </div>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  multiline: PropTypes.bool,
  type: PropTypes.oneOf(['text', 'email']),
  placeholder: PropTypes.string,
  hint: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  success: PropTypes.string,
  icon: PropTypes.element,
  size: PropTypes.oneOf(['normal', 'large', 'medium']),
  autoFocus: PropTypes.bool
}

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  disabled: false,
  hint: '',
  error: '',
  success: '',
  multiline: false,
  icon: null,
  value: '',
  size: 'normal',
  autoFocus: false
}

export default Input