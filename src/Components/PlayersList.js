import Player from "./Player";
import Players from "./Players";


function PlayersList({styles}) {
    var T=Players
    var color='zzzz'
     return (
        <div style={styles}>
       {T.map((el)=><div style={{margin:'20px'}}> <Player el={el} color={color} /></div>)}
        </div>
    );
}
export default PlayersList