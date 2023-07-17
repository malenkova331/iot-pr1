//кнопка удаления и редактирования
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
const ButtonsDevice =({
    name,
    comment,
    deleteBlock,
    handleShowEditDevice,
    handleSelect,
    editBlock
}) => {
    
    const Edit=() => {
        editBlock();
        handleSelect();
        handleShowEditDevice();  
    }

    return (
        <div className="text">
            <div className="content">
                <h2>{name}</h2>
                <h3>{comment}</h3>
            </div>
            <button onClick={Edit}>
                <EditIcon />
            </button>
            <button onClick={deleteBlock}>
                <DeleteForeverIcon />
            </button>
        </div>
    )
}
export default ButtonsDevice