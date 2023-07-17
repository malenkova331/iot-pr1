//форма добавления устройства
import CloseIcon from '@mui/icons-material/Close';
import { Component } from 'react';

export class AddNewDevice extends Component {
    state ={
        blockName: '',
        blockComment: ''
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
    //создание блока устройств
    createBlock = () => {
        const block = {
            id: this.props.blockArr.length + 1,
            name: this.state.blockName,
            comment: this.state.blockComment,
        }
        this.props.addNewBlock(block)
        this.props.handleHideAddDevice()
    }

    //закрытие формы с помощью кнопки Escape
    handleEscape = (e) => {
        if (e.key === 'Escape') {
            this.props.handleHideAddDevice()
        }}
    
    componentDidMount() {
        window.addEventListener('keyup', this.handleEscape)
        }
    
    componentWillUnmount() {
        window.removeEventListener('keyup', this.handleEscape)
        }

    //форма
    render(){
    const handleHideAddDevice = this.props.handleHideAddDevice
    return(
        <>
        <form action="" className="addDevice">
                <div>
                <button onClick={handleHideAddDevice} tipe="button"><CloseIcon /></button>
                </div> 
                <div className="title">Новое устройство</div>
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
                    <button onClick={this.createBlock} tipe="button">Добавить устройство</button>
                </div> 
            </form> 
            <div className="overlay"></div>
        </>
    )
}}
export default AddNewDevice