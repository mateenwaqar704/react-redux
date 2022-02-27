import React, { Component } from 'react'

export class count1 extends Component {

    constructor(props) {

        super(props);
        this.state = {


            data :[
                {
                    name: "Mateen",
                    age: 27,
                    mail: "mateenwaqar30@gmail.com"

                },


                {
                    name: "Sami",
                    age: 26,
                    mail: "samiwaqar30@gmail.com"

                },


                {
                    name: "murshad",
                    age: 28,
                    mail: "murshad@gmail.com"

                },



                {
                    name: "usma",
                    age: 50,
                    mail: "Usman30@gmail.com"

                }
            ]




        };
    }

    render() {
        return (
            <>
                <div>
                    <h1>Mateen {this.props.sami}</h1>

                    {this.state.data.map((value, i) => {




return(  


<table className="table-tr" >

<tr>
        <th>Name </th>     

        <th>Age </th>

        <th>Mail </th>

</tr>

        <td>{value.name} </td>

        <td>{value.age} </td>

        <td>{value.mail} </td>





</table>
)



    

  




                    })}

                </div>
            </>
        )
    }
}

export default count1;
