import React from 'react';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Button } from 'react-bootstrap';

export default function Header() {
	return (
		<nav className="l-header navbar navbar-expand-lg navbar-dark bg-primary">
			<Link href="/list">
                <Button>
                    Shopping-Car
                </Button>
			</Link>

			<div className="collapse navbar-collapse" id="navbarColor01">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<Link href="/list">
							Listar
						</Link>
					</li>
					<li className="nav-item">
						<Link href="/add">
							Adicionar
						</Link>
					</li>
				</ul>
			</div>
			<ul className="navbar-nav ml-md-auto">
				<Link href="/cart">
					<AiOutlineShoppingCart>
						<span>0</span>
					</AiOutlineShoppingCart>
				</Link>
			</ul>
		</nav>
	);
}