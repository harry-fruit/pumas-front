export type InputProps = {
    text: string,
    type?: string,
    colSize?: number,
    fieldName: string,
    placeholder: string
}

export const Input = ({ text, type, colSize, fieldName, placeholder }: InputProps) => {
    type = type ? type : 'text';

    return (
        <>
            <div className={`${colSize ? `col-md-${colSize}` : 'col-md'} form-floating`}>
                <input type={type} className="form-control" id={fieldName} placeholder={placeholder}/>
                <label htmlFor={fieldName}>{text}</label>
            </div>
        </>
    )
}