import axios, {AxiosError} from 'axios';
import {QueryKey, useQuery, UseQueryOptions} from 'react-query';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  params: {
    api_key: 'a72c9cd11375413053bccd6b3e6aaefe',
  },
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

const getData = (queryKey: string) =>
  instance.get(queryKey).then(response => response.data);

export const useTodos = () => useQuery<Todo[]>('todos', () => getData('todos'));
export const usePosts = () => useQuery<Post[]>('posts', () => getData('posts'));

interface UsePostParams {
  postNumber: number;
  queryOptions?: UseQueryOptions<Todo, AxiosError, Todo, QueryKey>;
}
export const usePost = ({postNumber, queryOptions = {}}: UsePostParams) =>
  useQuery({
    queryKey: ['todos', postNumber],
    queryFn: () => getData(`todos/${postNumber}`),
    ...queryOptions,
  });
