// @flow
import * as React from 'react';
import PrimaryButton from './square.style';

type Props = {
    value: String
};

type State = {};

class Square extends React.Component<Props, State> {
    render(): React.Node {
        return (
            <>
                <PrimaryButton variant="contained">{this.props.value}</PrimaryButton>
            </>
        );
    }
}

export default Square;