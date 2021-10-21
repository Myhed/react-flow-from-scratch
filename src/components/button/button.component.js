//@flow

import React from 'react'
import type { Node } from 'react';
import Button from './button.style';

type Props = {}
type State = {}

class ButtonCustom extends React.Component<Props, State> {
    render(): Node { 
        return (
            <div className="dd">
                <p>hello World</p>
                <Button variant="contained">Hello World</Button>
            </div>
        );
    }
}



export { ButtonCustom };