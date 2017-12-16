import React, { Component } from 'react';

import Load from './Component/Load';
import Main from './Component/Main';

import './App.css';
import './css/body.css';


const request = require('superagent');


//componentWillReceiveProps(id) cundo actualise 
class Search extends Component {
  render(){
    if (this.props.data.results !== undefined){
      console.log("entro")
      console.log(this.props.data)
      if(this.props.data.total_results === 1){
        ()=>{this.props.Click(this.props.data.results[0].id)}
      }else{
        let ret = this.props.data.results.map((e) =>{
          return (
            <div className="Movi" key={e.id} onClick={()=>{this.props.Click(e.id)}}> 
              <img src={"https://image.tmdb.org/t/p/w500" + e.poster_path} alt="cover"/>
              <p>{e.title}</p>
            </div>
          );
        })
        return (
          <section id="Search" className={"Search " + this.props.active}>
            <main id="Search_Box">
              {ret}
            </main>
            <footer>
              <p>
                page <span>{this.props.data.page}</span> 
                de <span>{this.props.data.total_pages}</span>
              </p>
              <p>
                resultados <span>{this.props.data.total_results}</span>
              </p>
            </footer>
          </section>
        )
      }
    }
    else return <p></p>
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      load    : true,
      Search : "",
      inputSearch : "",
      id_film: 0,
      data: {},
      catalogo:[]
    }
  }
  Load(e) {
    console.log("peli " + e)
    this.requestGet(e)
		this.setState({ id_film: e, catalogo: [] });
	}
  ReLoad() {
		this.setState({ load: false });
  }
  
  handleKeyPress = (e) => {
    if (e.key === 'Enter'){
      this.setState({ load: true });
      request
      .get("https://api.themoviedb.org/3/search/movie")
      .query({ api_key: 'd5e31194a6d9e671fc8dc7261f58edc2', query: e.target.value})
      .end((err, res) => {
        console.log(err)
        if (res !== null && res.statusText !== null && res.statusText !== "ok")
          this.setState({ catalogo: res.body,Search : 'active' } , this.ReLoad() );
      });
    } 
  }
  componentWillMount() {
  }
  componentDidMount(){
    this.Load(354912)
  }
  requestGet(e){
    this.setState({ load: true });
    setTimeout(
    request
      .get("https://api.themoviedb.org/3/movie/"+ e)
      .query({ api_key: 'd5e31194a6d9e671fc8dc7261f58edc2' })
      .end((err, res) => {
        if (res !== undefined && res.statusText !== "ok")
          this.setState({ data: res.body },
           this.ReLoad() 
          );

      }),500);
  }
  render() {

    //aux.push();

    return (
      <div>
        <nav id={"Nav"} className="ActiveTop">
          <div className="Logo">{"AnimexSeries"}</div>
          <div className="header">
            <input type="Text" className={"Search_input " + this.state.inputSearch }  onKeyPress={this.handleKeyPress}/>
            <a onClick={()=>{this.setState({ inputSearch: "active" })}} className="material-icons">search</a>
          </div>
        </nav>
        <Load Title={"AnimexSeries"} active={ this.state.load ? "active" : "" }/>
        <Main id={this.state.id_film} data={this.state.data} />
        <Search Click={(e)=>{this.Load(e)}} data={this.state.catalogo} active={this.state.Search}/>
    
      </div>
    );
  }
}

export default App;