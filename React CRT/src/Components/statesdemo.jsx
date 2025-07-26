import React ,{use} from 'react';
import { useState } from 'react';

function Demo(){

    const[friends, TotalFriends] = useState(98)

    return(

        <div>
            <h1>Adari Samuel Prasad</h1>
            <h3>No. of friends:{friends}</h3>
            <button onClick={()=> TotalFriends(friends+1)}>Friend Came</button>
            <button onClick={()=> TotalFriends(friends-1)}>Friend Left</button>
        </div>

    )
} export default Demo