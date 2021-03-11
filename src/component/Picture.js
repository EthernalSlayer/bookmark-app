import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import {
	Row,
	Col,
	Table,
	Pagination,
	Modal,
	Button,
	Form,
} from 'react-bootstrap';
import { Context } from '../context/Context';
import PictureEdit from './PictureEdit';

function Picture() {
	const {
		setActualTag,
		pictures,
		setPictures,
		filteredPictures,
		setFilteredPictures,
	} = useContext(Context);
	const [addShow, setAddShow] = useState(false);
	const [removeShow, setRemoveShow] = useState(false);
	const [url, setUrl] = useState('');
	const [title, setTitle] = useState('');
	const [begin, setBegin] = useState(0);
	const [limit, setLimit] = useState(1);
	const [actualPictures, setActualPictures] = useState([]);
	const [actualPage, setActualPage] = useState(0);

	const handleAddClose = () => setAddShow(false);
	const handleAddShow = () => setAddShow(true);
	const handleRemoveClose = () => setRemoveShow(false);
	const handleRemoveShow = () => setRemoveShow(true);
	const handleChange = (e) => setUrl(e.target.value);
	const handleTitle = (e) => setTitle(e.target.value);

	const numOfPages = [];
	const numOfElem = 1;
	// pictures.map((video, i) => {
	// 	numOfPages.push(i + 1);
	// });

	const numberOfPages = filteredPictures.length
		? Math.ceil(filteredPictures.length / numOfElem)
		: Math.ceil(pictures.length / numOfElem);

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
		await setLimit((prev) => prev + (numberOfPages * numOfElem - numOfElem));
		await setBegin((prev) => prev + (numberOfPages * numOfElem - numOfElem));
		await setActualPage(numberOfPages - 1);
	};

	useEffect(() => {
		if (filteredPictures.length !== 0) {
			setActualPictures((prev) => filteredPictures.slice(begin, limit));
		} else {
			setActualPictures((prev) => pictures.slice(begin, limit));
		}
	}, [begin, limit, filteredPictures, pictures]);

	useEffect(() => {
		setLimit(numOfElem);
	}, []);

	const handleAdd = (e) => {
		e.preventDefault();
		axios
			.get(
				`https://api.allorigins.win/get?url=${encodeURIComponent(
					`https://www.flickr.com/services/oembed/?format=json&url=http%3A//${url}`
				)}`
			)
			.then((response) => JSON.parse(response.data.contents))
			.then((data) => setPictures((prev) => [...prev, { ...data, tag: '' }]))
			.catch((err) => console.log(err));
		handleAddClose();
	};

	const handleRemove = (e) => {
		e.preventDefault();
		setFilteredPictures([]);
		setActualTag('');
		setPictures((prev) => prev.filter((video) => video.title !== title));
		setTitle('');
		handleRemoveClose();
	};

	return (
		<>
			<Row id='picture'>
				<Col>
					<Table striped bordered hover variant='dark' responsive>
						<thead>
							<tr>
								<th colSpan='8'>Picture</th>
							</tr>
							<tr>
								<th>#</th>
								<th>URL</th>
								<th>Title</th>
								<th>Author</th>
								<th>Width</th>
								<th>Height</th>
								<th>Tag</th>
							</tr>
						</thead>
						<tbody>
							{actualPictures.map((picture, i) => (
								<tr key={i}>
									<td>{i}</td>
									<td>{picture.url}</td>
									<td>{picture.title}</td>
									<td>{picture.author_name}</td>
									<td>{picture.width}</td>
									<td>{picture.height}</td>
									<td>{picture.tag}</td>
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
						Add picture bookmark
					</Button>
					<PictureEdit />
					<Button
						variant='outline-danger'
						style={{ margin: '5px' }}
						onClick={handleRemoveShow}
					>
						Remove picture bookmark
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
								placeholder='www.exemple.com'
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
					<Modal.Title>Remove a bookmark</Modal.Title>
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

export default Picture;
