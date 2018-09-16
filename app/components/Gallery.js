import React, { Component } from 'react';

class Gallery extends Component {
    render() {
        let alternate = 'http://www.clker.com/cliparts/n/T/5/z/f/Y/image-missing-md.png'//coge la foto de la pagina web cuando no encuentra la suya
        return (
            <div>
                {
                    this.props.items.map((item, index) => {
                        let { title, imageLinks, infoLink } = item.volumeInfo;
                        return (
                            <a 
                                key={index}
                                className="book"
                                href={infoLink}
                                target="_blank"
                                >
                                <img 
                                    src={imageLinks !== undefined? imageLinks.thumbnail : alternate} 
                                    alt="book image"
                                    className="book-img"

                               />
                                <div className="book-text">
                                    {title}
                                </div>
                                    
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}

export default Gallery;