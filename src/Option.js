import React, { useEffect } from 'react';

const Option = (props) => {

    const [enableOption,setEnableOption] = React.useState(false);

    useEffect(()=>{
        console.log(props.type);
    })

    const optionType = {
        "type1" : [
            {
                name : "Input",
                id : "input",
                target : "type2"
            },
            {
                name : " Select Feild",
                id : "feild",
                target : "type2"
            }
        ],
        "type2" : [
            {
                name : "Currency",
                id : "currency"
            },
            {
                name : "Fixed Rate",
                id : "fixed-rate"
            },
            {
                name : "Floating Rate",
                id : "floating-rate"
            },
            {
                name : "National",
                id : "national"
            }
        ]
    }

    const optionClickHandler = (option) =>{
        setEnableOption(!enableOption);
        let targetOptionId = "type1";
        switch(option.id){
            case "input" : 
                targetOptionId = "type2"
                break;
            case "feild" : 
                targetOptionId = "type2"
                break;
            default :
                break;
        }
        props.updateExpression(props.expressionId,props.label,targetOptionId);
    }

    const renderOptions = () =>{
        let elements = [];
        optionType[props.type].map((option)=>{
            elements.push( <li id={option.id} onClick={_=>{optionClickHandler(option)}}>{option.name}</li>);
        });

        return elements;
    }

    const showDropdown = () =>{
        setEnableOption(!enableOption);
    };

    return (
        <div>
            <div className="dropdown-header" onClick={showDropdown}><span>{optionType[props.type].find(u=>{return u.id === props.id}).name}</span></div>
            {/* <div className="dropdown-header" onClick={showDropdown}><span>Choose</span></div> */}
            <ul className={enableOption ? "option-wrapper" : "option-wrapper hide"}>
                {
                    renderOptions()
                }
            </ul>
        </div>
        
    );
}

export default Option;
