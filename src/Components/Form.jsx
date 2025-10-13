export default function Form({
  children,
  title,
  onSubmit,
  className,
  btnClassName,
  btnText,
  messageLink = <></>,
}) {
  return (
    <form className={className} onSubmit={onSubmit}>
      <h3>{title}</h3>
      {children}
      <button className={btnClassName}>{btnText}</button>
      {messageLink}
    </form>
  );
}

export function Field({
  label,
  labelClassName,
  inputType = "text",
  inputRef,
  value,
  dispatch,
  type,
}) {
  return (
    <label className={labelClassName}>
      <span>{label}</span>
      <input
        ref={inputRef}
        name={crypto.randomUUID()}
        value={value}
        onChange={(e) => dispatch({ type, payload: e.target.value })}
        type={inputType}
      />
    </label>
  );
}
export function DarkScreen({
  showDark,
  setShowDark,
  onChangeItem,
  onSetItem,
  mensagem,
  cancelText,
  confirmText,
  setterText,
}) {
  if (showDark)
    return (
      <div className="dark-screen">
        <div className="dark-content">
          <p>{mensagem}</p>
          <span>
            {cancelText && (
              <button className="button" onClick={() => setShowDark(false)}>
                {cancelText}
              </button>
            )}
            {confirmText && (
              <button className="button" onClick={onChangeItem}>
                {confirmText}
              </button>
            )}
            {setterText && (
              <button className="button" onClick={onSetItem}>
                {setterText}
              </button>
            )}
          </span>
        </div>
      </div>
    );
}
