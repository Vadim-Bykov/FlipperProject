import axios, {AxiosError} from 'axios';
import {QueryKey, useQuery, UseQueryOptions} from 'react-query';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

interface Todo {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

const getData = (url: string) =>
  instance.get(url).then(response => response.data);

export const useTodos = () => useQuery<Todo[]>('todos', () => getData('todos'));
export const usePosts = () => useQuery<Post[]>('posts', () => getData('posts'));

interface UseTodoParams {
  postNumber: number;
  queryOptions?: UseQueryOptions<Todo, AxiosError, Todo, QueryKey>;
}
export const useTodoDetails = ({
  postNumber,
  queryOptions = {},
}: UseTodoParams) =>
  useQuery({
    queryKey: ['todos', postNumber],
    queryFn: () => getData(`todos/${postNumber}`),
    ...queryOptions,
  });
