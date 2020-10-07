import React from 'react';

import { ReactComponent as Search } from '../Icon.assets/search.svg';
import { IconRoot } from '../IconRoot';

interface IconProps {
    size?: 's' | 'm' | 'l';
    color?: string;
    className?: string;
}

export const IconSearch: React.FC<IconProps> = ({ size, className }) => {
    return <IconRoot className={className} size={size} icon={Search} />;
};
