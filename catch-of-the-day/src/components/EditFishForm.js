import React from 'react';

class EditFishForm extends React.Component {
  handleChange = event => {
    const { name: changedProperty, value: changedValue } = event.currentTarget;
    const updatedFish = {
      ...this.props.fish,
      [changedProperty]: changedValue
    };
    this.props.updateFish(this.props.fishId, updatedFish);
  };

  render() {
    const { deleteFish, fishId, fish } = this.props;
    return <div className="fish-edit">
      <input name="name" value={fish.name} type="text" placeholder="Name" onChange={this.handleChange} />
      <input name="price" value={fish.price} type="text" placeholder="Price" onChange={this.handleChange} />
      <select name="status" value={fish.status} onChange={this.handleChange}>
        <option value="available">Fresh!</option>
        <option value="unavailable">Sold Out!</option>
      </select>
      <textarea name="desc" value={fish.desc} placeholder="Desc" onChange={this.handleChange}></textarea>
      <input name="image" value={fish.image} type="text" placeholder="Image" onChange={this.handleChange} />
      <button onClick={() => deleteFish(fishId)}>Remove Fish</button>
    </div>;
  }
}

export default EditFishForm;
