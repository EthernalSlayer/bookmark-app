import React, { useContext, useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Context } from '../context/Context';

function Tag() {
	const {
		tags,
		actualTag,
		setActualTag,
		pictures,
		setFilteredPictures,
		videos,
		setFilteredVideos,
	} = useContext(Context);

	const handleTag = (e) => {
		setActualTag(e.target.innerHTML);
	};

	useEffect(() => {
		if (actualTag.length) {
			setFilteredVideos((prev) =>
				videos.filter((video) => video.tag === actualTag)
			);
			setFilteredPictures((prev) =>
				pictures.filter((picture) => picture.tag === actualTag)
			);
		}
	}, [actualTag]);

	return (
		<Row
			id='tag'
			style={{
				marginBottom: '50px',
			}}
		>
			<Col md={12} xs={12} className='text-center'>
				{tags.map((tag, i) => (
					<Button
						key={i}
						active={actualTag === tag ? true : false}
						variant='outline-info'
						style={{ margin: '5px' }}
						onClick={handleTag}
					>
						{tag}
					</Button>
				))}
				<Button
					active={actualTag === 'no tag' ? true : false}
					variant='outline-danger'
					style={{ margin: '5px' }}
					onClick={handleTag}
				>
					no tags
				</Button>
			</Col>
		</Row>
	);
}

export default Tag;
