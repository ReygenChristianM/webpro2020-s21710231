import React,{Component} from "react";

class Counter extends Component{
   state ={
            number:0,
        };
     componentDidMount(){
            console.log("komponen di mount");
        }
    componentDidUpdate(){
        console.log("komponen telah diperbaharui");
    }
    tambah=()=>{
        this.setState({number:this.state.number+1})
}

    kurang =()=>{
    this.state.number<1
        ? this.setState({number:0})
        : this.setState({number:this.state.number-1});
    }
    render() {
        console.log("komponen di render");
        return (
            <div>
            <p>{this.props.title}</p>
            <p>komponen ini sudah diklik sebanyak {this.state.number} kali</p>
            <button onClick={this.tambah}>
                Tambah</button>
            <button onClick={this.kurang}>
            Kurang</button>
            </div> 
        );
    }
}

export default Counter;
