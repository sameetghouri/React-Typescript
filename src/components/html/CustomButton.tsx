type buttonprops={
    varient: 'primary' | 'secondary',
    children:string
} & Omit<React.ComponentProps<'button'>,'children'>
export const CustomButton=({varient,children,...rest}:buttonprops)=>{
    return(
        <button className={`${varient}-button-class`} {...rest} >{children}</button>
    )
} 