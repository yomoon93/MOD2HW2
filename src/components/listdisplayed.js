import React from 'react'
class DisplayList extends React.Component{
   



    render(){
        // console.log(this.props.arrayList)

        var filteredList = this.props.list.filter((item)=> item.isPurchase? false:true)
        return(
            <div>

                <ul className="list">

                {filteredList.map((val)=>{
                    return(
                        <li key={val.id}>
                            <div>{val.items}<br/>{val.units}<br/> {val.quantity}</div><button value={val.id} onClick={this.props.purchase}>Purchase</button>
                        
                        </li>

    )
    })}

                </ul>
            </div>
      
      
      
      
      )
      
      
    }
}
export default DisplayList