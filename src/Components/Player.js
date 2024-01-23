import Card from 'react-bootstrap/Card';


function Player(props) {
    var T=(props.color==='none')?{backgroundColor:'red'}:{backgroundColor:'green'}
    console.log(T)
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.el.photoLink}/>
      <Card.Body>
        <Card.Title>{props.el.name}</Card.Title>
        <Card.Text >
          He is from {props.el.nationality} and he plays in {props.el.team} and his number is {props.el.jerseyNumber}
          his age is  {props.el.age}
        </Card.Text>
      </Card.Body>
      <button style={T}>
  submit
</button>

    </Card>
    
  );
}

export default Player;
Player.defaultProps = {
    color: 'none'
  };