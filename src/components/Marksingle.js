import { Button, Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import React from 'react';


function Marksingle({name,city,email,image,id}) {
  return(
      <Button>
      <Card className="consultant-container">
          <img className='consultant-poster' src={image} alt={name}/>
          <CardContent>
              <div className="consultant-spec">
              <h3 style={{marginTop:"2%"}}>Name: {name}</h3>
              <h3 style={{marginTop:"2%"}}>City: {city}</h3>
              <h3 style={{marginTop:"2%"}}>Email: {email}</h3>
              </div>
          </CardContent>
      </Card>
      </Button>
  )
}

export default Marksingle;
