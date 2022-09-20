import React from 'react';

const MainOption = (props) => {

    const [enableOption,setEnableOption] = React.useState(false);

    const options = [
        {
            name : "Something is equal to something",
            id : "siets"
        },
        {
            name : "Something is not equal to something",
            id : "sinets"
        },
        {
            name : "Something is less than something",
            id : "silts"
        },
        {
            name : "Something is greater than",
            id : "sigt"
        }
    ];

    const optionClickHandler = (option) =>{
        setEnableOption(!enableOption);
        let data = {};
        switch(option.id){
            case "siets" : 
                data[`option${option.id}`] = {
                    text : "",
                    isOption : true,
                    optionId : "type1",
                    default : "input",
                    parent : `option${option.id}`
                };
                data[`option1${option.id}`] = {
                    text : "is equal to",
                    isOption : false
                };
                data[`option2${option.id}`] = {
                    text : "",
                    isOption : true,
                    optionId : "type1",
                    default : "input",
                    parent : `option2${option.id}`
                };
                data["id"] = "siets";
                break;
            case "sinets" : 

                data[`option${option.id}`] = {
                    text : "",
                    isOption : true,
                    optionId : "type1",
                    default : "input",
                    parent : `option${option.id}`
                };
                data[`option1${option.id}`] = {
                    text : "is not equal to",
                    isOption : false
                };
                data[`option2${option.id}`] = {
                    text : "",
                    isOption : true,
                    optionId : "type1",
                    default : "input",
                    parent : `option2${option.id}`
                };
                data["id"] = "sinets";
                break;
            case "silts" : 
                
                data[`option${option.id}`] = {
                    text : "",
                    isOption : true,
                    optionId : "type1",
                    default : "input",
                    parent : `option${option.id}`
                };
                data[`option1${option.id}`] = {
                    text : "is less than",
                    isOption : false
                };
                data[`option2${option.id}`] = {
                    text : "",
                    isOption : true,
                    optionId : "type1",
                    default : "input",
                    parent : `option2${option.id}`
                };
                data["id"] = "silts";
                break;
            case "sigt" : 
                data[`option${option.id}`] = {
                    text : "",
                    isOption : true,
                    optionId : "type1",
                    default : "input",
                    parent : `option${option.id}`
                };
                data[`option1${option.id}`] = {
                    text : "is greater than",
                    isOption : false
                };
                data["id"] = "sigt";
                break;
            default :
                break;
        }
        props.addRule(data);
    }

    const renderOptions = () =>{
        let elements = [];
        options.map((option)=>{
            elements.push( <li id={option.id} onClick={_=>{optionClickHandler(option)}}>{option.name}</li>);
        });

        return elements;
    }

    const showDropdown = () =>{
        setEnableOption(!enableOption);
    };

    return (
        <div>
            <div className="dropdown-header" onClick={showDropdown}><span>{options.find(u=>{return u.id === props.id}).name}</span></div>
            <ul className={enableOption ? "option-wrapper" : "option-wrapper hide"}>
                {
                    renderOptions()
                }
            </ul>
        </div>
        
    );
}

export default MainOption;
