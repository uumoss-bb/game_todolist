import React, { Component } from 'react';
import ListItem from './comp/ListItem'
import PlayedGame from './comp/PlayedGame'

import './css/App.css';
import './css/ListItem.css';

declare var $: any //this makes it so I can use jQuery

let newInput = ''

class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			games : ["Breath of the wild"],
			playedGames : ["Dark Souls"]
		}
	}

	addGame (e, game) {
		e.preventDefault()

		if(!game) {
			return
		}

		const games = this.state.games
		games.push(game)

		this.setState({
			games : games
		})

		$('input').val('');
		newInput = ''

	}

	deleteGame (gameIndex) {

		let games = this.state.games
		games = games.filter((game, i) => i !== gameIndex)

		this.setState({
			games : games
		})

	}

	playedGame (gameIndex) {

		let games = this.state.games
		games = games.filter((game, i) => i === gameIndex)

		let playedGames = this.state.playedGames
		playedGames.push(games[0])

		games = games.filter((game, i) => i !== gameIndex)


		this.setState({
			games : games,
			playedGames : playedGames
		})

	}

  render() {
    return (
      <div className="App">

			<section id="wishList">

				<form>

					<label>

					Games to play :

						<input type = "text" name = "game" onChange = { (e) => newInput = e.target.value}/>

						<input id = "submit" type = "submit" name = "submit" value = "add"
						onClick = { (e) => this.addGame(e, newInput)}/>

					</label>

				</form>

				{
					this.state.games.map((game, i) => {
						return(
							<div className = "listItem_container">

								<ListItem key = {i} game = {game} />

								<button className = "deleteBtn" onClick = {() => this.deleteGame(i)}>
								X
								</button>

								<button className = "playedBtn" onClick = {() => this.playedGame(i)}>
								Played?
								</button>
							</div>
						)
					})
				}

			</section>

			<section id="gamesPlayed">

				<h1>
					Games Played
				</h1>

				{
					this.state.playedGames.map((game, i) => {
						return(
							<div className = "listItem_container">

								<PlayedGame key = {i} game = {game} />

							</div>
						)
					})
				}

			</section>


      </div>
    );
  }
}

export default App;
