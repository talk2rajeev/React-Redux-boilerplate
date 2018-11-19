import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestHelloWorld, requestApiData } from "../actions";

class Home extends React.Component {
  componentDidMount() {
      console.log('1. from Home compoennt requestHelloWorld called');
    //this.props.requestApiData();
    this.props.requestApiData();
  }

  person(x, i){
  return <div key={x.id.value}>
    <h1>
      {x.gender}
    </h1>
    <h1>
      {x.name.first}
    </h1>
    <h1>
      {x.name.last}
    </h1>
    <img src={x.picture.medium} />
  </div>;
  }
  
  render() {
    
        const results = this.props.helloWorld.results || [];
        console.log(results);
        return results.length
          ? <h1>
              {results.map(this.person)}
            </h1>
          : <h1>loading...</h1>;  
    
  }
}

const mapStateToProps = state => ({ helloWorld: state.helloWorld });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);