import React, { useState, useEffect } from 'react';

import AppText from './AppText';
import colors from '../constants/colors';

const Timer = ({ style }) => {
    const [seconds, setSeconds] = useState(59);
    useEffect(() => {
        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
        }
    });

    return (
        <AppText style={style} fontColor={colors.white}>
            {seconds > 0 ? `in ${seconds}s` : ''}
        </AppText>
    );
};

export default Timer;
