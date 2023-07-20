//кнопка удаления и редактирования
//import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
//import EditIcon from '@mui/icons-material/Edit';


import imgDelete from '../img/trash.svg';
import imgEdit from '../img/gear.svg';

const ButtonsDevice = ({
    key,
    name,
    comment,
    deleteBlock,
    handleShowCurrentDevice,
    //handleHideCurrentDevice,
    //handleShowEditDevice,
    handleSelect,
    //editBlock
}) => {

    // const Edit=() => {
    //     // editBlock();
    //     handleSelect();
    //     handleShowEditDevice();  
    // }

    const currentDevice = () => {
        handleSelect();
        handleShowCurrentDevice();
    }

    return (
        // Всё окно устройства это кнопка currentDevice
       //<div> 
        <button onClick={currentDevice} className='deviceBox activeDeviceBox' style={{width: "100%"}}>
            {/*!!!! Тут должен показываться айди как номер устройства, но оно не работает :(*/}
           <p className='rightAlign deviceNumber'>Устройство №{key}</p>
            {/* Название */}
            <h1>{name}</h1>
            {/* Описание */}
            <p>{comment}</p>

            <p>Широта 11.1111</p>
            <p>Долгота 11.1111</p>
            <div className='rightAlign'>
                <div className='buttonE'>
                    <img src={imgEdit} alt="Edit" width={25} />
                </div>
                {/* !!! Беда с функцией удаления - при удалении currentDevice ставится на это удалённое устройство, поэтому когда сюда тыкаещь и подтвержаешь удаление, это устройство выбирается в правом меню, хотя оно было удалено */}
                <button className='buttonD' onClick={deleteBlock}>
                    <img src={imgDelete} alt="Delete" width={25} /></button>
                </div>
        </button>
    )
}
export default ButtonsDevice