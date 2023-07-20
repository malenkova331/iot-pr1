import { Component } from "react";
import CloseIcon from '@mui/icons-material/Close';

export class CurrentDevice extends Component {

    state = {
        blockName: this.props.selectBlock.name,
        blockComment: this.props.selectBlock.comment
    }

    render() {
        const handleHideCurrentDevice = this.props.handleHideCurrentDevice
        return (
            // Блок с информацией об устройстве в правом меню
            <div>
                <button onClick={handleHideCurrentDevice}><CloseIcon /></button>
                <h1>
                    {this.state.blockName}
                </h1>
                <h2>
                    {this.state.blockComment}
                </h2>

            </div>
        )
    }

}
export default CurrentDevice;