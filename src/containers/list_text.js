import React from 'react';
import ListTextItem from '../components/list_text_item.js';

const ListText = (props) => {
    const field = props;
    
    return (
            <div>
                {
                    field.list.map((text,key) => {
                        return <ListTextItem    text={text}
                                                key={key} 
                                                id={key} 
                                                selectElem={field.selected} 
                                                elem={key === field.elem} 
                                                color={field.color}  />
                    })
                }
            </div>
        )
}

export default ListText;