type textownprops <E extends React.ElementType> ={
    size?:'sm'|'md'|'lg'
    color?:'primary'|'secondary'
    children:React.ReactNode
    as?: E
}

type textprops <E extends React.ElementType> = textownprops<E> &
 Omit<React.ComponentProps<E>, keyof textownprops<E>>

export const Text=<E extends React.ElementType = 'div'>({size,color,children,as}:textprops<E>)=>{
    const Component = as || 'div';
    return <Component className={`text-${size}-${color}`}>{children}</Component>
}