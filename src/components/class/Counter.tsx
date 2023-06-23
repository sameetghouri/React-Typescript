import { Component } from "react";

type counterprops={
    message:string
}
type counterstate={
    count:number
}
export class Counter extends Component<counterprops,counterstate>{
    state={
        count:0
    }
    handleClick=()=>{
        this.setState((prevstate)=>({count:prevstate.count+1}))
    }
    render(){
        return(
            <div>
                <button onClick={this.handleClick}>Increment</button>
                {this.props.message}{this.state.count}
            </div>
        )
    }
}