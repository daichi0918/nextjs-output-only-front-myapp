'use client';
/**
 * TodoTemplate
 *
 * @package templates
 */
import styles from './styles.module.css';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useTodo } from '@/hooks/Todo';
import { useRouter } from 'next/router';
import InputForm from '@/components/atoms/InputForm';

import TodoList from '@/components/organisms/TodoList';

/**
 * TodoTemplate
 * @returns {JSX.Element}
 */
export const TodoTemplate = () => {
  const {
    showTodoList,
    searchKeyWord,
    handleDeleteTodoTask,
    handleChangeSearchKeyword
  } = useTodo();
  return (
    <>
      <h1 className={styles.title}>TodoList</h1>
      <div className={styles.common}>
        <div className={styles.area}>
          <InputForm 
            className={styles.input}
            placeholder={"Search Keyword"}
            InputValue={searchKeyWord}
            onChange={handleChangeSearchKeyword}
          />
        </div>
        <div className={styles.area}>
          <TodoList showTodoList={showTodoList} handleDeleteTodoTask={handleDeleteTodoTask}/>
        </div>
      </div>
    </>
  )
}