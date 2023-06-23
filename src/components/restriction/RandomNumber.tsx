
type randomnumbertype={
    value:number
}
type positivenumber=randomnumbertype & {
    isPositive:boolean,
    isNegative?:never,
    isZero?:never
}
type negativenumber= {
    value:number,
    isNegative:boolean,
    isPositive?:never,
    isZero?:never
}
type zero=randomnumbertype & {
    isZero:boolean,
    isPositive?:never,
    isNegative?:never
}
// type RandomNumberProps={
//     value:number,
//     isPositive?:boolean,
//     isNegative?:boolean,
//     isZero?:boolean
// }

type RandomNumberProps=positivenumber|negativenumber|zero


export const RandomNumber=({value,isPositive,isNegative,isZero}:RandomNumberProps)=>{
    return (
        <div>
            {value} {isPositive&&'Postive'}{isNegative&&'Negative'}{isZero&&'Zero'}
        </div>

    )
}