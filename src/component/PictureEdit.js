import React, { useState, useContext } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { Context } from '../context/Context';

function PictureEdit() {
	const { tags, pictures, setPictures } = useContext(Context);
	const [show, setShow] = useState(false);
	const [selectedPicture, setSelectedPicture] = useState(pictures[0].title);
	const [selectedTag, setSelectedTag] = useState('');

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const handlePictureChange = (e) => setSelectedPicture(e.target.value);
	const handleTagChange = (e) => setSelectedTag(e.target.value);

	const handleEdit = (e) => {
		e.preventDefault();
		setPictures((prev) =>
			prev.map((picture) =>
				picture.title === selectedPicture
					? { ...picture, tag: selectedTag }
					: { ...picture }
			)
		);
		setSelectedTag('');
		setSelectedPicture(pictures[0].title);
		handleClose();
	};

	return (
		<>
			<Button
				variant='outline-info'
				style={{ margin: '5px' }}
				onClick={handleShow}
			>
				Edit
			</Button>
			<Modal show={show} onHide={handleClose} size='lg' centered>
				<Modal.Header
					style={{ backgroundColor: '#454d55', color: 'white' }}
					closeButton
				>
					<Modal.Title>change a bookmark tag</Modal.Title>
				</Modal.Header>
				<Modal.Body style={{ backgroundColor: '#343a40', color: 'white' }}>
					<Form>
						<Form.Group controlId='formBasicPassword'>
							<Form.Label>picture :</Form.Label>
							<Form.Control as='select' onChange={handlePictureChange}>
								{pictures.map((picture) => (
									<option value={picture.title}>{picture.title}</option>
								))}
							</Form.Control>
						</Form.Group>
						<Form.Group controlId='formBasicPassword'>
							<Form.Label>tag :</Form.Label>
							<Form.Control as='select' onChange={handleTagChange}>
								<option value=''>no tag</option>
								{tags.map((tag) => (
									<option value={tag}>{tag}</option>
								))}
							</Form.Control>
						</Form.Group>
						<Button variant='outline-info' type='submit' onClick={handleEdit}>
							Edit
						</Button>
					</Form>
				</Modal.Body>
				<Modal.Footer style={{ backgroundColor: '#343a40', color: 'white' }}>
					<Button variant='outline-danger' onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default PictureEdit;
