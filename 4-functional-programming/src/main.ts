import { Either, fromPromise, ap, right, flatten, left, getOrElse } from './fp/either';
import { flow, matcher, pipe, prop } from './fp/utils';
import { fetchClient, fetchExecutor } from './fetching';
import { ClientUser, Demand, ExecutorUser } from './types';
import { fold, fromNullable, isNone } from './fp/maybe';
import { map, sort } from './fp/array';
import { distance } from './utils';
import { fromCompare, ordNumber } from './fp/ord';

type Response<R> = Promise<Either<string, R>>

const getExecutor = (): Response<ExecutorUser> => fromPromise(fetchExecutor());
const getClients = (): Response<Array<ClientUser>> => fromPromise(fetchClient().then(map(client => ({
  ...client,
  demands: fromNullable(client.demands),
}))));

export enum SortBy {
  distance = 'distance',
  reward = 'reward',
}

export const show = (sortBy: SortBy) => (clients: Array<ClientUser>) => (executor: ExecutorUser): Either<string, string> => {
  interface MappedClient extends ClientUser {
    distance: number,
  }
  
  console.log('Clients: ', clients, '\nExecutor: ', executor);
  
  const mappedClients: MappedClient[] = clients
    .map((client) => ({
      ...client,
      distance: distance(executor.position, client.position),
    }));
    
  console.log('\nMapped clients: ', mappedClients);

  const ord = fromCompare((client1: MappedClient, client2: MappedClient) => (
    sortBy === 'reward'
    ? ordNumber.compare(client2[sortBy], client1[sortBy])
    : ordNumber.compare(client1[sortBy], client2[sortBy])
  ));
  const sortedClients = sort(ord)([...mappedClients]);

  console.log(`\nSorted by ${sortBy} clients: `, sortedClients);
      
  const filterDem = (executor: ExecutorUser) => (client: MappedClient) => {
    return fold(
      () => true,
      (demands: Demand[]) => {
        return executor.possibilities.some((possibility) => demands.some((demand) => demand === possibility))
      }
    )(client.demands);
  }
      
  const availableClients = sortedClients.filter(filterDem(executor));

  console.log('\nAvailable clients: ', availableClients);
  
  const isAllMet = (sortedClients: MappedClient[]) => (availableClients: MappedClient[]) => availableClients.length === sortedClients.length;
  const isSomeMet = (sortedClients: MappedClient[]) => (availableClients: MappedClient[]) => availableClients.length > 0 && availableClients.length < sortedClients.length;
  const isNoMet = (sortedClients: MappedClient[]) => (availableClients: MappedClient[]) => availableClients.length === 0;
  
  const firstLine = matcher(
    [isAllMet(sortedClients), (availableClients) => `This executor meets all demands of all clients!`],
    [isSomeMet(sortedClients), (availableClients) => `This executor meets the demands of only ${availableClients.length} out of ${sortedClients.length} clients`],
    [isNoMet(sortedClients), (availableClients) => `This executor cannot meet the demands of any client!`]
  );
  
  console.log('\nFirst line: ', firstLine(availableClients));
  
  const output = availableClients.length 
      ? right(firstLine(availableClients) + '\n' + (availableClients.length && availableClients.reduce((output, client) => {
          return output + '\n' + `name: ${client.name}, distance: ${client.distance}, reward: ${client.reward}`;
        }, `\nAvailable clients sorted by ${sortBy === 'reward' ? 'highest reward:' : 'distance to executor:'}`)))
      : left(firstLine(availableClients));
  
  console.log('\nOutput: ', output);
  
  return output;
};


export const main = (sortBy: SortBy): Promise<string> => (
  Promise
    .all([getClients(), getExecutor()]) // Fetch clients and executor
    .then(([clients, executor]) => (
      pipe(
        /**
         * Since the "show" function takes two parameters, the value of which is inside Either
         * clients is Either<string, Array<Client>>, an executor is Either<string, Executor>. How to pass only Array<Client> and Executor to the show?
         * Either is an applicative type class, which means that we can apply each parameter by one
         */
        right(show(sortBy)), // Firstly, we need to lift our function to the Either
        ap(clients), // Apply first parameter
        ap(executor), // Apply second parameter
        flatten, // show at the end returns Either as well, so the result would be Either<string, Either<string, string>>. We need to flatten the result
        getOrElse((err) => err) // In case of any left (error) value, it would be stopped and show error. So, if clients or executor is left, the show would not be called, but onLeft in getOrElse would be called
      )
    ))
);
