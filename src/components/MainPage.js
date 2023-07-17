//Form submission canceled because the form is not connected
//данная надпись высвечивается в консоли при нажимании кнопки редактирования
//и кнопки +
import './styles/AddDevice.css';
import AddNewDevice from './AddNewDevice';
import { Component } from 'react';
import {devices} from './data'
import ButtonsDevice from './ButtonsDevice';
import { CommentForm } from './CommentForm';

export class MainPage extends Component {
    
    //для работы кнопки + и формы
    state=
    {
        ShowAddDevice:false,
        ShowEditDevice:false,
        blockArr:  JSON.parse(localStorage.getItem('datas')) || devices, 
        selectBlock: {}
    }

    // let blockArr = Object.assign([], arr);

    // blockArr = this.devices.map()

    datas = this.state.blockArr.map((item)=>
    {
        return(
            <ButtonsDevice
            key={item.id}
            name={item.name}
            comment={item.comment}
            />
       )
    })
    key = this.state.blockArr.map((item)=>
    {
        return(
            <ButtonsDevice
            key={item.id}
            />
       )
    })
    comment = this.state.blockArr.map((item)=>
    {
        return(
            <ButtonsDevice
            comment ={item.comment}
            />
       )
    })
    name= this.state.blockArr.map((item)=>
    {
        return(
            <ButtonsDevice
            name={item.name}
            />
       )
    })

    //методы показывания и закрытия формы создания нового устройства
    handleShowAddDevice = () =>{
        this.setState ({
            ShowAddDevice:true
   })
    }

    handleHideAddDevice = () =>{
    this.setState ({
     ShowAddDevice:false
    })
    }

    //методы показывания и закрытия формы редактирования
    handleShowEditDevice = () =>{
        this.setState ({
         ShowEditDevice:true
        })
    }

    handleHideEditDevice = () =>{
        this.setState ({
        ShowEditDevice:false
        })
    }


    //удаление блока
    deleteBlock = pos => {
    if(window.confirm(`Вы уверены, что хотите удалить ${this.state.blockArr[pos].name}?`)){
    const temp = [...this.state.blockArr];
    temp.splice(pos,1);
    this.setState({
    blockArr: temp
    })
    localStorage.setItem('datas',JSON.stringify(temp))
    }  
    }

    //добавление нового блока
    addNewBlock = (datas) => {
        const temp = [...this.state.blockArr];
        temp.push(datas);
        this.setState({
            blockArr: temp
        })

        localStorage.setItem('datas',JSON.stringify(temp))
    }

    editBlock = ({name,comment}) => {
        const temp = [...this.state.blockArr.slice()];
        temp.name = name;
        temp.comment = comment;
        this.setState({
            blockArr: temp
        })

        localStorage.setItem('datas',JSON.stringify(temp))
    }

    //для окна редактирования
    handleSelect = (datas) => {
       this.setState({
        selectBlock: datas
       }) 
    }

    //main
    render() {
        const blockArr = devices

        console.log(this.state.selectBlock)
    const datas = this.state.blockArr.map((item,pos)=>{
        return(
            <ButtonsDevice
            key={item.id}
            name={item.name}
            comment={item.comment}
            deleteBlock={()=>this.deleteBlock(pos)}
            editBlock={()=>this.editBlock(item)}
            handleShowEditDevice={this.handleShowEditDevice}
            handleHideEditDevice={this.handleHideEditDevice}
            handleSelect={()=>this.handleSelect(item)}
            />
       )
       
    });
    delete localStorage.getItem('datas')     
    return (
        <h1>
            <div className = "tst">{datas}</div>
            {
                this.state.ShowAddDevice ? (
                <AddNewDevice 
                    blockArr={this.state.blockArr} 
                    handleHideAddDevice={this.handleHideAddDevice}
                    addNewBlock={this.addNewBlock}
                />
                ) :null
            }
            {
               this.state.ShowEditDevice && (
                <CommentForm 
                    handleHideEditDevice={this.handleHideEditDevice}
                    blockArr={this.state.blockArr} 
                    selectBlock={this.state.selectBlock}
                    editBlock={this.editBlock}
                />)
            }
            <>
                <button className="btn" onClick={this.handleShowAddDevice}>+</button>
            </>
        </h1>
    )
    }
}
export default MainPage