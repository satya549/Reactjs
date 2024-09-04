import React, {Component} from "react";
class addItem extends Component {
    state = {  } 
    render() { 
        return <form className="row mb-5">
        <div className="mb-3 col-4">
          <label htmlFor="inputName" className="form-label">Email address</label>
          <input type="text" className="form-control" id="inputName" aria-describedby="name"/>
        </div>
        <div className="mb-3 col-4">
          <label htmlFor="inputPrice" className="form-label">Price</label>
          <input type="number" className="form-control" id="price"/>
        </div>
        <button type="submit" className="btn btn-primary col-4" onClick={() => {
          this.props.addItem()
        }}>Add</button>
      </form>;
    }
}
 
export default addItem;