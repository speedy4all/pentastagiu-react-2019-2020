import React from 'react';

const ShowInfo = ({match, items}) => {
    console.log(items);
    var item= items.find(p => p.id == match.params.productId);
    var itemData;
  
    if(item)
      itemData = <div>
        <h3> {item.name} </h3>
        <p>{item.description}</p>
        {/* <hr/>
        <h4>{item.status}</h4>   */}
        </div>;
    else
      itemData = <h2> Sorry. Spa information doesnt exist </h2>;
  
    return (
      <div>
        <div>
           {itemData}
        </div>
      </div>
    )    
  }

  export default ShowInfo;
 