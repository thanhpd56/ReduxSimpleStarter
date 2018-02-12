import React from 'react';
import {connect} from 'react-redux';
import { Sparklines, SparklinesBars } from 'react-sparklines';

class WeatherList extends React.Component {
    constructor(props){
        super(props);
        this.renderWeather = this.renderWeather.bind(this);
    }

    render(){
        return (
            <table className={"table table-hover"}>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.weather.map((cityData) => this.renderWeather(cityData))}
                </tbody>
            </table>);

    }

    renderWeather(cityData) {
        const cityName = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp)
        return(
            <tr key={cityName}>
                <td>{cityName}</td>
                <td>
                    <ReactSparklines height={120} data={temps} >
                    </ReactSparklines>

                </td>
            </tr>
        );
    }
}

function mapStateToProps({weather}){
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);