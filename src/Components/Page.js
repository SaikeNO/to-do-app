import React from 'react';
import TaskList from './TaskList'
import { Route, Switch } from 'react-router-dom';

const Page = () => {
    return (
        <Switch>
            <Route path={'/tasks'} component={TaskList} />
        </Switch>
    );
}

export default Page;