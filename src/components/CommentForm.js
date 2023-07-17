//окно редактирования; кнопка сохранить не прописана и не работает
//когда нажимаю на проверить кодБ а затем на кнопку редактирования
//в консоли дважды высвечивается редактируемый объект
import "./styles/CommentForm.css";
import CloseIcon from '@mui/icons-material/Close';
import { Component, useState } from 'react';


export class CommentForm extends Component {
    
    state ={
        
        blockName: this.props.selectBlock.name,
        blockComment: this.props.selectBlock.comment
    }
    
    //управление блоками
    handleBlockNameChange = e =>{
    this.setState({
        blockName: e.target.value
    })
    }

    handleBlockCommentChange = e =>{
    this.setState({
        blockComment: e.target.value
    })
    }

    //закрытие формы с помощью кнопки Escape
    handleEscape = (e) => {
        if (e.key === 'Escape') {
            this.props.handleHideEditDevice()
        }}
    
    componentDidMount() {
        window.addEventListener('keyup', this.handleEscape)
        }
    
    componentWillUnmount() {
        window.removeEventListener('keyup', this.handleEscape)
        }
    
    //создание блока устройств
    editThisBlock = () => {
        const block = {
            id: this.props.blockArr.length,
            name: this.state.blockName,
            comment: this.state.blockComment,
        }
        this.props.editBlock(block)
        this.props.handleHideEditDevice()
    }
    //форма
    render(){
    const handleHideEditDevice = this.props.handleHideEditDevice
    return(
        <>
        <form action="" className="editDevice">
                <div>
                <button onClick={handleHideEditDevice} tipe="button"><CloseIcon /></button>
                </div> 
                <div>Редактирование устройства</div>
                <div>
                    <input tipe="text" 
                           name="title"
                           value={this.state.blockName} 
                           onChange={this.handleBlockNameChange}/>
                </div>
                <div>
                    <textarea name="comment"
                              value={this.state.blockComment}
                              onChange={this.handleBlockCommentChange}/>
                </div>
                <div>
                    <button onClick={this.editThisBlock} tipe="button">Сохранить изменения</button>
                </div> 
            </form> 
            <div className="overlay"></div>
        </>
    )
}}
export default CommentForm