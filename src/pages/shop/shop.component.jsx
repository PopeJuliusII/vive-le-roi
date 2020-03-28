import React from 'react';

import SHOPDATA from './shop.data.js'

import CollectionPreview from '../../components/preview-collection/preview-collection.component'


class ShopPage extends React.Component {
    constructor(props) {
        super();

        this.state = {
            collections: SHOPDATA
        };
    }

    render() {
        const {collections} = this.state;
        return (
          <div className='shop-page'>
            {collections.map(({id, ...otherProps}) =>(
                <CollectionPreview key={id} {...otherProps} />
            ))}
    </div>
        );
    }
}

export default ShopPage;
