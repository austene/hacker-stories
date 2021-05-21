import React from 'react';

import styles from './App.module.css';

  // const List = ({ list, onRemoveItem }) =>
  // list.map(item => (
  // <Item
  //   key={item.objectID}
  //   item={item}
  //   onRemoveItem={onRemoveItem}
  // />
  // ));

  
  const List = ({ list, onRemoveItem }) => {
    const [directionAZ, setDirectionAZ] = React.useState(true);
    const [column, setColumn] = React.useState('title');
    const [orderedStories, setOrderedStories] = React.useState(list);
    
    const handleSortStories = (id) => {
      console.log('handleSort')
      // const newArray = orderedStories.sort((a,b) => (a.title > b.title) ? 1 : -1)
      // setOrderedStories(newArray)
      setOrderedStories(orderedStories.sort((a,b) => (a.title > b.title) ? 1 : -1))

    };

  return (
    <React.Fragment>
      <button
        type='button'
        id='title'
        onClick={() => handleSortStories('title')}
      >
        Title
      </button>
      <button id='author'>Author</button>
      <button id='comments'>Comments</button>
      <button id='points'>Points</button>
      {orderedStories.map(item => (
      <Item
        key={item.objectID}
        item={item}
        onRemoveItem={onRemoveItem}
      />
      ))}
    </React.Fragment>
  )
}
  
const Item = ({ item, onRemoveItem }) => {
  return (
    <div className={styles.item}>
      <span style={{ width: '40% '}}>
        <a href={item.url}>{item.title}</a>
      </span>
      <span style={{ width: '30%' }}>{item.author}</span>
      <span style={{ width: '10%' }}>{item.num_comments}</span>
      <span style={{ width: '10%' }}>{item.points}</span>
      <span style={{ width: '10%' }}>
        <button
          type='button'
          onClick={() => onRemoveItem(item)}
          className={`${styles.button} ${styles.buttonSmall}`}
        >
          Dismiss
          {/* <Check height='18px' width='18px' /> */}
        </button>
      </span>
    </div>
  );
};

export default List;
