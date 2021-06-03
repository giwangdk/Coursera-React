import React from 'react';
import {Card, CardImg,  CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';



    
    function  RenderDish({dish}) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }


function RenderComments({comments}){
    if(comments == null){
        return (<div></div>)
    }
           const cmt = comments.map((comment)=>{
                return(
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>--{comment.author}, {new Intl.DateTimeFormat('en-Us',{year:'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>

                    </li>
                )
     
        })
        return(
            <div className="col-12 col-md-6 m-1">
                <h4>Comments</h4>
                <ul>
                
            {cmt}
                </ul>
            </div>
        )
}

    const DishDetail = (props)=>{

        if(props.dish == null){
            return (<div></div>)
        }

        return (
            <div class="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/home'>Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Link to='/menu'>Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            {props.dish.name}
                        </BreadcrumbItem>
                    </Breadcrumb>

                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr></hr>
                    </div>
                </div>
                    <div className="row">
                        <div className='col-12 col-lg-6'>
                        <RenderDish dish = {props.dish} />
                        </div>
                        <div className='col-12 col-lg-6'>
                        
                        <RenderComments  comments = {props.comments} />
                        </div>
                    </div>
                </div>
        );
    }


export default DishDetail;