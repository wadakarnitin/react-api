import React,{Component} from 'react';
import Contacts from './components/contact';
class  App extends Component{

  state={
    contacts:[]
  }
  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>{
      this.setState({contacts:data})
      console.log(data);
    })
    .catch(console.log("error"))
  }
  render(){
  return (
   <Contacts contacts={this.state.contacts} />
  );
}
}
export default App;
