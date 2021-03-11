import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import {
	Row,
	Col,
	Table,
	Button,
	Modal,
	Form,
	Pagination,
} from 'react-bootstrap';
import { Context } from '../context/Context';
import VideoEdit from './VideoEdit';

function Video() {
	const {
		setActualTag,
		videos,
		setVideos,
		filteredVideos,
		setFilteredVideos,
	} = useContext(Context);
	const [url, setUrl] = useState('');
	const [title, setTitle] = useState('');
	const [addShow, setAddShow] = useState(false);
	const [removeShow, setRemoveShow] = useState(false);
	const [begin, setBegin] = useState(0);
	const [limit, setLimit] = useState(1);
	const [actualVideos, setActualVideos] = useState([]);
	const [actualPage, setActualPage] = useState(0);

	const handleAddClose = () => setAddShow(false);
	const handleAddShow = () => setAddShow(true);
	const handleRemoveClose = () => setRemoveShow(false);
	const handleRemoveShow = () => setRemoveShow(true);
	const handleChange = (e) => setUrl(e.target.value);
	const handleTitle = (e) => setTitle(e.target.value);

	const numOfPages = [];
	const numOfElem = 1;
	// videos.map((video, i) => {
	// 	numOfPages.push(i + 1);
	// });

	const numberOfPages = filteredVideos.length
		? Math.ceil(filteredVideos.length / numOfElem)
		: Math.ceil(videos.length / numOfElem);

	for (let i = 0; i < numberOfPages; i++) {
		numOfPages.push(i + 1);
	}

	const nextPage = () => {
		if (actualPage + 1 < numberOfPages) {
			setLimit((prev) => prev + numOfElem);
			setBegin((prev) => prev + numOfElem);
			setActualPage((prev) => prev + 1);
		}
	};

	const prevPage = () => {
		if (actualPage > 0) {
			setLimit((prev) => prev - numOfElem);
			setBegin((prev) => prev - numOfElem);
			setActualPage((prev) => prev - 1);
		}
	};

	const firstPage = () => {
		setLimit(numOfElem);
		setBegin(0);
		setActualPage(0);
	};

	const lastPage = async () => {
		await setLimit(numOfElem);
		await setBegin(0);
		await setLimit((prev) => prev + (numOfElem * numberOfPages - numOfElem));
		await setBegin((prev) => prev + (numOfElem * numberOfPages - numOfElem));
		await setActualPage(numberOfPages - 1);
	};

	useEffect(() => {
		if (filteredVideos.length !== 0) {
			setActualVideos((prev) => filteredVideos.slice(begin, limit));
		} else {
			setActualVideos((prev) => videos.slice(begin, limit));
		}
	}, [begin, limit, filteredVideos, videos]);

	useEffect(() => {
		setLimit(numOfElem);
	}, []);

	const handleAdd = (e) => {
		e.preventDefault();
		setFilteredVideos([]);
		setActualTag('');
		axios
			.get(`https://vimeo.com/api/oembed.json?url=${url}`)
			.then((response) =>
				setVideos((prev) => [...prev, { ...response.data, tag: '' }])
			)
			.catch((err) => console.log(err));
		handleAddClose();
	};

	const handleRemove = (e) => {
		e.preventDefault();
		setFilteredVideos([]);
		setActualTag('');
		setVideos((prev) => prev.filter((video) => video.title !== title));
		setTitle('');
		handleRemoveClose();
	};

	return (
		<>
			<Row id='video'>
				<Col>
					<Table striped bordered hover variant='dark' responsive>
						<thead>
							<tr>
								<th colSpan='8'>Video</th>
							</tr>
							<tr>
								<th>#</th>
								<th>URL</th>
								<th>Title</th>
								<th>Author</th>
								<th>Add date</th>
								<th>Width</th>
								<th>Height</th>
								<th>Duration</th>
								<th>Tag</th>
							</tr>
						</thead>
						<tbody>
							{actualVideos.map((video, i) => (
								<tr key={i}>
									<td>{i}</td>
									<td>
										{video.provider_url}
										{video.video_id}
									</td>
									<td>{video.title}</td>
									<td>{video.author_name}</td>
									<td>{video.upload_date}</td>
									<td>{video.width}</td>
									<td>{video.height}</td>
									<td>{video.duration}</td>
									<td>{video.tag}</td>
								</tr>
							))}
						</tbody>
					</Table>
				</Col>
			</Row>
			<Row>
				<Col className='text-center'>
					<Button
						variant='outline-info'
						style={{ margin: '5px' }}
						onClick={handleAddShow}
					>
						Add video bookmark
					</Button>
					<VideoEdit />
					<Button
						variant='outline-danger'
						style={{ margin: '5px' }}
						onClick={handleRemoveShow}
					>
						Remove video bookmark
					</Button>
				</Col>
			</Row>
			<Row style={{ marginTop: '20px' }}>
				<Col>
					<Pagination className='justify-content-center'>
						<Pagination.First onClick={firstPage} />
						<Pagination.Prev onClick={prevPage} />
						{numOfPages.map((page, i) => (
							<Pagination.Item
								key={i}
								value={page}
								active={actualPage === i ? true : false}
							>
								{page}
							</Pagination.Item>
						))}
						<Pagination.Next onClick={nextPage} />
						<Pagination.Last onClick={lastPage} />
					</Pagination>
				</Col>
			</Row>
			<Modal show={addShow} onHide={handleAddClose} size='lg' centered>
				<Modal.Header
					style={{ backgroundColor: '#454d55', color: 'white' }}
					closeButton
				>
					<Modal.Title>Add a bookmark</Modal.Title>
				</Modal.Header>
				<Modal.Body style={{ backgroundColor: '#343a40', color: 'white' }}>
					<Form>
						<Form.Group controlId='formBasicPassword'>
							<Form.Label>url :</Form.Label>
							<Form.Control
								type='text'
								value={url}
								placeholder='https://www.exemple.com'
								onChange={handleChange}
							/>
						</Form.Group>
						<Button variant='outline-info' type='submit' onClick={handleAdd}>
							Add
						</Button>
					</Form>
				</Modal.Body>
				<Modal.Footer style={{ backgroundColor: '#343a40', color: 'white' }}>
					<Button variant='outline-danger' onClick={handleAddClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
			<Modal show={removeShow} onHide={handleRemoveClose} size='lg' centered>
				<Modal.Header
					style={{ backgroundColor: '#454d55', color: 'white' }}
					closeButton
				>
					<Modal.Title>remove a bookmark</Modal.Title>
				</Modal.Header>
				<Modal.Body style={{ backgroundColor: '#343a40', color: 'white' }}>
					<Form>
						<Form.Group controlId='formBasicPassword'>
							<Form.Label>title :</Form.Label>
							<Form.Control
								type='text'
								value={title}
								placeholder="bookmark's title to remove"
								onChange={handleTitle}
							/>
						</Form.Group>
						<Button variant='outline-info' type='submit' onClick={handleRemove}>
							Remove
						</Button>
					</Form>
				</Modal.Body>
				<Modal.Footer style={{ backgroundColor: '#343a40', color: 'white' }}>
					<Button variant='outline-danger' onClick={handleRemoveClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default Video;
