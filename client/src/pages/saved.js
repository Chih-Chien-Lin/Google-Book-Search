import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import Container from '../components/Container';
import Row from '../components/Row';
import Column from '../components/Column';
import Card from '../components/Card';
import { removeBook, getSavedBooks } from '../utils/API'

class Saved extends Component {
    state = {
        bookList: []
    }

    componentDidMount() {
        this.handleGetSavedBooks()
    }

    handleGetSavedBooks = () => {
        getSavedBooks().then(({ data: bookList }) => {
            this.setState({ bookList })
        }).catch(err => console.log(err))
    }
    handleRemoveBook = bookId => {
        console.log(bookId)
        removeBook(bookId).then(this.handleGetSavedBooks).catch(err => console.log(err))
    }

    render() {
        console.log(this.state)
        return (
            <>

                <Jumbotron
                    fluid
                    bg={'dark'}
                    color={'light'}
                    pageTitle={'Viewing Saved Books'}
                />
                <Container>
                    <Row>
                        {!this.state.bookList.length ? (
                            <h2 className="text-center">No saved book, yet....</h2>
                        ) : (
                                this.state.bookList.map(book => {
                                    return (
                                        <Column key={book._id} md={4}>
                                            <Card
                                                bg={'dark'}
                                                title={book.title}
                                                image={book.image ? book.image : undefined}
                                            >
                                                <small className='text-muted'>
                                                    {`By: ${
                                                        book.authors.length ? book.authors.join(', ') : null
                                                        }`}
                                                </small>
                                                <p>
                                                    {book.description}
                                                </p>
                                                <button onClick={() => this.handleRemoveBook(book._id)} className="btn btn-danger btn-sm">
                                                    Remove Book
                                            </button>
                                            </Card>
                                        </Column>
                                    )
                                })
                            )}
                    </Row>
                </Container>

                {/* </Jumbotron> */}
            </>
        );
    }

}
export default Saved


