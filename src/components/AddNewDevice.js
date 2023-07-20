//форма добавления устройства
import CloseIcon from '@mui/icons-material/Close';
import { Component } from 'react';

export class AddNewDevice extends Component {
    state = {
        blockName: '',
        blockComment: ''
    }
    //управление блоками
    handleBlockNameChange = e => {
        this.setState({
            blockName: e.target.value
        })
    }

    handleBlockCommentChange = e => {
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
        }
    }

    componentDidMount() {
        window.addEventListener('keyup', this.handleEscape)
    }

    componentWillUnmount() {
        window.removeEventListener('keyup', this.handleEscape)
    }

    //форма
    render() {
        const handleHideAddDevice = this.props.handleHideAddDevice
        return (
            // Окно появляется поверх содержимого страницы
            <div id="overlay">
                <div id="modal">
                    <h2>Новое устройство</h2>
                    {/* Форма для добавления */}
                    <form>
                        <input placeholder='Название устройства:' tipe="text"
                            name="title"
                            value={this.state.blockName}
                            onChange={this.handleBlockNameChange} />

                        <textarea placeholder='Описание:' name="comment"
                            value={this.state.blockComment}
                            onChange={this.handleBlockCommentChange} />

                        {/* Кнопка подтверждения */}
                        <button onClick={this.createBlock} type="button">Добавить устройство</button>
                    </form>

                    {/* Кнопка закрыть */}
                    <button className='closeButton' onClick={handleHideAddDevice}><CloseIcon /></button>
                </div>
            </div>
        )
    }
}
export default AddNewDevice;