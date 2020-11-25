import { NgModule } from '@angular/core'
import { Store } from '@ngrx/store'
import { getAuthToken } from '@nxpm-stack/admin/data-access-auth'
import { APOLLO_OPTIONS } from 'apollo-angular'
import { ApolloClientOptions, ApolloLink, InMemoryCache, split } from '@apollo/client/core'
import { WebSocketLink } from '@apollo/client/link/ws'
import { getMainDefinition } from '@apollo/client/utilities'
import { HttpLink } from 'apollo-angular/http'

import { environment } from '../environments/environment'

function wsUri(): string {
  return [
    // Replace 'http*' with 'ws*'
    location.protocol.replace('http', 'ws'),
    // Get the current hostname
    `//${location.hostname}`,
    // Get the current port
    `:${location.port}`,
    // And the GraphQL endpoint from the environment
    environment.graphql,
  ].join('')
}
const getHeaders = (token?: string) => {
  if (!token) {
    console.log('AdminFeatureCoreGraphQLModule: No Token')
    return undefined
  }
  return {
    authorization: token ? `Bearer ${token}` : null,
  }
}

export function createApollo(httpLink: HttpLink, store: Store): ApolloClientOptions<any> {
  let token
  store.select(getAuthToken).subscribe((res) => {
    token = res
  })
  const http = httpLink.create({ uri: environment.graphql })
  const middlewareLink = new ApolloLink((operation, forward) => {
    operation.setContext(() => {
      return {
        headers: getHeaders(token),
      }
    })
    return forward(operation)
  })
  const httpAuth = middlewareLink.concat(http)
  const ws = new WebSocketLink({
    uri: wsUri(),
    options: {
      reconnect: true,
    },
  })
  const link = split(
    ({ query }) => {
      const { kind, operation }: any = getMainDefinition(query)
      return kind === 'OperationDefinition' && operation === 'subscription'
    },
    ws,
    httpAuth,
  )
  return {
    link,
    cache: new InMemoryCache(),
  }
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink, Store],
    },
  ],
})
export class AdminFeatureCoreGraphQLModule {}
