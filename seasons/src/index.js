import React from 'react';
import reactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

    state = { lat: null, errorMessage:'' };

    //loaded after component rendered
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                //call setState then when state updated component auto re-render
                this.setState({lat: position.coords.latitude});
            },
            (err) => {
                this.setState({errorMessage: err.message});
            }
        );
    }

    renderContent() {
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>;
        }
        
        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat} />;
        }

        return <Spinner message="Please accept location request"/>;
    }

    render(){
       return(
           <div className="border red">
               {this.renderContent()}
           </div>
       )
    }
}

reactDom.render(<App/>, document.getElementById('root'));