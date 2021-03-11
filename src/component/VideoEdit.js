import React, { useState, useContext } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { Context } from '../context/Context';

function VideoEdit() {
	const { tags, videos, setVideos } = useContext(Context);
	const [show, setShow] = useState(false);
	const [selectedVideo, setSelectedVideo] = useState(videos[0].title);
	const [selectedTag, setSelectedTag] = useState('');

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const handleVideoChange = (e) => setSelectedVideo(e.target.value);
	const handleTagChange = (e) => setSelectedTag(e.target.value);

	const handleEdit = (e) => {
		e.preventDefault();
		setVideos((prev) =>
			prev.map((video) =>
				video.title === selectedVideo
					? { ...video, tag: selectedTag }
					: { ...video }
			)
		);
		setSelectedTag('');
		setSelectedVideo(videos[0].title);
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
							<Form.Label>video :</Form.Label>
							<Form.Control as='select' onChange={handleVideoChange}>
								{videos.map((video) => (
									<option value={video.title}>{video.title}</option>
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

export default VideoEdit;
