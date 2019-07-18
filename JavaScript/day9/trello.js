const axios = require("axios");

let argOne = process.argv[2];
let argTwo = process.argv[3];
let argThree = process.argv[4];
let argFour = process.argv[5];

let key = "eb1ad327044e7ca3859156305515c0b9";
let token = "eef0afe2cd6e9018b19a317a6a6d8d4dd4b128a2cf426d8055c82d8e7d5f8aba";

// DISPLAYS

const getAllBoards = memberID => {
	axios
		.get(
			`https://api.trello.com/1/members/${memberID}/boards?fields=name,url&key=${key}&token=${token}
    `
		)
		.then(response => {
			for (let i = 0; i < response.data.length; i++) {
				console.log("*".repeat(60));
				console.log(`Name of the board : ${response.data[i].name}`);
				console.log(`ID of the board : ${response.data[i].id}`);
				console.log("*".repeat(60));
				console.log("\n");
			}
			//;
		})
		.catch(err => {
			console.log(err);
		});
};

const getAllListsFromBoard = boardID => {
	axios
		.get(
			`https://api.trello.com/1/boards/${boardID}/lists?fields=name,url&key=${key}&token=${token}
        `
		)
		.then(response => {
			for (let i = 0; i < response.data.length; i++) {
				console.log("*".repeat(60));
				console.log(`Name of the list : ${response.data[i].name}`);
				console.log(`ID of the list : ${response.data[i].id}`);
				console.log("*".repeat(60));
				console.log("\n");
			}
		})
		.catch(err => {
			console.log(err);
		});
};

const getAllCardsFromList = listID => {
	axios
		.get(
			`https://api.trello.com/1/lists/${listID}/cards?fields=name,url&key=${key}&token=${token}
            `
		)
		.then(response => {
			for (let i = 0; i < response.data.length; i++) {
				console.log("-".repeat(60));
				console.log(`Name of the list : ${response.data[i].name}`);
				console.log(`ID of the list : ${response.data[i].id}`);
				console.log(`Check it out here : ${response.data[i].url}`);
				console.log("-".repeat(60));
				console.log("\n");
			}
		})
		.catch(err => {
			console.log(err);
		});
};

// CREATIONS

const createBoard = newBoardName => {
	urlNewBoardName = newBoardName.replace(" ", "+");
	axios
		.post(
			`https://api.trello.com/1/boards?name=${urlNewBoardName}&fields=name,url&key=${key}&token=${token}`
		)
		.then(function(response) {
			if (response.status === 200) {
				console.log("+".repeat(60));
				console.log(`The creation of "${newBoardName}" is successfull !`);
				console.log(`Trello gave it the id : ${response.data.id}`);
				console.log(`Check it out here : ${response.data.url}`);
				console.log("+".repeat(60));
				console.log("\n");
			}
			//console.log(response);
		})
		.catch(function(error) {
			console.log(error);
		});
};

const createList = (boardID, newListName) => {
	urlnewListName = newListName.replace(" ", "+");
	axios
		.post(
			`https://api.trello.com/1/lists?name=${urlnewListName}&idBoard=${boardID}&fields=name,url&key=${key}&token=${token}`
		)
		.then(function(response) {
			if (response.status === 200) {
				console.log("+".repeat(60));
				console.log(
					`The creation of the list "${newListName}" is successfull !`
				);
				console.log(`Trello gave it the id : ${response.data.id}`);
				console.log("+".repeat(60));
				console.log("\n");
			}
		})
		.catch(function(error) {
			console.log(error);
		});
};

const createCard = (listID, newCardName) => {
	urlNewCardName = newCardName.replace(" ", "+");
	axios
		.post(
			`https://api.trello.com/1/cards?name=${urlNewCardName}&idList=${listID}&fields=name,url&key=${key}&token=${token}`
		)
		.then(function(response) {
			console.log("+".repeat(60));
			console.log(`The creation of the card "${newCardName}" is successfull !`);
			console.log(`Trello gave it the id : ${response.data.id}`);
			console.log("+".repeat(60));
			console.log("\n");
			console.log(response.status);
		})
		.catch(function(error) {
			console.log(error);
		});
};

// DELETIONS

const deleteBoard = boardID => {
	axios
		.delete(
			`https://api.trello.com/1/boards/${boardID}?fields=name,url&key=${key}&token=${token}`
		)
		.then(function(response) {
			console.log("/".repeat(60));
			console.log(
				`The board with id : ${boardID} has been deleted successfully`
			);
			console.log("\\".repeat(60));
		})
		.catch(function(error) {
			console.log(error);
		});
};

const deleteCard = cardID => {
	axios
		.delete(
			`https://api.trello.com/1/cards/${cardID}?fields=name,url&key=${key}&token=${token}`
		)
		.then(function(response) {
			console.log("/".repeat(60));
			console.log(`The card with id : ${cardID} has been deleted successfully`);
			console.log("\\".repeat(60));
			//console.log(response);
		})
		.catch(function(error) {
			console.log(error);
		});
};

const deleteList = listId => {
	axios
		.put(
			`https://api.trello.com/1/lists/${listId}?closed=true&fields=name,url&key=${key}&token=${token}`
		)
		.then(function(response) {
			console.log("/".repeat(60));
			console.log(`The list with id : ${listID} has been deleted successfully`);
			console.log("\\".repeat(60));
			//console.log(response.status);
		})
		.catch(function(error) {
			console.log(error);
		});
};

// PROCESS USER INPUT

console.log(argOne, argTwo, argThree);
let regex = RegExp("([a-zA-Z])+");
let isString = regex.test(argTwo);
if (argOne === "boards") {
	if (argTwo === undefined) {
		getAllBoards("theaupoulat");
	} else if (argThree === undefined) {
		createBoard(argTwo);
	} else if (argThree === "lists") {
		getAllListsFromBoard(argTwo);
	} else if (argThree === "newList") {
		createList(argTwo, argFour);
	}
} else if (argOne === "lists") {
	if (argThree === "cards") {
		getAllCardsFromList(argTwo);
	} else if (argThree === "newCard") {
		createCard(argTwo, argFour);
	}
} else if (argOne === "delete") {
	if (argTwo === "board") {
		deleteBoard(argThree);
	} else if ((argTwo = "list")) {
		deleteList(argThree);
	} else if ((argTwo = "card")) {
		deleteCard(argThree);
	}
}

//getAllBoards("theaupoulat");
// getAllListsFromBoard("5d1dfe7713a3080f8b5241ad");
//getAllCardsFromList("5d1dfe7bf223225bf803c05c");

//createBoard("testing the space");
//createList("5a7ba1fbc0535865a3f4c51e", "oulala");
// createCard("5d1e09cc2f17d77c3acb8122", "this is A TEST");
//deleteCard("5d1e0bc58afc8761dd9fbb9f");
