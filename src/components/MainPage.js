import './styles/AddDevice.css';
import './styles/MainPage.css'
import AddNewDevice from './AddNewDevice';
import { Component } from 'react';
import ButtonsDevice from './ButtonsDevice';
import { Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
// import { YMaps, Map } from '@pbe/react-yandex-maps';
import imgDelete from '../img/trash.svg';
import imgEdit from '../img/gear.svg';
Chart.register(...registerables);
export class MainPage extends Component {
    state =
        {
            ShowAddDevice: false,
            ShowCurrentDevice: false,
            blockArr: [{
                id: 1,
                name: 'Устройство с датчиком тумпературы',
                comment: 'Очень важный коментарий'
            },
            {
                id: 2,
                name: 'Устройство с датчиком влажности',
                comment: 'Очень важный коментарий'
            },],
            selectBlock: [{
                id: 0,
                name: '',
                comment: ''
            }]
        }

    datas = this.state.blockArr.map((item) => {
        return (
            <ButtonsDevice
                key={item.id}
                name={item.name}
                comment={item.comment}
            />
        )
    })

    handleShowCurrentDevice = () => {
        this.setState({
            ShowCurrentDevice: true
        })
    }

    handleShowAddDevice = () => {
        this.setState({
            ShowAddDevice: true
        })
    }

    handleHideAddDevice = () => {
        this.setState({
            ShowAddDevice: false
        })
    }

    deleteBlock = pos => {
        if (window.confirm(`Вы уверены, что хотите удалить ${this.state.blockArr[pos].name}?`)) {
            const temp = [...this.state.blockArr];
            temp.splice(pos, 1);
            this.setState({
                blockArr: temp
            })
            localStorage.setItem('datas', JSON.stringify(temp))
        }
    }

    handleSelect = (datas) => {
        this.setState({
            selectBlock: datas
        })

    }

    addNewBlock = (datas) => {
        const temp = [...this.state.blockArr];
        temp.push(datas);
        this.setState({
            blockArr: temp
        })

        localStorage.setItem('datas', JSON.stringify(temp))
    }
render() {
        const data = [
            { time: '10:00', sensor1: 'Значение 1', sensor2: 'Значение 2', sensor3: 'Значение 3' },
            { time: '11:00', sensor1: 'Значение 4', sensor2: 'Значение 5', sensor3: 'Значение 6' },
            { time: '11:00', sensor1: 'Значение 4', sensor2: 'Значениee 5', sensor3: 'Значение 6' },
            { time: '11:00', sensor1: 'Значение 4', sensor2: 'Значение 5', sensor3: 'Значение 6' },
            { time: '11:00', sensor1: 'Значение 4', sensor2: 'Значение 5', sensor3: 'Значенeeeeeeeeeeeeeeeeeeeие 6' },
            { time: '11:00', sensor1: 'Значение 4', sensor2: 'Значение 5', sensor3: 'Значение 6' },

            { time: '11:00', sensor1: 'Значение 4', sensor2: 'Значение 5', sensor3: 'Значение 6' },
            { time: '11:00', sensor1: 'Значение 4', sensor2: 'Значение 5', sensor3: 'Значение 6' },
            { time: '11:00', sensor1: 'Значение 4', sensor2: 'Значение 5', sensor3: 'Значение 6' },
            { time: '11:00', sensor1: 'Значение 4', sensor2: 'Значение 5', sensor3: 'Значение 6' },
            // Добавьте другие данные сюда
        ];
        const lineChartData = {
            labels: ["13:35", "15:12", "17:45"],
            datasets: [
                {
                    data: [26, 25, 23],
                    label: "Температура внутри",
                    borderColor: "#3333ff",
                    fill: true,
                    lineTension: 0.5
                },
                {
                    data: [30, 28, 20],
                    label: "Температура Снаружи",
                    borderColor: "#ff3333",
                    backgroundColor: "rgba(255, 0, 0, 0.5)",
                    fill: true,
                    lineTension: 0.5
                }
            ]
        };
        const datas = this.state.blockArr.map((item, pos) => {
            return (
                <ButtonsDevice
                    key={item.id}
                    name={item.name}
                    comment={item.comment}
                    deleteBlock={() => this.deleteBlock(pos)}
                    handleShowCurrentDevice={this.handleShowCurrentDevice}
                    handleSelect={() => this.handleSelect(item)}
                />
            )
        });
return (
            <div className='devices'>
                <div className='devicesMenu'>
                    <div style={{ width: "90%" }}>
                        {datas}
                    </div>
                    <button className="deviceBox" onClick={this.handleShowAddDevice}>
                        <p className='addDevice'>
                            +
                        </p>
                    </button>
                    {
                        this.state.ShowAddDevice ? (
                            <AddNewDevice
                                blockArr={this.state.blockArr}
                                handleHideAddDevice={this.handleHideAddDevice}
                                addNewBlock={this.addNewBlock}
                            />
                        ) : null
                    }
                </div>
                {
                    this.state.ShowCurrentDevice &&
                    (
                        <div className='devicesRight'>
                            <div className='roww'>
                                <div className='col flex1'>
                                    <div className='rightBox deviceDescription'>
                                        <p className='deviceNubmer rightAlign'>Устройство №{this.state.selectBlock.id}</p>
                                        <h1>{this.state.selectBlock.name} </h1>
                                        <p>
                                            {this.state.selectBlock.comment}
                                        </p>
                                        <p>
                                            Широта 11.1111
                                        </p>
                                        <p>
                                            Долгота 11.1111
                                        </p>
                                    </div>
                                    <div className='rightBox'>
                                        <h1>Датчики</h1>
                                        <div className='sensorsBox'>
                                            <div className='sensorsRow'>
                                                <div className='col flex1'>
                                                    <div className='deviceBox activeDeviceBox'>
                                                        <p className='rightAlign deviceNumber'>Датчик №1</p>
                                                        <h1>Датчик температуры</h1>
                                                        <p>Очень важный комментарий</p>
                                                        <div className='rightAlign'>
                                                            <div className='buttonE'>
                                                                <img src={imgEdit} alt="Edit" width={25} />
                                                            </div>
                                                            <div className='buttonD'>
                                                                <img src={imgDelete} alt="Delete" width={25} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col flex1'>
                                                    <div className='deviceBox'>
                                                        <p className='rightAlign deviceNumber'>Датчик №2</p>
                                                        <h1>Датчик температуры 2</h1>
                                                        <p>Очень важный комментарий</p>
                                                        <div className='rightAlign'>
                                                            <div className='buttonE'>
                                                                <img src={imgEdit} alt="Edit" width={25} />
                                                            </div>
                                                            <div className='buttonD'>
                                                                <img src={imgDelete} alt="Delete" width={25} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='sensorsRow'>
                                                <div className='col flex1'>
                                                    <div className='deviceBox'>
                                                        <p className='rightAlign deviceNumber'>Датчик №3</p>
                                                        <h1>Датчик влажности 1</h1>
                                                        <p>Очень важный комментарий</p>
                                                        <div className='rightAlign'>
                                                            <div className='buttonE'>
                                                                <img src={imgEdit} alt="Edit" width={25} />
                                                            </div>
                                                            <div className='buttonD'>
                                                                <img src={imgDelete} alt="Delete" width={25} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col flex1'>
                                                    <div className='deviceBox'>
                                                        <p className='rightAlign deviceNumber'>Датчик №4</p>
                                                        <h1>Датчик влажности 2</h1>
                                                        <p>Оооооооооооооооооооо оооооооооооооочень важный комментарий</p>
                                                        <div className='rightAlign'>
                                                            <div className='buttonE'>
                                                                <img src={imgEdit} alt="Edit" width={25} />
                                                            </div>
                                                            <div className='buttonD'>
                                                                <img src={imgDelete} alt="Delete" width={25} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                            <div className='sensorsRow'>
                                                <div className='col flex1'>
                                                    <div className='deviceBox'>
                                                        <p className='rightAlign deviceNumber'>Датчик №5</p>
                                                        <h1>Датчик милоты 1</h1>
                                                        <p>Очень важный комментарий</p>
                                                        <div className='rightAlign'>
                                                            <div className='buttonE'>
                                                                <img src={imgEdit} alt="Edit" width={25} />
                                                            </div>
                                                            <div className='buttonD'>
                                                                <img src={imgDelete} alt="Delete" width={25} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col flex1'>
                                                    <div className='deviceBox'>
                                                        <p className='addDevice addSensor'>+</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Блок с картой */}
                                <div className='rightBox mapBox col flex1'>
                                    {/* <YMaps>
                                        <Map width='100%' height='400px' defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
                                    </YMaps> */}
                                </div>
                            </div>

                            {/* Ряд таблицы и графика */}
                            <div className='roww'>
                                {/* Столбец с графиком */}
                                <div className='col flex1'>
                                    <div className='rightBox titleRightBox'>
                                        <h1>Датчик №1</h1>
                                    </div>

                                    <div className='rightBox'>
                                        {/* График строится по данным их переменной lineChartData */}
                                        <Line
                                            type="line"
                                            width={160}
                                            height={60}
                                            options={{
                                                title: {
                                                    display: true,
                                                    text: "COVID-19 Cases of Last 6 Months",
                                                    fontSize: 20
                                                },
                                                legend: {
                                                    display: true, //Is the legend shown?
                                                    position: "top" //Position of the legend.
                                                }
                                            }}
                                            data={lineChartData}
                                        />
                                    </div>
                                </div>

                                {/* Столбец с таблицей */}
                                <div className='col flex1 tableCol'>
                                    {/* Блок с выбором количества последних изменений */}
                                    <div className='rightBox titleRightBox'>
                                        <div className='roww kolvoBox'>
                                            <p>
                                                <label for="price">Количество последних показаний:</label>
                                            </p>
                                            <div>
                                                <input
                                                    className='kolvo'
                                                    type="number"
                                                    id="historyRangeInput"
                                                    value="1"
                                                    min="1"
                                                    max="100"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Блок с таблицей */}
                                    <div className='rightBox tableBox'>
                                        <div className=' tableContainer'>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>Время измерения</th>
                                                        <th>Датчик 1</th>
                                                        <th>Датчик 2</th>
                                                        <th>Датчик 3</th>
                                                    </tr>
                                                </thead>
                                                {/* Тут таблица заполняется данными из переменной data */}
                                                <tbody>
                                                    {data.map((row, index) => (
                                                        <tr key={index}>
                                                            <td>{row.time}</td>
                                                            <td>{row.sensor1}</td>
                                                            <td>{row.sensor2}</td>
                                                            <td>{row.sensor3}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                {/* Если устройство не выбранно выводится надпись */}
                {
                    !this.state.ShowCurrentDevice &&
                    (
                        <div className='deviceRightEmpty'>
                            <h1>
                                Выберете устройство
                            </h1>
                        </div>
                    )}
            </div>
        )
    }
}
export default MainPage