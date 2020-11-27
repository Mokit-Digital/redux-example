import React from 'react';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux'

export default function Header() {
	const length = useSelector(state => state.cart.length)

	return (
		<nav className="l-header navbar navbar-expand-lg navbar-dark bg-light">
			<Link href="/list">
                <Button>
                    Shopping-Car
                </Button>
			</Link>

			<div className="collapse navbar-collapse" id="navbarColor01">
				<ul className="navbar-nav mr-auto" style={{margin: "0 2rem 0 2rem"}}>
					<li className="nav-item" style={{margin: "0 2rem 0 2rem"}}>
						<Link href="/list">
							Listar
						</Link>
					</li>
					<li className="nav-item" style={{margin: "0 2rem 0 2rem"}}>
						<Link href="/add">
							Adicionar
						</Link>
					</li>
				</ul>
			</div>
			<ul className="navbar-nav ml-md-auto">
				<Link href="/cart">
					<div>
						<AiOutlineShoppingCart size="40" />
						<span>{length}</span>
					</div>
				</Link>
			</ul>
		</nav>
	);
}