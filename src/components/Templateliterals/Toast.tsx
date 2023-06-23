/**
 * Position prop can be one of the following:
 * "left-top" | "left-center" | "left-bottom" | "right-top" | "right-center" | "right-bottom"
 * | "center-bottom" | "center-top" | "center"
 */
type horizontalPosition = "left" | "center" | "right" 
type verticalPosition = "top" | "center" | "bottom"
type toastprops = {
  position: Exclude <`${horizontalPosition}-${verticalPosition}`,'center-center'>
}
export const Toast =({position}:toastprops)=>{
    return(
        <div>
            <h2>Toast Notification Position {position}</h2>
        </div>
    )
}