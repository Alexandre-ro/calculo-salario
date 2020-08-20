import React, { Component } from 'react';
import InputFullSalary from './components/InputFullSalary';
import { calculateSalaryFrom } from './helpers/salary';
import InputReadOnly from './components/InputReadOnly';
import ProportionBar from './components/ProportionBar';


//Colors
const COLOR_INSS       = '#d63031';
const COLOR_IRPF       = '#ff7675';
const COLOR_NET_SALARY = '#0984e3';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      fullSalary: 1000
    }
  }

  handleFullSalaryChange = (newValue) =>{
      this.setState({
        fullSalary: newValue
      });

  }
  
  render() {
    const {fullSalary} = this.state;
    const salaryObject = calculateSalaryFrom(fullSalary);
    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
      percentINSS,
      percentIRPF,
      percentNetSalary       
    } =  salaryObject;

    return(
      <div className="container">
          <h5>Calculos com salário</h5>
          <div className ="row">
            <InputFullSalary currentValue   = { fullSalary }
                             onSalaryChange = {this.handleFullSalaryChange} />
          </div>

          <div className = "row">
            <InputReadOnly label = "Base INSS" value = {baseINSS }  />
            <InputReadOnly label = "Desconto INSS" value = {discountINSS } percentage = {percentINSS} color={ COLOR_INSS }  />
            <InputReadOnly label = "Base IRPF" value = {baseIRPF }  />
            <InputReadOnly label = "Desconto IRPF" value = {discountIRPF } percentage = {percentIRPF} color = {COLOR_IRPF}  />
            <InputReadOnly label = "Salário Liquido" value = {netSalary } percentage = {percentNetSalary} color = {COLOR_NET_SALARY}  />
          </div>

          <ProportionBar 
          inss           = {percentINSS} 
          irpf           = {percentIRPF} 
          netSalary      = {percentNetSalary} 
          colorINSS      = {COLOR_INSS}
          colorIRPF      = {COLOR_IRPF}
          colorNetSalary = {COLOR_NET_SALARY}
          />
      </div>
    );
  }
}
