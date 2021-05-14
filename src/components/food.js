
import React from 'react'
import GroceryList from './grocerylist'
import DisplayList from './listdisplayed'


class Food extends React.Component{
    constructor(props){
        super(props)
        this.state = {
         
            list:
            [

                {
                    items:'peanut butter',
                    units: '2 ounces',
                    quantity:'2',
                    isPurchase:false,
                    id:0
                    
                },
                {
                    items:'eggs',
                    units: '12 dozen',
                    quantity:'2',
                    isPurchase:false,
                    id:1
                    
                },
                {
                    items:'milk',
                    units: '2 ounces',
                    quantity:'1',
                    isPurchase:false,
                    id:2 
                    
                }
            ],
                
    }
 
} 

handlePurchase = (event) => {
      alert("You have removed from list")
    var array1 = this.state.list.slice()
    var keynum = array1.findIndex((item)=> item.id == event.target.value ? true:false)
    array1[keynum].isPurchase = !array1[keynum].isPurchase
    this.setState({list:array1})  
    console.log(keynum)
}


// handleChange = (event) => {
//     const {name,value} = event.target
//     this.setState({[name]:value})
// }

    addGrocery =(item)=>{
        let array = this.state.list.slice()
        array.push(item)
        this.setState({
            list:array,
        })
    }
    // handlePurchase = () => {
    //     let array1 = this.state.list.length
    //     for (let i = 0; i < array1; i++){
    //         let objNum = array1[i]
    //         if()
    //     }

    // }
    





        render(){
            return(
                <div>
            <DisplayList  list = {this.state.list} 
                            purchase={this.handlePurchase}/>
              <GroceryList addGrocery = {this.addGrocery} 
                           list = {this.state.list} />
            </div>
        )
    }
}
export default Food
