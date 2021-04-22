import React, { useState, useEffect, useContext, Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Container, Row, Col } from "react-bootstrap";
import CardDeck from "react-bootstrap/Card";

import { CardTemplate } from "../component/card.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	let listPlanets = store.planets.map((item, index) => {
		return (
			<CardTemplate
				name={item.name}
				category={"/planets/"}
				src={
					"https://images.unsplash.com/photo-1545156521-77bd85671d30?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
				}
				index={index}
				url={item.url}
				click={() => {
					actions.captureItem(item.name);
				}}
				key={index.toString()}
			/>
		);
	});

	let listStartShips = store.starShipsList.map((item, index) => {
		return (
			<CardTemplate
				name={item.name}
				category={"/starships/"}
				src={"https://db-api.elestimulo.com/app/uploads/2015/12/nave-star-wars-ub-feature-1-1100x572.jpg"}
				index={index}
				url={item.url}
				click={() => {
					actions.captureItem(item.name);
				}}
				key={index.toString()}
			/>
		);
	});

	let listPeople = store.characters.map((item, index) => {
		return (
			<CardTemplate
				name={item.name}
				category={"/people/"}
				src={
					"https://lh3.googleusercontent.com/proxy/pZsSBgCRH20G_bpq1E6kgfYKs0RNzGQoxaKnFwoUskVLDETuq4bklEcetUKRIfzEIyj6GvlqjxnFW96bOLT7E-iuDiAl51pbES4F45MqzqGWqDe7B1pQ8pMWjIITiWfeiBocZeY1kQ"
				}
				index={index}
				url={item.url}
				click={() => {
					actions.captureItem(item.name);
				}}
				key={index.toString()}
			/>
		);
	});

	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
			slidesToSlide: 3
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
			slidesToSlide: 2
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1
		}
	};
	return (
		<>
			<Container className="mb-2">
				<div className="d-flex justify-content-center align-items-center mt-1">
					<h1 className="titlesHome mt-2 text-light">Personajes</h1>
				</div>
				<Carousel className="d-flex flex-row ml-auto" responsive={responsive}>
					{listPeople}
				</Carousel>
			</Container>

			<Container className="mb-2">
				<div className="d-flex justify-content-center align-items-center mt-1">
					<h1 className="titlesHome mt-2 text-light">Planetas</h1>
				</div>
				<Carousel className="d-flex flex-row ml-auto" responsive={responsive}>
					{listPlanets}
				</Carousel>
			</Container>

			<Container className="mb-2">
				<div className="d-flex justify-content-center align-items-center mt-1">
					<h1 className="titlesHome mt-2 text-light">Naves</h1>
				</div>
				<Carousel className="d-flex flex-row ml-auto" responsive={responsive}>
					{listStartShips}
				</Carousel>
			</Container>
		</>
	);
};
