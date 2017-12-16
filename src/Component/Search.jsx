

//--  Sector Search  -->
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data:{},
      palabra : ""
    }
  }
  render(){
    let aux = this.props.data
    if (aux.results === undefined) 
      aux = (<p>No se encontro</p>)
    else {
      aux = aux.results.map((e) =>{
        return(
          <div className="Movi" onClick={(e)=>{this.props.Click(e.id)}}> 
            <img src={"https://image.tmdb.org/t/p/w500" + e.poster_path} alt="cover"/>
            <p>{e.title}</p>
          </div>
        )
      })
    }
    return (
      <section className={"Search "+this.props.active}>
        <main id="Search_Box">
          { aux }
        </main>
      </section>
    )
  }
};

export default Search;