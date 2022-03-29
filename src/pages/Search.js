import React, { useState } from 'react';
import './Search.css';
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'
import { Action } from 'history';

function Search({ hideButtons = false }) {

    const [input, setInput] = useState('');
    const Navigate = useNavigate();
    const [{ }, dispatch] = useStateValue();

    const search = e => {
        e.preventDefault();
        console.log("YOU HIT SEARCH", input);

        Navigate('/search');

        dispatch({
            type: actionTypes.SET_ACTION_TERM,
            term: input
        })
    }

    return (
        <form className='search'>
            <div className='search__input'>
                <SearchIcon className="search__inputIcon" />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div>

            {!hideButtons ?
                (<div className='search__buttons'>
                    <Button type="submit" variant="outlined" onClick={search}>Google Search</Button>
                    <Button variant="outlined">I'm Feeling Lucky</Button>
                </div>
                ) :
                (
                    <div className='search__buttons'>
                        <Button className="search__buttonsHidden" type="submit" variant="outlined" onClick={search}>Google Search</Button>
                        <Button className="search__buttonsHidden" variant="outlined">I'm Feeling Lucky</Button>
                    </div>
                )}

        </form>
    )
}

export default Search