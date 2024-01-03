import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from 'antd';
import axios from 'axios';

const CategoryList = () => {
	const [category, setCategory] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				console.log('in APIS');
				const response = await axios.get(
					'http://localhost:1337/api/categories?populate=*'
				);


				console.log(response.data.data);
				setCategory(response.data.data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};


		fetchData();
	}, []); 

	return (
		<div>
			<center>
				{' '}
				<h1>Category List</h1>
			</center>
			<Row gutter={16}>
				{category.map((cat) => (
					<Col span={8} key={cat.id}>
						<Card
							hoverable
							title={cat.attributes.Name}
							style={{ marginBottom: '16px', backgroundColor: '#A9A9A9' }}
						>
							<img
								height="10%"
								width="100%"
								alt="example"
								src={`http://localhost:1337${cat.attributes.image.data.attributes.url}`}
							/>
						</Card>
					</Col>
				))}
			</Row>
		</div>
	);
};

export default CategoryList;
