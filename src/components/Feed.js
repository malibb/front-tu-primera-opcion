import React from "react";
import PostCard from "./PostCard";
import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';

const QUERY_POST = gql`
	query GETPOST{
		getTests{
			_id,
			,
			author{
				first_name,
				last_name
			}
		}
	}

`;

function Feed() {
	const { loading, errors, data  } = useQuery(QUERY_POST);

 if (errors) return <h2>{`Errores: ${errors}`}</h2>	
  return (
    <div  className="container">
      <div  className="row">
        <div  className="col-lg-8 col-md-10 mx-auto">
			{
			loading 
			? <h2>Cargando...</h2> 
			: 	
				(data.getPosts)
				? data.getPosts.map(post => (
					<PostCard 
						title={post.title} 
						author={`${post.author.first_name} ${post.author.last_name}` }
						id={post._id}
						key={post._id}
					/>
				))
				: <h1>Sin contenido</h1>
			}
          <div  className="clearfix">
			$ {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
            <a  className="btn btn-primary float-right" href="#">
              Más aplicaciones &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
