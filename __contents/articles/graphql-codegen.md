---
title: GraphQL Code Generator로 타입선언 자동화하기
description: Github-Graph 프로젝트를 진행하면서 사용해본 GraphQL Code Generator에 대해 정리합니다.
thumbnail:
tags: ['GraphQL']
createdAt: 2023-03-27T12:31:14.761Z
---

> ## TL;DR
>
> - **자동 타입 생성 도구**: GraphQL Code Generator는 GraphQL 스키마를 기반으로 타입 정의, 인터페이스, 그리고 React Hook 등을 자동으로 생성해주는 도구로, 수동으로 타입을 정의하는 번거로움을 줄여줍니다.
> - **설정 파일을 통해 간편한 설정**: `codegen.yml` 파일을 통해 스키마 위치, 문서 위치, 생성될 타입의 위치와 사용 플러그인을 설정할 수 있습니다. 이 설정을 통해 프로젝트의 타입 관리가 자동화됩니다.
> - **GitHub GraphQL API와의 통합**: GitHub GraphQL API와 같은 인증이 필요한 API에도 적용 가능하며, 설정 파일에 인증 토큰을 추가해 타입 자동 생성 및 API 호출을 쉽게 할 수 있습니다.

## GraphQL Code Generator란?

**[GraphQL Code Generator](https://www.graphql-code-generator.com/docs/getting-started)는 GraphQL을 사용하는 프로젝트에서 사용할 수 있는 플러그인 기반 도구입니다. 이를 사용하면 API 데이터 타입 및 인터페이스 정의와 같은 타입 관련 작업을 자동화할 수 있습니다.** 즉, GraphQL 요청의 응답을 위한 타입들을 매번 직접 정의할 필요없이 GraphQL 스키마를 기반으로 자동으로 생성해주는 도구입니다.

**이제 실질적인 이해를 위해서 [GitHub GraphQL API](https://docs.github.com/en/graphql)에 이를 적용해보도록 봅시다.**

## 설치

GraphQL Code Generator를 사용하기 위해서 다음 명령어로 관련 패키지들을 설치합니다.

```sh
yarn add graphql
yarn add -D @graphql-codegen/cli
```

`React`, `Typescript`, `Apollo-Client` 프로젝트를 위한 패키지들을 설치합니다.

```sh
yarn add -D @graphql-codegen/typescript-react-apollo @graphql-codegen/typescript @graphql-codegen/typescript-operations
```

## 설정

프로젝트의 루트 위치에 `codegen.(yaml|yml)` 을 생성하고 다음과 같이 작성합니다.

```yml
schema: https://api.github.com/graphql
documents: "./src/graphql/*.graphql"
generates:
	./src/graphql/generated.ts
    plugins:
      - typescript
      - typescript-operations
      - typescript-react-apollo
    config:
      withHooks: true
			scalars:
        URI: string
```

- **`schema`**

  - **GraphQL 스키마의 위치를 지정**합니다.
  - 일반적으로 GraphQL 서버의 엔드포인트(URL)로 지정합니다.
  - URL뿐만 아니라 다양한 형식을 지원하며 로컬 파일도 지정할 수 있습니다.

- **`documents`**

  - **타입을 자동생성할 GraphQL의 Query, Mutation, Subscription을 지정**합니다.
  - 저는 `src/graphql` 디렉토리에 쿼리들을 모아둘 것이기 때문에 위와 같이 작성했습니다.

- **`generates`**

  - **타입 자동 생성을 위한 설정을 지정합니다.**
  - 저는 쿼리들과 동일한 위치에 `generated.ts` 라는 파일명으로 생성할 것이기 때문에 위와 같이 작성했습니다.

- **`plugins`**

  - **타입 자동 생성을 위한 플러그인을 지정**하며 환경에 따라 달라집니다.

- **`config`**

  - **타입 자동 생성시 적용할 옵션을 지정합니다.**
  - 저는 `useQuery`와 같은 Hook을 함께 생성해주길 원해서 `withHooks`을 사용했고 GitHub API가 추가 스칼라 타입을 사용하고 있기 때문에 이를 위한 타입을 따로 지정하지 않으면 에러가 발생해서 `URI` 타입을 `string`으로 지정하는 옵션을 추가했습니다.

> - **`*.yml`과 `*.yaml`은 동일하게 동작하지만 공식적으로는 `yaml`의 사용을 권장한다.**
> - 과거의 윈도우 환경에서는 확장자의 길이를 3글자만 사용했었기 때문에 윈도우 개발자의 경우에는 `yml`을 사용하는 경향이 있다.

GitHub API의 경우에 인증이 필요한데 이렇게 API 요청에 인증이 필요한 경우에는 다음과 같이 `schema`의 `headers`에 토큰 키를 넣어줍니다.

```yaml
schema:
  - https://api.github.com/graphql:
      headers:
        Authorization: 'Bearer ${REACT_APP_GITHUB_TOKEN}'
```

`package.json`의 `scripts` 를 다음과 같이 추가합니다.

```json
{
  "scripts": {
    "generate": "graphql-codegen -r dotenv/config"
  }
}
```

## 사용

**지금까지 GraphQL Code Generator의 사용을 위한 모든 준비를 마쳤으니 실행해봅시다.**

먼저 실행하기 위해서 사용할 쿼리가 있어야하기 때문에 위에서 지정했던 `documents`의 위치인 `src/graphql` 디렉토리에 `User.graphql` 이라는 파일을 생성하고 다음과 같이 작성합니다.

```graphql
query getUser($username: String!) {
  user(login: $username) {
    login
    name
    email
    websiteUrl
    company
    avatarUrl(size: 200)
    location
    following {
      totalCount
    }
    followers {
      totalCount
    }
    repositories {
      totalCount
    }
    starredRepositories {
      totalCount
    }
  }
}
```

다음 명령어로 실행합니다.

```sh
yarn generate
```

간혹 진행 중에 에러가 발생할 수도 있는데 대부분의 경우 토큰 문제이니 토큰을 제대로 입력했는지, 토큰의 권한이 부족하지는 않는지 확인하도록 합시다.

실행이 완료되면 `src/graphql` 디렉토리 내부에 `generated.ts` 파일이 생성되고 최하단에 작성한 쿼리에 대한 타입 정의가 되어있음을 확인할 수 있습니다.

```ts title="src/graphql/generated.ts"
// ...
export type GetUserQuery = {
  __typename?: 'Query';
  user?: {
    __typename?: 'User';
    login: string;
    name?: string | null;
    email: string;
    websiteUrl?: string | null;
    company?: string | null;
    avatarUrl: string;
    location?: string | null;
    following: { __typename?: 'FollowingConnection'; totalCount: number };
    followers: { __typename?: 'FollowerConnection'; totalCount: number };
    repositories: { __typename?: 'RepositoryConnection'; totalCount: number };
    starredRepositories: {
      __typename?: 'StarredRepositoryConnection';
      totalCount: number;
    };
  } | null;
};

export type GetFollowingsQueryVariables = Exact<{
  username: Scalars['String'];
  after?: InputMaybe<Scalars['String']>;
}>;

// ...생략...

export function useGetUserQuery(
  baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    options
  );
}
export function useGetUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    options
  );
}
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<
  GetUserQuery,
  GetUserQueryVariables
>;
export const GetFollowingsDocument = gql`
  query getFollowings($username: String!, $after: String) {
    user(login: $username) {
      following(first: 20, after: $after) {
        nodes {
          login
          name
          bio
          avatarUrl(size: 150)
          company
          location
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`;
```

이제 위의 타입 정보를 활용해서 프로젝트에서 사용만 해주면 됩니다.!

## 참조

- https://www.graphql-code-generator.com/docs/getting-started
