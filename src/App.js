import './App.css';
import Option from './Option';
import React from 'react';
import MainOption from './MainOption';

const App = () => {

  const [showAddRule,setShowAddRule] = React.useState(false);
  const [rule,setRule] = React.useState({});

  const updateExpression = (expressionId,optionId,targetId) =>{
    let dataObj = Object.assign({},rule);
    dataObj[expressionId][optionId]["optionId"] = targetId;
    dataObj[expressionId][optionId]["default"] = targetId === "type1" ? "input" : "currency";
    setRule(dataObj);
    setRule(dataObj);
  }

  const addRule = (data) =>{
    let dataObj = Object.assign({},rule);
    dataObj[data.id] = data;
    setRule(dataObj);
  };

  const renderExpresiion = (obj) =>{
    let ele = [];
    Object.keys(obj).map((label)=>{
      let prop = obj[label];
      if(prop.isOption){
        ele.push(
          <div className="option-display">
            {
                <Option id={prop.default} updateExpression={updateExpression} label={prop.parent} type={prop.optionId} expressionId={obj.id}/>
            }
          </div>
        )
      }else{
        ele.push(
          <div className="text-display">
            {prop.text}
          </div>
        );
      }
    })
    return ele;
  }

  const renderRules = () =>{
    let rules = [];
    Object.keys(rule).map((key)=>{
      let obj = rule[key];
      rules.push(
        <React.Fragment>
          {
            rule.length > 1 && rule.indexOf(obj) > 0 ? <div>AND</div> : null
          }
          {
            renderExpresiion(obj)
          }
       </React.Fragment>
      )
    });

    return rules;
  }

  const showRuleDropdown = () =>{
    setShowAddRule(!showAddRule);
  }

  return (
    <div className="App">
      <button onClick={showRuleDropdown}>Add Rule</button>
      {
        showAddRule ? <MainOption id="siets" addRule={addRule}/> : null
      }
      {
        renderRules()
      }
    </div>
  );
}

export default App;
