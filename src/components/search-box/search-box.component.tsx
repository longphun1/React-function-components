import { ChangeEventHandler } from 'react';
import './search-box.styles.css'

type SearchBoxProps = {
    className: string;
    placeHolder?: string;
    onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({className, placeHolder, onChangeHandler}: SearchBoxProps) =>  (
    <input
        className={className}
        type='search'
        placeholder={placeHolder}
        onChange={onChangeHandler}
    />
);

export default SearchBox;