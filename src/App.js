import React, {Component, useState} from 'react';
import _ from 'lodash';
import Bookings from "./components/Bookings";
import Meals from "./components/Meals";
import Error from "./components/Error";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {currentScreen: "bookings", clients: {}}
    }

    handleViewMeals() {
        this.currentScreen = "meals";
    }

    bookThis(clients) {
        _.each(clients, () => {

        });
    }

    render() {
        return (
            <div className="container-fluid">
                <center>
                    <h2>Hacker Hostel</h2>
                </center>
                <AppContainer/>
            </div>);
    }
}

// const AppRouter = () => {
//     return (
//         <Router>
//             <Switch>
//                 <Bookings path="/bookings" exact component={Bookings}/>
//                 <Bookings path="/meals" exact component={Meals}/>
//                 <Redirect from="*" to="/bookings"/>
//             </Switch>
//         </Router>
//     );
// };

const AppContainer = (props) => {

    const [newHackers, setNewHackers] = useState([]);
    const [notAddedHackersNames, setNotAddedHackersNames] = useState([]);

    const handleGetMealsSchedule = (hackers, notAddedHNames) => {
        setNewHackers(hackers);
        setNotAddedHackersNames(notAddedHNames);
    };

    return (
        <div className="container">
            <Bookings handleGetMealsSchedule={handleGetMealsSchedule}/>
            <Error notAddedHackersNames={notAddedHackersNames}/>
            <Meals hackers={newHackers}/>
        </div>
    )
};


export default App;
