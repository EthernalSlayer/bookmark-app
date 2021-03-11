import React, { useContext, useState } from 'react';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { Context } from '../context/Context';

function Navigation() {
	const { setTags } = useContext(Context);
	const [newTag, setNewTag] = useState('');

	const handleChange = (e) => {
		setNewTag(e.target.value);
	};

	const handleNewTag = (e) => {
		e.preventDefault();
		setTags((prev) => [...prev, newTag]);
		setNewTag('');
	};

	return (
		<Navbar fixed='top' collapseOnSelect expand='lg' bg='dark' variant='dark'>
			<Navbar.Brand href='#home'>
				<img
					alt=''
					src='/logo192.png'
					width='30'
					height='30'
					className='d-inline-block align-top'
				/>{' '}
				React Bookmark
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav className='mr-auto'>
					<Nav.Link href='#tag'>Tag</Nav.Link>
					<Nav.Link href='#video'>Video</Nav.Link>
					<Nav.Link href='#picture'>Picture</Nav.Link>
				</Nav>
				<Form inline>
					<FormControl
						type='text'
						placeholder='new tag'
						className='mr-sm-2'
						value={newTag}
						onChange={handleChange}
					/>
					<Button variant='outline-info' type='submit' onClick={handleNewTag}>
						Add New Tag
					</Button>
				</Form>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Navigation;
