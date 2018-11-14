import React, {Component} from 'react'
import axios from 'axios'
import xml2json from 'xml2js'
import Layout from './layout'


export default class extends Component {
  state = {
    jsonData:[],
    error:null
  }
  componentWillMount(){
    const apiKey = this.props.apikey;
    var config = {headers: {"X-Requested-With" : "XMLHttpRequest"}};
    axios.get("https://cors-anywhere.herokuapp.com/http://www.goodreads.com/review/list/39704220.xml?key="+apiKey+"&v=2", config)
    .then(response =>{
      let data;
      xml2json.parseString(response.data, function (err, result) {
        data = result.GoodreadsResponse.reviews[0].review
      });
      this.setState({jsonData: data});
    })
    .catch(error =>{
      this.setState({error:error})
    });
  }

  getRating(val){
    if(val == "1"){
      return '✰'
    } else if(val == "2"){
      return '✰✰'
    } else if(val == "3"){
      return '✰✰✰'
    } else if(val == "4"){
      return '✰✰✰✰'
    } else if(val == "5"){
      return '✰✰✰✰✰'
    } else {
      return 'Not rated yet'
    }
  }

  getFormattedDate(unformattedDate){
    return !unformattedDate.isNan ? new Date(unformattedDate).toDateString() : 'No Date';
  }

  render() {
    const layout = this.state.jsonData.map((v,k)=>{
      return <Layout 
                key={k} 
                name={v.book[0].title} 
                cover={v.book[0].image_url}
                url={v.book[0].link}
                started={this.getFormattedDate(v.started_at)}
                rating={this.getRating(v.rating)}/>
    })

    return(
      <div>
        {layout}
      </div>
    )
  }
}
