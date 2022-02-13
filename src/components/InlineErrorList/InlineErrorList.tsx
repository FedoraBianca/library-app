import React from 'react';
import { InlineErrorListWrapper } from './InlineErrorList.style';

export interface IInlineErrorListProps {
    errors: string[] | string;
}

const InlineErrorList: React.FC<IInlineErrorListProps> = ({
    errors
}) => {
    return (
        <InlineErrorListWrapper>
            {
                (Array.isArray(errors)) 
                ? errors.map((error: string) => <div key={error} className='error'>{`* ${error}`}</div>)
                : <div className='error'>{`* ${errors}`}</div>
            }
        </InlineErrorListWrapper>
    )
};

export default InlineErrorList;