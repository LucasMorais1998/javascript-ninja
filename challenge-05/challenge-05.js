/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let array = ['lucas', 23, true, null, undefined];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(array){
  return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myFunction(array)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function anotherFunction(array, num){
  return array[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
let types = ['string', 10, true, null, undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(anotherFunction(types, 0));
console.log(anotherFunction(types, 1));
console.log(anotherFunction(types, 2));
console.log(anotherFunction(types, 3));
console.log(anotherFunction(types, 4));


/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(bookName){
	let obj = {
		'Harry Potter': {
			quantidadePaginas: 318,
			autor: 'J.K. Rowling',
			editora: 'Rocco'
		},
		'Mindhunter': {
			quantidadePaginas: 381,
			autor: 'John Douglas e Mark Olshaker',
			editora: 'intríseca'
		},
		'Planeta Hulk': {
			quantidadePaginas: 219,
			autor: 'Greg Pak',
			editora: 'Marvel'
		}
	}

	if(bookName === undefined){
		return obj;
	}
			
	return obj[bookName];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log(`O livro ${Object.keys(book())[0]} tem ${book('Harry Potter').quantidadePaginas} páginas!`);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`A autora do livro ${Object.keys(book())[0]} é ${book('Harry Potter').autor}.`);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro ${Object.keys(book())[0]} foi publicado pela editora ${book('Harry Potter').editora}.`);