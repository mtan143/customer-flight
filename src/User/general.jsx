import React from 'react';
import PropTypes from 'prop-types';
import User from '.';
import InfomationUser from './InfomationUser';
import { Button } from 'react-bootstrap';

general.propTypes = {
    
};

function general(props) {
    return (
        <div>
            <User address />
            <InfomationUser address />
            <Button type = "submit" />
        </div>
    );
}

export default general;