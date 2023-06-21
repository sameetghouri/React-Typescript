type containerprops = {
    style:React.CSSProperties
}
export const Container = (props:containerprops) => {
    return (
        <div style={props.style}>
            Text goes here
        </div>
    );
}