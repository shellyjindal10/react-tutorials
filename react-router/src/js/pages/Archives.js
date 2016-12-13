import React from 'react';
import Article from '../components/Article';

const title = 'Archives'
export default class Archives extends React.Component {
	 
  render() {
  	const { query } = this.props.location
  	const { params } = this.props
  	const { article } = params
  	const {date, filter} = query

    const Articles = [
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
      "Fake Article",
      "Partial Article",
      "American Article",
      "Mexican Article"
    ].map((title, i) => <Article key={i} title={title}/> );

    return(
    	 <div>
    	   {this.props.params.article ?
    	   	<h1>{title}({article})</h1> :
    	   	<h1>{title}</h1>
    	   }
    	   {date && filter  ?
    	   	<h4>Date : {date} Filter : {filter}</h4> :
    	   	 null
    	   }
         <div className="row">{Articles}</div>
      </div>
    );
  }
}
