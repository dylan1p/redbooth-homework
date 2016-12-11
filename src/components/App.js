import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state){
  return{
    tasks: state.tasks,
    tasklists: state.tasklists
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}

//Pass all dispatchers and state to main component
const App = connect(mapStateToProps, mapDispatchToProps)(Main);


export default App;


