import React from 'react';
const FilterButton = (props) => {
    // const { title, isActived, onClick, link } = props;
    return (
        <li>
            <a href={`#/${props.link}`}
                className={`${props.isActived ? 'selected' : ''}`}
                onClick={props.onClick} >
                {props.title}
            </a>
        </li>
    )
}

const Footer = (props) => {
    const filterBtn = [{
        title: 'All',
        isActived: props.status === 'All',
        onClick: () => props.setStatusFilter('All'),
        link: 'All'
    },
    {
        title: 'Active',
        isActived: props.status === 'Active',
        onClick: () => props.setStatusFilter('Active'),
        link: 'Active'
    },
    {
        title: 'Compeleted',
        isActived: props.status === 'Compeleted',
        onClick: () => props.setStatusFilter('Compeleted'),
        link: 'Compeleted'
    },

    ]
    return (
        <>
            <footer className="footer" >
                <span className="todo-count">
                    <strong>{props.numOfTodosLeft}</strong>
                    <span>Item left</span>
                </span>
                <ul className="filters">
                    {filterBtn.map((btn, index) =>
                        <FilterButton key={index} {...btn} />
                    )}
                </ul>
                {/* <button className="clear-completed" onClick={ props.clearCompleted}>Clear completed</button> */}
            </footer>
        </>
    )
}


export default Footer;