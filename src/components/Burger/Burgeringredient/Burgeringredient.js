import React,{Component} from 'react';
import './Burgeringredient.css';
import PropTypes from 'prop-types';
class Burgeringredient extends Component{
    render(){
    
    let ingredient=null;
    switch(this.props.type){
        case ('breadbottom'):
        ingredient=<div className="BreadBottom"></div>;
        break;
        case('BreadTop'):
        ingredient=<div className="BreadTop">
        <div className="Seeds1 "></div>
        <div className="Seeds2 "></div>
        </div>
        break;
        case('meat'):
        ingredient=<div
        className="Meat"></div>
        break;
        case('cheese'):
        ingredient=<div className="Cheese"></div>
        break;
        case('salad'):
        ingredient=<div className="Salad "></div>
        break;
        case('becon'):
        ingredient=<div className="Bacon"></div>
        default:
        ingredient = null;
    }
    return ingredient;
}
}
Burgeringredient.PropTypes={
    type:PropTypes.string.isRequired
}

export default Burgeringredient;