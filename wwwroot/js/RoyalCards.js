
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { MuiThemeProvider, getMuiTheme, darkBaseTheme } from 'material-ui/styles';
import FlatButton from 'material-ui/FlatButton';
import { GridList, GridTile } from 'material-ui/GridList';


injectTapEventPlugin();


class Get8Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ACardsNumber: props.ACardsNumber, BCardsNumber: props.BCardsNumber };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            ACardsNumber: RandomCardsNumber(),
            BCardsNumber: RandomCardsNumber()
        }));
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div>
                    <div>
                        <FlatButton label="Get Cards" primary={true} onClick={this.handleClick} />
                    </div>

                    <ImaInfo Acards={this.state.ACardsNumber} Bcards={this.state.BCardsNumber} />
                </div>
            </MuiThemeProvider>
        );
    }
}

function ImaInfo(prop) {

    var A = [
        {
            key: 1,
            img: 'http://triblebackstage.azurewebsites.net/images/Cards/' + prop.Acards[0] + '.png'
        },
        {
            key: 2,
            img: 'http://triblebackstage.azurewebsites.net/images/Cards/' + prop.Acards[1] + '.png'
        },
        {
            key: 3,
            img: 'http://triblebackstage.azurewebsites.net/images/Cards/' + prop.Acards[2] + '.png'
        },
        {
            key: 4,
            img: 'http://triblebackstage.azurewebsites.net/images/Cards/' + prop.Acards[3] + '.png'
        },
        {
            key: 5,
            img: 'http://triblebackstage.azurewebsites.net/images/Cards/' + prop.Acards[4] + '.png'
        },
        {
            key: 6,
            img: 'http://triblebackstage.azurewebsites.net/images/Cards/' + prop.Acards[5] + '.png'
        },
        {
            key: 7,
            img: 'http://triblebackstage.azurewebsites.net/images/Cards/' + prop.Acards[6] + '.png'
        },
        {
            key: 8,
            img: 'http://triblebackstage.azurewebsites.net/images/Cards/' + prop.Acards[7] + '.png'
        }
    ];

    var B = [
        {
            key: 1,
            img: 'http://triblebackstage.azurewebsites.net/images/Cards/' + prop.Bcards[0] + '.png'
        },
        {
            key: 2,
            img: 'http://triblebackstage.azurewebsites.net/images/Cards/' + prop.Bcards[1] + '.png'
        },
        {
            key: 3,
            img: 'http://triblebackstage.azurewebsites.net/images/Cards/' + prop.Bcards[2] + '.png'
        },
        {
            key: 4,
            img: 'http://triblebackstage.azurewebsites.net/images/Cards/' + prop.Bcards[3] + '.png'
        },
        {
            key: 5,
            img: 'http://triblebackstage.azurewebsites.net/images/Cards/' + prop.Bcards[4] + '.png'
        },
        {
            key: 6,
            img: 'http://triblebackstage.azurewebsites.net/images/Cards/' + prop.Bcards[5] + '.png'
        },
        {
            key: 7,
            img: 'http://triblebackstage.azurewebsites.net/images/Cards/' + prop.Bcards[6] + '.png'
        },
        {
            key: 8,
            img: 'http://triblebackstage.azurewebsites.net/images/Cards/' + prop.Bcards[7] + '.png'
        }
    ];

    return (
        <div>
            <p>ATeam :</p><CostAve randomNumber={prop.Acards} />
            <GridList cols={4}>
                {B.map((tile) => (
                   <img src={tile.img} />
                ))}
            </GridList>
            <p>BTeam :</p><CostAve randomNumber={prop.Bcards} />
            <GridList cols={4}>
                {B.map((tile) => (
                   <img src={tile.img} />
                ))}
            </GridList>
        </div>
    );
}

function CostAve(props) {
    var costAll = 0;
    var CostDictionary =
        { '1': 4, '2': 3, '3': 3, '4': 3, '5': 5, '6': 4, '7': 3, '8': 3, '9': 6, '10': 3, '11': 4, '12': 3, '13': 4, '14': 2, '15': 5, '16': 5, '17': 1, '18': 2, '19': 4, '20': 3, '21': 6, '22': 7, '23': 2, '24': 3, '25': 4, '26': 3, '27': 3, '28': 6, '29': 9, '30': 4, '31': 4, '32': 5, '33': 4, '34': 6, '35': 4, '36': 4, '37': 4, '38': 5, '39': 4, '40': 4, '41': 2, '42': 6, '43': 3, '44': 3, '45': 3, '46': 4, '47': 4, '48': 5, '49': 7, '50': 3, '51': 5, '52': 3, '53': 5, '54': 5, '55': 2, '56': 3, '57': 5, '58': 4, '59': 2, '60': 1, '61': 0, '62': 3, '63': 6, '64': 6, '65': 2, '66': 3, '67': 5, '68': 6, '69': 5, '70': 3, '71': 5, '72': 7, '73': 8, '74': 2 };

    props.randomNumber.forEach((item) => costAll += CostDictionary[item]);

    var costave = myRoundFixed((costAll / 8), 1);
    return (
        <p>
            平均耗水：{costave}
        </p>
    );
}

function myRoundFixed(value, len) {
    return value.toFixed(len);
}

function RandomCardsNumber() {
    var chooseNumber = new Array();
    for (var i = 0; i < 8; i++) {
        var randomNumber = randomIntFromInterval(1, 75);
        if (chooseNumber.length > 0) {
            while (chooseNumber.includes(randomNumber)) {
                randomNumber = randomIntFromInterval(1, 75);
            }
            chooseNumber.push(randomNumber);
        }
        else {
            chooseNumber.push(randomNumber);
        }
    }
    return chooseNumber;
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

ReactDOM.render(
    <Get8Cards ACardsNumber={RandomCardsNumber()} BCardsNumber={RandomCardsNumber()} />,
    document.getElementById('root')
);