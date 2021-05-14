
import React from 'react'

class GroceryList extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            items:'',
            units:'',
            quantity:'',
            isPurchase:false
        }
 
    }       

    // handlePurchase = (event) => {
      
    //     var array1 = this.props.list.slice()
    //     var keynum = array1.findIndex((item)=> item.id == event.target.value ? true:false)
    //     array1[keynum].isPurchase = !array1[keynum].isPurchase
    //     this.setState({list:array1})  
    //     console.log(keynum)
    // }

    // handleRemove = (event) => {
       
    //     var keynum = event.target.getAttribute('value')
    //     var currentList = this.props.list.slice()
        
    //     var spliceIt = currentList.splice(keynum,1)
    //     console.log(spliceIt)
    // }
  
    handleChange = (event) => {
        const {name,value} = event.target
        this.setState({[name]:value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let grocery = {
            items:this.state.items,
            units:this.state.units,
            quantity:this.state.quantity,
            isPurchase:this.state.isPurchase,
            id:this.props.list.length
        }
        this.props.addGrocery(grocery)


}

// handleChange = (event) => {
//     const {name,value} = event.target
//     this.setState({[name]:value})
// }


    render(){
        return(

            <div>
                <form onSubmit={this.handleSubmit}>  {/* were possing arguments so we wrap the handle submit in another function ... to pass arguments into it  */}
                    <label>
                    Item: <input type="text" placeholder="Item" onChange={this.handleChange} value={this.state.items} name ='items'/>
                    Units: <input type="text" placeholder="Units" onChange={this.handleChange} value={this.state.units} name ='units'/>
                    Quantity: <input type="text" placeholder="Quantity" onChange={this.handleChange} value={this.state.quantity} name ='quantity'/>
                    isPurchase: <input type="text" placeholder="isPurchase" onChange={this.handleChange} value={this.state.isPurchase} name ='isPurchase'/>
                    <input id="me" type="submit" value="submit"/>
                    </label>
                </form>
            </div>
                )
        }
}
export default GroceryList