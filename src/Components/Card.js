import React from 'react'
import Avatar from '@mui/material/Avatar';



function Card({ item }) {
    function stringToColor(string) {
        let hash = 0;
        let i;
      
        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
          hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
      
        let color = '#';
      
        for (i = 0; i < 3; i += 1) {
          const value = (hash >> (i * 8)) & 0xff;
          color += `00${value.toString(16)}`.substr(-2);
        }
        /* eslint-enable no-bitwise */
      
        return color;
      }

    function stringAvatar(name) {
        // const name= item.first_name
        console.log(name)
        return {
          sx: {
            bgcolor: stringToColor(name),
          },
          children: `${name.split(' ')[0][0]}`,
        };
      }
    return (
            <div className="card">
                <div className="card-columns">
                <div class="card-header">
                <Avatar {...stringAvatar(item.first_name)} />
                </div>
                    <img src={item.avatar} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Name: {item.first_name}</h5>
                        <p className="card-text">Email:{item.email}</p>
                        {/* <a href="#" className ="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
            </div>
    )
}

export default Card
