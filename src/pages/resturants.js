// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// export default  function Resturants() {
//     const [restaurant, setRestaurant] = useState([]);
    
//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//             console.log("api call");

//           // Make a GET request to the Strapi backend
//           const response = await axios.get('http://localhost:1337/api/resturants');
//             console.log(response.data);
//           // Assuming the response data is an array of restaurants
//           setRestaurant(response.data.data);
//         } catch (error) {
//           console.error('Error fetching data:', error);
//         }
//       };
  
//       // Call the fetch function
//       fetchData();
//     }, []);
//     console.log("data avi gayo:",restaurant)
//     return (
//         <div>
//           <h1>Restaurant List</h1>
//           <ul>
//             {restaurant.length > 0 && restaurant.map((res) => (
//                 <>
//               <li key={res?.id}>{res?.attributes?.Address}</li>
//               <li key={res?.id}>{res?.attributes?.Name}</li>
//                 </>
//             ))}
//           </ul>
//         </div>
//       );
    
// }
// import React, { useState, useEffect } from 'react';
// import { Table, Space } from 'antd';
// import axios from 'axios';

// const RestaurantList = () => {
//   const [restaurants, setRestaurants] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Make a GET request to the Strapi backend
//         const response = await axios.get('http://localhost:1337/api/resturants');
//         const attribs = response.data.data.map((res)=>{return res.attributes})
//         // Assuming the response data is an array of restaurants
//         setRestaurants(attribs);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     // Call the fetch function
//     fetchData();
//   }, []); // Empty dependency array ensures the effect runs only once, like componentDidMount

//   const columns = [
//     {
//       title: 'Name',
//       dataIndex: 'Name',
//       key: 'Name',
//     },
//     {
//     title: 'Address',
//       dataIndex: 'Address',
//       key: 'Address',
//     },
//     {
//         title: 'Phone_Number',
//           dataIndex: 'Phone_Number',
//           key: 'Phone_Number',
//         },
//     // Add more columns as needed
//     {
//       title: 'Action',
//       key: 'action',
//       render: (text, record) => (
//         <Space size="middle">
//           {/* Add actions, e.g., edit or delete */}
//           <a>Edit</a>
//           <a>Delete</a>
//         </Space>
//       ),
//     },
//   ];

//   return (
//     <div>
//       <h1>Restaurant List</h1>
//       <Table dataSource={restaurants} columns={columns} rowKey="id" />
//     </div>
//   );
// };

// export default RestaurantList;
import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from 'antd';
import axios from 'axios';

const Resturants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("in APIS");

        const response = await axios.get('http://localhost:1337/api/resturants?populate=*');
        console.log(response.data.data);

        setRestaurants(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };


    fetchData();
  }, []); 

  return (
    <div>
     <center> <h1>Restaurant List</h1></center>
      <Row gutter={16}>
        {restaurants.map((restaurant) => (
          <Col span={8} key={restaurant.id}>
            <Card hoverable title={restaurant.attributes.Name} style={{ marginBottom: '16px' , backgroundColor:'#A9A9A9' }}  >
              <p>Address: {restaurant.attributes.Address}</p>
              <p>Phone Number: {restaurant.attributes.Phone_Number}</p>
              <img height= "10%" width="100%"alt="example" src={`http://localhost:1337${restaurant.attributes.Display_Picture.data.attributes.url}`} />
            
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Resturants;
