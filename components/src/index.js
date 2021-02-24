import React from 'react';
import reactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from'./ApprovalCard';

const App = () =>{
    return (
        <div className = "ui container comments">
             <ApprovalCard>
                <div>
                    <h4 className = "center aligned">Warning!</h4>
                    Are you sure?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author = "Alex" timeAgo = "Today at 4:45PM" comment = "Noice" avatar = {faker.image.image()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author = "Jane" timeAgo = "Yesterday at 1:45PM" comment = "Good" avatar = {faker.image.image()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author = "Jacky" timeAgo = "Today at 2:45PM" comment = "Noice post" avatar = {faker.image.image()}/>
            </ApprovalCard>
        </div>
    );
}

reactDom.render(<App/>, document.getElementById('root'));